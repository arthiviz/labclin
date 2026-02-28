import { useEffect, useRef } from "react";
import Swal from "sweetalert2";
import { deleteExam, saveExam, updateExam } from "../../service/ExamService";

function ModalNewExam({carregarExames,editExam,setEditExam}) {

    const nameExam = useRef()
    const typeExam = useRef()
    const preco = useRef()
    const description = useRef()

    useEffect(()=>{
        if(editExam){
            nameExam.current.value = editExam.name || "Sem nome"
            typeExam.current.value = editExam.type || "Sem tipo"
            preco.current.value = editExam.preco || "sem preco"
            description.current.value = editExam.description
    
        }else{
            limparFormulario()
        }
    },[editExam])

    const limparFormulario = ()=>{
        nameExam.current.value = null
        typeExam.current.value = null
        preco.current.value = null
        description.current.value = null
    }

    const onSave = async () =>{
        const dados ={
            name: nameExam.current.value,
            typeExam: typeExam.current.value,
            preco: preco.current.value,
            description: description.current.value
        }
        try{
            if(editExam){
                await updateExam(dados.name,dados.typeExam,dados.preco,dados.description,editExam.id)
                Swal.fire("Atualizado!", "Exame Atualizado com Sucesso.", "success");
                carregarExames();
                limparFormulario()
            }else{
                await saveExam(dados.name,dados.typeExam,dados.preco,dados.description)
                Swal.fire("Adicionado!", "Exame Adicionado com Sucesso.", "success");
                carregarExames();
                limparFormulario()
            }
        }catch(erro){
            console.log(erro)
            Swal.fire("Erro", "Não foi possível salvar os dados", "error");
        }
    }

    useEffect(() => {
        const modalElement = document.getElementById("modalNewExam")

        const handleClose = () => {
            limparFormulario()
            setEditExam(null)
            
        }

        modalElement.addEventListener("hidden.bs.modal", handleClose)

        return () => {
            modalElement.removeEventListener("hidden.bs.modal", handleClose)
        }
    }, [])



    return (
        <div className="modal fade" id="modalNewExam" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-light">
                        <h5 className="modal-title text-danger">Novo Exame</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                    <div className="p-3">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Nome*</label>
                                <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="Hemograma" ref={nameExam}/>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Tipo</label>
                                <select name="exams" id="exams" className="form-select border-secondary-subtle bg-light" ref={typeExam}>
                                    <option value="null">Selecione o tipo</option>
                                    <option value="1">Exame 1</option>
                                    <option value="2">Exame 2</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Valor do Exame*</label>
                                <input type="number" className="form-control border-secondary-subtle bg-light" ref={preco} placeholder="R$30,00" />
                            </div>
                        </div>

                        <div className="col-md-12 mb-4">
                            <label className="form-label fw-bold">Descrição</label>
                            <textarea className="form-control border-secondary-subtle bg-light" ref={description} placeholder="Ex: Deve ser realizado em jejum"></textarea>
                        </div>
                    

                        <div className="d-flex justify-content-center">
                            <button onClick={onSave} className="btn btn-danger px-4 fw-bold text-center">
                                {editExam ? "Atualizar Exame" : "Cadastrar Exame"}
                            </button>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNewExam;