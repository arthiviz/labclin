function TableDashboard() {
    return (
        <div>
            <div className="d-flex flex-column justify-content-left align-items-start bg-white rounded-4 border border-danger p-4">
                <div className="d-flex flex-column">
                    <strong className="fs-6">Atividade Recente</strong>
                    <strong className="text-muted">Últimos atendimento realizados hoje</strong>
                </div>

                <div className="d-flex justify-content-between align-items-center my-4 w-100 border-bottom border-2 border-muted">
                    <div className="d-flex flex-column my-2">
                        <strong>Maria Silva</strong>
                        <small className="text-muted">10/02/1978</small>
                    </div>

                    <div className="d-flex">
                        <i className="bi bi-clock"></i>
                        <p className="text-muted">10:00 AM</p>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center my-4 w-100 border-bottom border-2 border-muted">
                    <div className="d-flex flex-column gap-3">
                        <strong>Eduardo Costa</strong>
                        <small className="text-muted">02/12/1999</small>
                    </div>

                    <div className="d-flex">
                        <i className="bi bi-clock"></i>
                        <p className="text-muted">07:42 AM</p>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center my-4 w-100 border-bottom border-2 border-muted">
                    <div className="d-flex flex-column gap-3">
                        <strong>Arthur Silva</strong>
                        <small className="text-muted">19/10/2007</small>
                    </div>

                    <div className="d-flex">
                        <i className="bi bi-clock"></i>
                        <p className="text-muted">09:13 AM</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default TableDashboard;
