import "./MedicDashboard.css"

function MedicDashboard({medics}) {
    return (
        <div className="row g-4">
            <div className="col-lg-3 col-md-6 col-12">
                <div className="border border border-danger p-4 rounded-4 bg-white cardDash">
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>Total de Médicos</strong>
                        <i className="bi bi-activity text-danger"></i>
                    </div>
                    <div className="my-4">
                        <p><strong className="fs-2">{medics.length}</strong></p>
                        <small className="text-muted">+12% desde ontem</small>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="border border border-danger p-4 rounded-4 bg-white cardDash">
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>Coletas com Médicos</strong>
                        <i className="bi bi-people text-danger"></i>
                    </div>
                    <div className="my-4">
                        <p><strong className="fs-2">2</strong></p>
                        <small className="text-muted">+180 este mês</small>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="border border border-danger p-4 rounded-4 bg-white cardDash">
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>Média de Médico Por Coleta</strong>
                        <i className="bi bi-fire text-danger"></i>
                    </div>
                    <div className="my-4">
                        <p><strong className="fs-2">4</strong></p>
                        <small className="text-muted">Este mês</small>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="border border border-danger p-4 rounded-4 bg-white cardDash">
                    <div className="d-flex justify-content-between align-items-center">
                        <strong>Médico mais Frequentado</strong>
                        <i className="bi bi-graph-up-arrow text-danger"></i>
                    </div>
                    <div className="my-4">
                        <p><strong className="fs-2">Adolfo Pires</strong></p>
                        <small className="text-muted">+2.1% desde o último mês</small>
                    </div>
                </div>
            </div>
            


            


            


            
        </div>
    );
}
export default MedicDashboard;