import "./tasks.css";

function Tasks() {
    return (
        <div className="bg-white rounded-4 border border-danger p-4" style={{height: "100%"}}>
            <div className="d-flex flex-column">
                <strong className="fs-6">Ações Rápidas</strong>
                <strong className="text-muted">Acesso rápido a funções principais</strong>
            </div>
            <div className="d-flex flex-column gap-3 mt-4">
                <button className="btn btn-danger w-100"><i className="bi bi-person-plus"></i>Novo Atendimento</button>
                <button className="btn btn-outline-dark border border-2 w-100 " ><i className="bi bi-person-plus"></i>Agendar Coleta </button>
                <button className="btn btn-outline-dark border border-2 w-100 " ><i className="bi bi-person-plus"></i>Resultados</button>
                <button className="btn btn-outline-dark border border-2 w-100 " ><i className="bi bi-person-plus"></i>Configurações</button>
            </div>
        </div>
    );
}

export default Tasks;
