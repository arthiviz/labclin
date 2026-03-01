import {  useEffect, useRef } from "react";
import { createClient, updateClient } from "../../service/ClientService";
import Swal from "sweetalert2";
import { formatarCPF, formatarTelefone, noDigits } from "../../utils/masks";

function FormClient({carregarUsuarios,editClient}) {

    const name = useRef();
    const CPF = useRef();
    const telephone = useRef();
    const email = useRef();
    const birthDate = useRef();
    const adress = useRef();

    useEffect(() => {
        if (editClient) {
            name.current.value = editClient.name || "";
            CPF.current.value = editClient.CPF || "";
            telephone.current.value = editClient.telephone || "";
            email.current.value = editClient.email || "";
            
            // Tratando a data para o formato AAAA-MM-DD
            if (editClient.birthDate) {
                birthDate.current.value = editClient.birthDate.substring(0, 10);
            }
            
            adress.current.value = editClient.address || "";
        }
    }, [editClient]);

    const handleChange = (e)=>{
        let { name, value } = e.target;

        if (name === "cpf") {
            value = formatarCPF(value);
            CPF.current.value = value;
        }

        if (name === "phone") {
            value = formatarTelefone(value);
            telephone.current.value = value;
        }
    }


    const handleSave = async () => {
        const dados = {
            name: name.current.value,
            CPF: noDigits(CPF.current.value),
            telephone: noDigits(telephone.current.value),
            email: email.current.value,
            birthDate: birthDate.current.value,
            adress: adress.current.value
        };

        try {
            if (editClient) {
                await updateClient(dados.name,dados.CPF,dados.telephone,dados.email,dados.birthDate,dados.adress,editClient.id)
                Swal.fire("Atualizado!", "Paciente atualizado com sucesso.", "success");
                carregarUsuarios();
                limparFormulario();
            } else {
                // LÓGICA DE CRIAÇÃO
                await createClient(dados.name, dados.CPF, dados.telephone, dados.email, dados.birthDate, dados.adress);
                Swal.fire("Sucesso!", "Paciente cadastrado com sucesso.", "success");
                carregarUsuarios();
                limparFormulario();
            }

            
        } catch (erro) {
            console.error(erro);
            Swal.fire("Erro", "Não foi possível salvar os dados", "error");
        }
    };

    const limparFormulario = () => {
        name.current.value = "";
        CPF.current.value = "";
        telephone.current.value = "";
        email.current.value = "";
        birthDate.current.value = "";
        adress.current.value = "";
    };

    

    return (
        <div className="d-flex flex-wrap align-items-evenly gap-4">
            <div className="border border border-2 border-secondary-subtle shadow-sm p-4 rounded-4 bg-white w-100">
                
                <div className="d-flex flex-column">
                    <strong>Cadastro de Pacientes</strong>
                    <small>Preencha os dados do novo paciente</small>
                </div>


                <div className="p-3 mt-4">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Nome Completo*</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="João da Silva" ref={name}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">CPF</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" name="cpf" placeholder="000.000.000-00" ref={CPF} onChange={handleChange}/>
                        </div>
                    </div>

                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Telefone</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" name="phone" placeholder="(00) 00000-0000" ref={telephone} onChange={handleChange}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">E-mail</label>
                            <input type="email" className="form-control border-secondary-subtle bg-light" placeholder="joao@exemplo.com" ref={email}/>
                        </div>
                    </div>

                    
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Data de Nascimento*</label>
                            <input type="date" className="form-control border-secondary-subtle bg-light" ref={birthDate} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Endereço</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="Rua, número, bairro" ref={adress}/>
                        </div>
                    </div>

                    
                    <button onClick={handleSave} className="btn btn-danger px-4 fw-bold">
                        {editClient ? "Salvar Alterações" : "Cadastrar Cliente"}
                    </button>
                </div>
                
                
                
            </div>
        </div>
    );
}

export default FormClient;
