import {  useEffect, useRef } from "react";
import { createClient } from "../../service/ClientService";
import Swal from "sweetalert2";

function FormClient({carregarUsuarios,editClient}) {

    // Seus refs continuam iguais
    const name = useRef();
    const CPF = useRef();
    const telephone = useRef();
    const email = useRef();
    const birthDate = useRef();
    const adress = useRef();

    useEffect(() => {
        if (editClient) {
            // Preenchendo os campos quando o editClient mudar
            name.current.value = editClient.name || "";
            CPF.current.value = editClient.CPF || "";
            telephone.current.value = editClient.telephone || "";
            email.current.value = editClient.email || "";
            
            // Tratando a data para o formato AAAA-MM-DD
            if (editClient.birthDate) {
                birthDate.current.value = editClient.birthDate.substring(0, 10);
            }
            
            adress.current.value = editClient.adress || "";
        }
    }, [editClient]);

    const handleSave = async () => {
        // Coleta os valores atuais dos refs
        const dados = {
            name: name.current.value,
            CPF: CPF.current.value,
            telephone: telephone.current.value,
            email: email.current.value,
            birthDate: birthDate.current.value,
            adress: adress.current.value
        };

        try {
            if (editClient) {
                // LÓGICA DE EDIÇÃO (Chame seu service de Update aqui)
                // await updateClient(editClient.id, dados);
                Swal.fire("Atualizado!", "Paciente atualizado com sucesso.", "success");
                limparFormulario();
                carregarUsuarios();
            } else {
                // LÓGICA DE CRIAÇÃO
                await createClient(dados.name, dados.CPF, dados.telephone, dados.email, dados.birthDate, dados.adress);
                Swal.fire("Sucesso!", "Paciente cadastrado com sucesso.", "success");
                limparFormulario();
                carregarUsuarios();
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
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="000.000.000-00" ref={CPF}/>
                        </div>
                    </div>

                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Telefone</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="(00) 00000-0000" ref={telephone}/>
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
