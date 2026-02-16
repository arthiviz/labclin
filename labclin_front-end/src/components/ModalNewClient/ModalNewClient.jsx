import FormClient from "../formClient/FormClient"

function ModalNewClient() {
    return (
        <div className="modal fade" id="modalNewClient" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header" style={{backgroundColor: "#d7d7d7"}}>
                    <h5 className="modal-title text-danger">Novo Paciente</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                    <div className="modal-body">
                        <FormClient />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNewClient