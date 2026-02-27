import AgendamentoCard from "../agendamentoCard/AgendamentoCard";
import ModalNewAtendimento from "../ModalNewAtendimento/ModalNewAtendimento";

function ListService({atendimentos,clients,exams,getAllAtendimentos}) {
  

  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex justify-content-end align-items-center">
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalNewAtendimento"
          className="btn btn-danger"
        >
          <i className="bi bi-plus"></i> Novo Atendimento
        </button>
      </div>
      <ModalNewAtendimento clients={clients} exams={exams} getAllAtendimentos={getAllAtendimentos}/>
      <div className="border border-2 shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex justify-content-between align-items-center ">
          <div className="d-flex gap-2 bg-light px-3  rounded-4">
            <button className="btn btn-sm btn-danger rounded-4">
              Todos(7)
            </button>
            <button className="btn btn-sm btn-white rounded-4">
              Agendados(3)
            </button>
            <button className="btn btn-sm btn-white rounded-4">
              Concluidos(2)
            </button>
            <button className="btn btn-sm btn-white rounded-4">
              Cancelados(1)
            </button>
            <button className="btn btn-sm btn-white rounded-4">
              Em Andamento(1)
            </button>
          </div>

          <div className="d-flex gap-2">
            <i className="bi bi-funnel"></i>
            <p className="text-muted">Filtrar por status</p>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row g-4">
          {atendimentos.map((atendimento) => (
            <div key={atendimento.id} className="col-12 col-md-6 col-xl-4">
              <AgendamentoCard atendimento={atendimento} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListService;
