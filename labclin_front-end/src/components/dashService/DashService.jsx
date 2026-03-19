import { useAtendimento } from "../../contexts/AtendimentoContext"
import "./DashBoard.css"

function DashService() {

const {atendimentos} = useAtendimento();
   
const agendadosTotal = atendimentos?.filter(atend => atend.status.includes("agendado")).length
const pendentesTotal = atendimentos?.filter(atend => atend.status.includes("pendente")).length
const concluidosTotal = atendimentos?.filter(atend => atend.status.includes("concluido")).length
const canceladosTotal = atendimentos?.filter(atend => atend.status.includes("cancelado")).length

const hoje = new Date().toLocaleDateString('en-CA')
const atendimentosToday = atendimentos?.filter(atend => atend.date.startsWith(hoje)).length

    
  return (
    <div className="row g-5">
        <div className="col-12 col-md-4 col-xl-2">
            <div className="border border-danger p-3 rounded-4 bg-white cardService">
                
                
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-activity text-danger"></i>
                    <span className="badge bg-primary opacity-75">Total</span>
                </div>
                <div >
                    <p><strong className="fs-3">{atendimentos.length}</strong></p>
                    <small className="text-muted">Atendimentos</small>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 col-xl-2">
            <div className="border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-people text-danger"></i>
                    <span className="badge bg-info opacity-75">Agendados</span>
                </div>
                <div >
                    <p><strong className="fs-3">{agendadosTotal}</strong></p>
                    <small className="text-muted">agendados</small>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 col-xl-2">
            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    
                    <i className="bi bi-fire text-danger"></i>
                    <span className="badge bg-warning opacity-75">concluido</span>
                </div>
                <div >
                    <p><strong className="fs-3">{pendentesTotal}</strong></p>
                    <small className="text-muted">Em andamento</small>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 col-xl-2">
            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    
                    <i className="bi bi-graph-up-arrow text-danger"></i>
                    <span className="badge bg-success opacity-75">concluido</span>
                </div>
                <div >
                    <p><strong className="fs-3">{concluidosTotal}</strong></p>
                    <small className="text-muted">concluidos</small>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 col-xl-2">
            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    
                    <i className="bi bi-graph-up-arrow text-danger"></i>
                    <span className="badge bg-danger opacity-75">cancelados</span>
                </div>
                <div >
                    <p><strong className="fs-3">{canceladosTotal}</strong></p>
                    <small className="text-muted">cancelados</small>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 col-xl-2">
            <div className="border border border-danger p-3 rounded-4 bg-white cardService">
                <div className="d-flex justify-content-between align-items-center">
                    <i className="bi bi-graph-up-arrow text-danger"></i>
                    <span className="badge bg-secondary opacity-75">Hoje</span>
                </div>
                <div >
                    <p><strong className="fs-3">{atendimentosToday}</strong></p>
                    <small className="text-muted">Atendimentos</small>
                </div>
            </div>
        </div>
            
        </div>
  );
}

export default DashService;
