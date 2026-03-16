import { useEffect, useRef, useState } from "react";
import { saveMedic, updateMedic } from "../../service/Medics";
import Swal from "sweetalert2";

function ModalNewMedic({editMedic,carregarMedicos,setEditMedic}){

    const[loading,setLoading] = useState(false)
    const especializacao = useRef()
    const nameMedic = useRef()
    const CRM = useRef()

    useEffect(()=>{
            if(editMedic){
                nameMedic.current.value = editMedic.name || "Sem nome"
                especializacao.current.value = editMedic.especializacao || "Sem tipo"
                CRM.current.value = editMedic.CRM || "sem preco"
        
            }else{
                limparFormulario()
            }
        },[editMedic])
    
        const limparFormulario = ()=>{
            nameMedic.current.value = null
            especializacao.current.value = null
            CRM.current.value = null
        }
    
        const onSave = async () =>{
            const dados ={
                name: nameMedic.current.value,
                especializacao: especializacao.current.value,
                CRM: CRM.current.value,
            }
            try{
                setLoading(true)
                if(editMedic){
                    await updateMedic(dados,editMedic.id)
                    Swal.fire("Atualizado!", "Médico Atualizado com Sucesso.", "success");
                    carregarMedicos();
                }else{
                    await saveMedic(dados)
                    Swal.fire("Adicionado!", "Médico Adicionado com Sucesso.", "success");
                    carregarMedicos();
                    limparFormulario()
                }
            }catch(erro){
                console.log(erro)
                const mensagemServidor = erro.response && erro.response.data 
                    ? erro.response.data 
                    : "Erro desconhecido ao salvar";
                
                Swal.fire("Erro!", mensagemServidor, "error");
            }finally{
                setLoading(false)
            }
        }
    
        useEffect(() => {
            const modalElement = document.getElementById("modalNewMedic")
    
            const handleClose = () => {
                limparFormulario()
                setEditMedic(null)
            }
    
            modalElement.addEventListener("hidden.bs.modal", handleClose)
    
            return () => {
                modalElement.removeEventListener("hidden.bs.modal", handleClose)
            }
        }, [])
    

    return(
        <div className="modal fade" id="modalNewMedic" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-light">
                        <h5 className="modal-title text-danger">Novo Médico</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                    <div className="p-3">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Nome*</label>
                                <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="João Da Silva" ref={nameMedic}/>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Especialização*</label>
                                <select name="medics" id="exams" className="form-select border-secondary-subtle bg-light" ref={especializacao}>
                                    <option value="null">Selecione a especialização</option>
                                    <option value="1">Esp. 1</option>
                                    <option value="2">ESp. 2</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">CRM*</label>
                                <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="12345" ref={CRM} />
                            </div>
                        </div>
                    

                        <div className="d-flex justify-content-center">
                            {loading ?(
                                <button onClick={onSave} className="btn btn-danger px-4 fw-bold text-center">
                                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                    <span role="status">Carregando...</span>
                                </button>
                            ):(
                                <button onClick={onSave} className="btn btn-danger px-4 fw-bold text-center">
                                    {editMedic ? "Atualizar Médico" : "Cadastrar Médico"}
                                </button>
                            )}
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalNewMedic;