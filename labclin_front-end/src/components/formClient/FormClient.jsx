function FormClient() {
    return (
        <div className="d-flex flex-wrap align-items-evenly gap-4">
            <div className="border border border-danger p-4 rounded-4 bg-white w-100">
                
                <div className="d-flex flex-column">
                    <strong>Cadastro de Pacientes</strong>
                    <small>Preencha os dados do novo paciente</small>
                </div>


                <div className="p-3 mt-4">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Nome Completo*</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="João da Silva" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">CPF</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="000.000.000-00" />
                        </div>
                    </div>

                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Telefone</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="(00) 00000-0000" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">E-mail</label>
                            <input type="email" className="form-control border-secondary-subtle bg-light" placeholder="joao@exemplo.com" />
                        </div>
                    </div>

                    
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Data de Nascimento*</label>
                            <input type="date" className="form-control border-secondary-subtle bg-light" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Endereço</label>
                            <input type="text" className="form-control border-secondary-subtle bg-light" placeholder="Rua, número, bairro" />
                        </div>
                    </div>

                    
                    <button className="btn btn-danger px-4 fw-bold">
                        Cadastrar Cliente
                    </button>
                </div>
                
                
                
            </div>
        </div>
    );
}

export default FormClient;
