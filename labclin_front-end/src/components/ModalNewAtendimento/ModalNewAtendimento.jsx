function ModalNewAtendimento() {
  return (
    
    <div className="modal fade" id="modalNewAtendimento" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header" style={{backgroundColor: "#d7d7d7"}}>
                    <h5 className="modal-title text-danger">Novo Atendimento</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                    <div className="p-3">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Cliente*</label>
                            <select name="cliente" id="cliente" className="form-select border-secondary-subtle" style={{backgroundColor: "#d7d7d7"}}>
                                <option value="null">Selecione um cliente</option>
                                <option value="1">João da Silva</option>
                                <option value="2">Maria Oliveira</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Exames</label>
                            <select name="exams" id="exams" className="form-select border-secondary-subtle" style={{backgroundColor: "#d7d7d7"}}>
                                <option value="null">Selecione os exames</option>
                                <option value="1">Exame 1</option>
                                <option value="2">Exame 2</option>
                            </select>
                        </div>
                    </div>

                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Data da Coleta*</label>
                            <input type="date" className="form-control border-secondary-subtle" style={{backgroundColor: "#d7d7d7"}} />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Tipo de Pagamento</label>
                            <select name="tipoPagamento" id="tipoPagamento" className="form-select border-secondary-subtle" style={{backgroundColor: "#d7d7d7"}}>
                                <option value="null">Selecione o tipo de pagamento</option>
                                <option value="dinheiro">Dinheiro</option>
                                <option value="pix">PIX</option>
                                <option value="debito">Débito</option>
                                <option value="cartao-1x">Crédito á vista</option>
                                <option value="cartao-2x">Crédito 2x</option>
                                <option value="cartao-3x">Crédito 3x</option>
                                <option value="cartao-4x">Crédito 4x</option>
                                <option value="cartao-5x">Crédito 5x</option>
                                <option value="cartao-6x">Crédito 6x</option>
                            </select>
                        </div>
                    </div>

                    
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Total*</label>
                            <input type="text" className="form-control border-secondary-subtle" placeholder="Valor Total"  style={{backgroundColor: "#d7d7d7"}}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Total Pago</label>
                            <input type="text" className="form-control border-secondary-subtle" placeholder="Valor Pago" style={{backgroundColor: "#d7d7d7"}}/>
                        </div>
                        <div>
                            <label className="form-label fw-bold">Observações</label>
                            <textarea className="form-control border-secondary-subtle" placeholder="Observações adicionais" style={{backgroundColor: "#d7d7d7"}}></textarea>
                        </div>
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

  );
}
export default ModalNewAtendimento;