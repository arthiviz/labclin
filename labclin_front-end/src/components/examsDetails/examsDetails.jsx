function ExamsDetails() {
    return (
        <div className="card  border border-danger rounded-4 overflow-hidden w-100" style={{ maxWidth: '500px' }}>
            {/* Cabeçalho Vermelho */}
            <div className="bg-danger p-3 text-white">
                <h5 className="mb-0 fw-bold">Resumo Geral</h5>
                <small className="opacity-75">Visão geral dos exames cadastrados</small>
            </div>

            {/* Corpo do Card */}
            <div className="card-body p-4">
                
                {/* Linhas de Dados */}
                <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                <span className="text-secondary fw-semibold">Total de Exames</span>
                <span className="fs-5 fw-bold">8</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                <span className="text-secondary fw-semibold">Solicitações</span>
                <span className="text-primary fw-bold fs-5">945</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                <span className="text-secondary fw-semibold">Receita Total</span>
                <span className="text-success fw-bold fs-5">R$ 34.424,00</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                <span className="text-secondary fw-semibold">Preço Médio</span>
                <span className="fw-bold fs-5" style={{ color: '#6f42c1' }}>R$ 40,38</span>
                </div>

                {/* Lista de Exames por Tipo */}
                <h6 className="fw-bold mb-3">Exames por Tipo</h6>
                
                <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between mb-2">
                    <span><i className="bi bi-circle-fill me-2 text-primary small"></i> Hematologia</span>
                    <span className="fw-bold">1</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                    <span><i className="bi bi-circle-fill me-2 text-danger small"></i> Bioquímica</span>
                    <span className="fw-bold">2</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                    <span><i className="bi bi-circle-fill me-2 text-warning small"></i> Hormonal</span>
                    <span className="fw-bold">1</span>
                </li>
                <li className="d-flex justify-content-between mb-2">
                    <span><i className="bi bi-circle-fill me-2 text-success small"></i> Sorologia</span>
                    <span className="fw-bold">1</span>
                </li>
                </ul>

                {/* Badges Inferiores */}
                <div className="d-flex gap-2 mt-4">
                <div className="flex-grow-1 p-2 rounded-3 text-center" style={{ backgroundColor: '#ffe5e5' }}>
                    <span className="fw-bold text-dark">118.1</span> <small>Média/Exame</small>
                </div>
                <div className="flex-grow-1 p-2 rounded-3 text-center" style={{ backgroundColor: '#e3f2fd' }}>
                    <span className="fw-bold text-dark">4</span> <small>Tipos Ativos</small>
                </div>
                </div>

            </div>
            </div>
    );
}

export default ExamsDetails;
