import './listClient.css'
import ModalNewClient from '../ModalNewClient/ModalNewClient';
import { useEffect, useState } from 'react';
import { deleteCLient } from '../../service/ClientService';
import Swal from 'sweetalert2';
import { formatarCPF, formatarTelefone } from '../../utils/masks';
import { useClients } from '../../contexts/ClientContext';

function ListClient() {

    const {clients, carregarUsuarios} = useClients();

    const [editClient,setEditClient] = useState();

    const [pesquisa,setPesquisa] = useState("")
    const clientsFiltrados = clients?.filter(client => client.name.toLowerCase().includes(pesquisa.toLowerCase()))
    
    const onEdit = (client) =>{
        setEditClient(client)
    }

    const formatarData = (dateString) => { 
        if (!dateString) return "Sem data";
        
        const [ano, mes, dia] = dateString.split("-");
        return `${dia}/${mes}/${ano}`;
    };

    const deleteById = async (id) =>{

        Swal.fire({
            title: "Deseja Remover Esse Cliente?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff0000",
            cancelButtonColor: "rgb(76, 76, 76)",
            confirmButtonText: "Sim, Remover!"
            }).then( async (result) => {
            if (result.isConfirmed) {
                const response = await deleteCLient(id)
                .then(response =>{
                    Swal.fire("Removido!", "Paciente Removido com sucesso.", "success");
                    carregarUsuarios();
                }).catch(erro => {
                    Swal.fire("Erro!", "Erro ao Remover Paciente.", "error");
                })
            }
            });
        
    }



    return (
        <div className="bg-white rounded-4 border border-2 border-secondary-subtle shadow-sm p-4 gap-4">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column">
                    <strong>Lista de Pacientes</strong>
                    <small>Todos os pacientes cadastrados.</small>
                </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row g-3">
                        <div className="col-12 col-md-9">
                            <input type="text" placeholder="Buscar paciente" value={pesquisa} className="form-control bg-light" onChange={(valor)=>{
                                setPesquisa(valor.target.value)
                            }}/>
                        </div>
                        <div className="col-12 col-md-3">
                            <button className="btn btn-danger w-100" >Buscar</button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                <table className="table table-hover mt-3">
                    {/* sticky-top faz o cabeçalho ficar parado enquanto o corpo rola */}
                    <thead className="sticky-top bg-white" style={{ zIndex: 1 }}>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Data de Nascimento</th>
                            <th>Telefone</th>
                            <th>Afiliação</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsFiltrados.length > 0 ?

                            clientsFiltrados.map((client,index) =>(
                                <tr key={client.id || index}>
                                    <td>{client.name}</td>
                                    <td>{formatarCPF(client?.CPF)  || "-"}</td>
                                    <td>{formatarData(client.birthDate)|| "-"}</td>
                                    <td>{formatarTelefone(client?.telephone) || "-"}</td>
                                    <td>{client.name_mae || "Não Informado"}</td>
                                    <td className='text-center'><span className={`bagde rounded-pill p-1 ${client.status === "REGULAR"? "text-bg-success":"text-bg-warning"}`}>{client.status || "não informado"}</span></td>
                                    <td className="d-flex gap-4 justify-content-end">
                                            <button onClick={()=> onEdit(client)} data-bs-toggle="modal" data-bs-target="#modalNewClient" className="btn btn-client btn-outline-primary rounded-4"><i className="bi bi-pencil-square"></i></button>
                                            <button onClick={()=> deleteById(client.id)} className="btn btn-client btn-outline-danger rounded-4"><i className="bi bi-trash"></i></button>
                                        </td>
                                </tr>
                            ))


                         : <tr className='w-100'>
                            <td>Nenhum Paciente Encontrado</td>
                            <td></td><td></td><td></td><td></td>
                        </tr>}
                    </tbody>
                </table>
            </div>
            <ModalNewClient editClient = {editClient} carregarUsuarios = {carregarUsuarios}/>
            
        </div>
    );
}

export default ListClient;
