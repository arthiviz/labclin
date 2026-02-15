import "./DashBoard.css"

function DashService() {
  return (
    <div className="d-flex flex-wrap align-items-between gap-4">
            <div className="border border-danger p-3 rounded-4 bg-white cardService">
                
                
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-activity text-danger"></i>
                    <span className="badge bg-primary opacity-75">Total</span>
                </div>
                <div >
                    <p><strong className="fs-3">23</strong></p>
                    <small className="text-muted">Atendimentos</small>
                </div>
            </div>


            <div className="border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-people text-danger"></i>
                    <span className="badge bg-info opacity-75">Agendados</span>
                </div>
                <div >
                    <p><strong className="fs-3">3</strong></p>
                    <small className="text-muted">agendados</small>
                </div>
            </div>


            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    
                    <i className="bi bi-fire text-danger"></i>
                    <span className="badge bg-warning opacity-75">concluido</span>
                </div>
                <div >
                    <p><strong className="fs-3">1</strong></p>
                    <small className="text-muted">Em andamento</small>
                </div>
            </div>


            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    
                    <i className="bi bi-graph-up-arrow text-danger"></i>
                    <span className="badge bg-success opacity-75">concluido</span>
                </div>
                <div >
                    <p><strong className="fs-3">2</strong></p>
                    <small className="text-muted">concluidos</small>
                </div>
            </div>


            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    
                    <i className="bi bi-graph-up-arrow text-danger"></i>
                    <span className="badge bg-danger opacity-75">cancelados</span>
                </div>
                <div >
                    <p><strong className="fs-3">1</strong></p>
                    <small className="text-muted">cancelados</small>
                </div>
            </div>


            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-graph-up-arrow text-danger"></i>
                    <span className="badge bg-secondary opacity-75">Hoje</span>
                </div>
                <div >
                    <p><strong className="fs-3">2</strong></p>
                    <small className="text-muted">Atendimentos</small>
                </div>
            </div>

        </div>
  );
}

export default DashService;
