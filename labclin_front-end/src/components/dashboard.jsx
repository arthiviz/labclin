function Dashboard() {
    return (
        <div className="d-flex flex-wrap align-items-evenly gap-4">
            <div className="border border-2 border p-4 rounded-4 bg-white " style={{width: "375px", height: "180px"}}>
                
                
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Atendimentos Hoje</strong>
                    <i className="bi bi-activity text-danger"></i>
                </div>
                <div className="my-4">
                    <p><strong className="fs-2">23</strong></p>
                    <small className="text-muted">+12% desde ontem</small>
                </div>
            </div>


            <div className="border border-2 border p-4 rounded-4 bg-white" style={{width: "375px", height: "180px"}}>
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Total de Pacientes</strong>
                    <i className="bi bi-people text-danger"></i>
                </div>
                <div className="my-4">
                    <p><strong className="fs-2">1.248</strong></p>
                    <small className="text-muted">+180 este mês</small>
                </div>
            </div>


            <div className="border border-2 border p-4 rounded-4 bg-white" style={{width: "375px", height: "180px"}}>
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Coletas Realizadas</strong>
                    <i className="bi bi-fire text-danger"></i>
                </div>
                <div className="my-4">
                    <p><strong className="fs-2">856</strong></p>
                    <small className="text-muted">Este mês</small>
                </div>
            </div>


            <div className="border border-2 border p-4 rounded-4 bg-white" style={{width: "375px", height: "180px"}}>
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Dias Abertos</strong>
                    <i className="bi bi-graph-up-arrow text-danger"></i>
                </div>
                <div className="my-4">
                    <p><strong className="fs-2">20</strong></p>
                    <small className="text-muted">+2.1% desde o último mês</small>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;