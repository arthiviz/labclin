import { useState } from "react";
import { deleteMedic } from "../../service/Medics";
import Swal from "sweetalert2";
import ModalNewMedic from "../ModalNewMedic/ModalNewMedic";
import { useMedics } from "../../contexts/Medic";

function MedicList({setEditMedic,editMedic}){

    const {medics,carregarMedicos,loadingMedics} = useMedics();
    
    const [pesquisa,setPesquisa] = useState("")
    const medicosFiltrados = medics?.filter(medic => medic.name.toLowerCase().includes(pesquisa.toLowerCase()))

    const deleteMedicById = async(id)=>{
        Swal.fire({
            title: "Deseja Remover Esse Médico?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff0000",
            cancelButtonColor: "rgb(76, 76, 76)",
            confirmButtonText: "Sim, Remover!"
            }).then( async (result) => {
            if (result.isConfirmed) {
                 try{
                    const response = await deleteMedic(id);
                        console.log(response)
                        Swal.fire("sucesso!","Médico Removido Com Sucesso!","success")
                        carregarMedicos()
                    }catch(error){
                        console.log(error);
                        Swal.fire("Erro","Erro Ao Remover A Coleta!","error")
                    }
            }
            });
    }

    const onEdit = (medic)=>{
            setEditMedic(medic)
        }
        

    return (
        <div className="bg-white rounded-4 border border-2 border-secondary-subtle shadow-sm p-4 gap-4">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="d-flex flex-column">
                    <strong>Lista de Medicos</strong>
                    <small>Todos os Medicos cadastrados.</small>
                </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row g-3">
                        <div className="col-12 col-md-7">
                            <input type="text" placeholder="Buscar Médico" value={pesquisa} className="form-control bg-light" onChange={(valor)=>{
                                setPesquisa(valor.target.value)
                            }}/>
                        </div>
                        <div className="col-12 col-md-3">
                            <button className="btn btn-danger w-100" >Buscar</button>
                        </div>
                        <div className="col-12 col-md-2">
                            <button data-bs-toggle="modal" data-bs-target="#modalNewMedic" className="btn btn-danger w-100"><i className="bi bi-plus-lg"></i>Novo</button>
                        </div>
                        
                    </div>
                </div>
            </div>

                        {loadingMedics ?(
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border text-danger" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ):(
                            medicosFiltrados.length > 0 ?

                            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                                <table className="table table-hover mt-3">
                                    {/* sticky-top faz o cabeçalho ficar parado enquanto o corpo rola */}
                                    <thead className="sticky-top bg-white" style={{ zIndex: 1 }}>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nome</th>
                                            <th>Especialização</th>
                                            <th>CRM</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {medicosFiltrados.map((medico,index) =>(
                                            <tr key={medico.id || index}>
                                                <td>{medico.id}</td>
                                                <td>{medico.name  || "-"}</td>
                                                <td>{medico.especializacao || "-"}</td>
                                                <td>{medico.CRM|| "-"}</td>
                                                <td className="d-flex gap-4 justify-content-end">

                                                        <button onClick={()=> onEdit(medico)} data-bs-toggle="modal" data-bs-target="#modalNewMedic" className="btn btn-client btn-outline-primary rounded-4"><i className="bi bi-pencil-square"></i></button>
                                                        <button onClick={()=> deleteMedicById(medico.id)} className="btn btn-client btn-outline-danger rounded-4"><i className="bi bi-trash"></i></button>
                                                    </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                         :
                          <tr className='w-100'>
                            <td>Nenhum Medico Encontrado</td>
                            <td></td><td></td><td></td><td></td>
                        </tr>)}
                    
            <ModalNewMedic editMedic={editMedic} carregarMedicos={carregarMedicos} setEditMedic={setEditMedic}/>
            
        </div>  
    )
}
export default MedicList;