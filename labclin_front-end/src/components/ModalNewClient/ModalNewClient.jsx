import FormClient from "../formClient/FormClient"

function ModalNewClient({editClient, carregarUsuarios}) {

    return (
        <div className="modal fade" id="modalNewClient" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header bg-light">
                    <h5 className="modal-title text-danger">Novo Paciente</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div className="modal-body">
                        <FormClient  editClient={editClient} carregarUsuarios={carregarUsuarios}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNewClient