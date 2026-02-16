function ModalNewExam() {
    return (
        <div className="modal fade" id="modalNewExam" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header" style={{backgroundColor: "#d7d7d7"}}>
                        <h5 className="modal-title text-danger">Novo Exame</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    
                    <div className="p-3">
                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Nome*</label>
                                <input type="text" className="form-control border-secondary-subtle" placeholder="Hemograma" style={{backgroundColor: "#d7d7d7"}} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Tipo</label>
                                <select name="exams" id="exams" className="form-select border-secondary-subtle" style={{backgroundColor: "#d7d7d7"}}>
                                    <option value="null">Selecione o tipo</option>
                                    <option value="1">Exame 1</option>
                                    <option value="2">Exame 2</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Valor do Exame*</label>
                                <input type="number" className="form-control border-secondary-subtle" placeholder="R$30,00" style={{backgroundColor: "#d7d7d7"}} />
                            </div>
                        </div>

                        <div className="col-md-12 mb-4">
                            <label className="form-label fw-bold">Descrição</label>
                            <textarea className="form-control border-secondary-subtle" placeholder="Ex: Deve ser realizado em jejum" style={{backgroundColor: "#d7d7d7", height: "100px"}}></textarea>
                        </div>
                    

                        <div className="d-flex justify-content-center">
                            <button className="btn btn-danger px-4 fw-bold text-center">
                                Novo Atendimento
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