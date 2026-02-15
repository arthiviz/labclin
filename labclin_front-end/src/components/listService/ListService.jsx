import AgendamentoCard from "../agendamentoCard/AgendamentoCard";

function ListService() {

const agendamentos = [
    { id: 1, status: 'Agendado', exame: 'Hemograma Completo', paciente: 'Maria Santos' /*...*/ },
    { id: 2, status: 'Em Andamento', exame: 'Glicose em Jejum', paciente: 'João Silva' /*...*/ },
    { id: 3, status: 'Concluído', exame: 'Colesterol Total', paciente: 'Ana Costa' /*...*/ },
    { id: 4, status: 'Agendado', exame: 'Ureia e Creatinina', paciente: 'Carlos Lima' /*...*/ },
  ];

  return (
    <div className="d-flex flex-column gap-4">
      <div className="border border-2 shadow-sm p-3 rounded-3 bg-white">
        <div className="d-flex justify-content-between align-items-center ">

            <div className="d-flex gap-2 bg-light px-3  rounded-4">
                <button className="btn btn-sm btn-danger rounded-4">Todos(7)</button>
                <button className="btn btn-sm btn-white rounded-4">Agendados(3)</button>
                <button className="btn btn-sm btn-white rounded-4">Concluidos(2)</button>
                <button className="btn btn-sm btn-white rounded-4">Cancelados(1)</button>
                <button className="btn btn-sm btn-white rounded-4">Em Andamento(1)</button>
            </div>
            
            <div className="d-flex gap-2">
                <i className="bi bi-funnel"></i>
                <p className="text-muted">Filtrar por status</p>
            </div>
            
        </div>
      </div>


        <div className="container-fluid p-0">
            {/* A classe 'row' prepara o grid, 'g-4' define o espaçamento entre os cards */}
            <div className="row g-4">
                {agendamentos.map((item) => (
                /* col-12: 1 por linha no celular
                    col-md-6: 2 por linha em tablets
                    col-xl-4: EXATAMENTE 3 por linha em telas grandes 
                */
                <div key={item.id} className="col-12 col-md-6 col-xl-4">
                    <AgendamentoCard data={item} />
                </div>
                ))}
            </div>
            </div>
    </div>
  );
}

export default ListService;
