import "./dashclient.css"

function DashClient() {
    return (
        <div className="d-flex flex-wrap align-items-evenly gap-4">
            <div className="border border border-danger p-4 rounded-4 bg-white cardClient">
                
                
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Total de Clientes</strong>
                    <i className="bi bi-people text-danger"></i>
                </div>
                <div className="my-2">
                    <p><strong className="fs-2 ">5</strong></p>
                    <small className="text-muted">Clientes cadastrados</small>
                </div>
            </div>


            <div className="border border border-danger p-4 rounded-4 bg-white cardClient">
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Novos Este Mês</strong>
                    <i className="bi bi-person-plus text-danger"></i>
                </div>
                <div className="my-2">
                    <p><strong className="fs-2 ">2</strong></p>
                    <small className="text-muted">Cadastros neste mês</small>
                </div>
            </div>


            <div className="border border border-danger p-4 rounded-4 bg-white cardClient">
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Total de Coletas</strong>
                    <i className="bi bi-calendar4 text-danger"></i>
                </div>
                <div className="my-2">
                    <p><strong className="fs-2 ">61</strong></p>
                    <small className="text-muted">Total de coletas</small>
                </div>
            </div>


            <div className="border border border-danger p-4 rounded-4 bg-white cardClient">
                <div className="d-flex justify-content-between align-items-center">
                    <strong>Média de Coletas</strong>
                    <i className="bi bi-activity text-danger"></i>
                </div>
                <div className="my-2">
                    <p><strong className="fs-2 ">12.2</strong></p>
                    <small className="text-muted">Por cliente</small>
                </div>
            </div>
        </div>
    );
}
export default DashClient;