import { useRef } from "react";
import Swal from "sweetalert2";
import { saveExam } from "../../service/ExamService";

function ModalNewExam({carregarExames}) {

    const nameExam = useRef()
    const typeExam = useRef()
    const preco = useRef()
    const description = useRef()

    const salvarExame = async () => {
        saveExam(nameExam.current.value,typeExam.current.value,preco.current.value,description.current.value,)
        .then(Response =>{
            console.log(Response)
            nameExam.current.value = ""
            typeExam.current.value = ""
            preco.current.value = ""
            description.current.value = ""
            Swal.fire({
                title: "Sucesso!",
                text: "Exame Adicionado com Sucesso!",
                icon: "success"
            });
            carregarExames();
        }).catch(error => console.log(error))
        
    }


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
                            <button onClick={salvarExame} className="btn btn-danger px-4 fw-bold text-center">
                                Adicionar Exame
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