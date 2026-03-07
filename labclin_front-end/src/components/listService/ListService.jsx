import { useEffect, useState } from "react";
import AgendamentoCard from "../agendamentoCard/AgendamentoCard";
import ModalNewAtendimento from "../ModalNewAtendimento/ModalNewAtendimento";

function ListService({atendimentos,clients,exams,getAllAtendimentos,editAtend,setEditAtend}) {

const [pesquisa,setPesquisa] = useState("")

const [atendimentosFiltrados, setAtendimentosFiltrados] = useState([]);

const [botaoClicado,setBotaoClicado] = useState("todos")

useEffect(() => {
  if (atendimentos) {
    setAtendimentosFiltrados(atendimentos);
  }
}, [atendimentos]);

useEffect(() => {
  const filtrados = atendimentos?.filter(atendimento => 
    atendimento.client.name.toLowerCase().includes(pesquisa.toLowerCase())
  );
  setAtendimentosFiltrados(filtrados);
}, [pesquisa, atendimentos]);

const filtrarStatus = (status) => {
  if (status === "") {
    setAtendimentosFiltrados(atendimentos);
  } else {
    const filtrados = atendimentos?.filter(atendimento => atendimento?.status === status);
    setAtendimentosFiltrados(filtrados);
  }
};

  return (
    <div className="d-flex flex-column gap-4 container-fluid">
      <div className="d-flex justify-content-end align-items-center">
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalNewAtendimento"
          className="btn btn-danger"
        >
          <i className="bi bi-plus"></i> Novo Atendimento
        </button>
      </div>
      <ModalNewAtendimento clients={clients} exams={exams} getAllAtendimentos={getAllAtendimentos} editAtend={editAtend} setEditAtend={setEditAtend}/>
      <div className="border border-2 shadow-sm p-3 rounded-3 bg-white">

        <div className="d-flex flex-wrap justify-content-between align-items-center ">

          <div className="row bg-light rounded rounded-4">

            <div className="col-12 col-md-6 col-lg-3">
              <button className={`btn btn-sm btn-white rounded-4 ${botaoClicado === "todos" ? "btn-danger" : ""}`} onClick={()=>{filtrarStatus(""),setBotaoClicado("todos")}}>
                Ver Todos
              </button>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <button className={`btn btn-sm btn-white rounded-4 ${botaoClicado === "agendado" ? "btn-danger" : ""}`} onClick={()=>{filtrarStatus("agendado"),setBotaoClicado("agendado")}}>
                Agendados
              </button>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <button className={`btn btn-sm btn-white rounded-4 ${botaoClicado === "concluido" ? "btn-danger" : ""}`} onClick={()=>{filtrarStatus("concluido"),setBotaoClicado("concluido")}}>
                Concluidos
              </button>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <button className={`btn btn-sm btn-white rounded-4 ${botaoClicado === "cancelado" ? "btn-danger" : ""}`} onClick={()=>{filtrarStatus("cancelado"),setBotaoClicado("cancelado")}}>
                Cancelados
              </button>
            </div>
            
          </div>

          <div className="d-flex gap-2">
            <i className="bi bi-funnel"></i>
            <p className="text-muted">Filtrar por status</p>
          </div>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Pesquisar Coleta..." className="form-control"  value={pesquisa} onChange={(valor)=>{
            setPesquisa(valor.target.value)
        }}/>
      </div>

      <div className="container-fluid p-0">
        <div className="row g-4">
          {atendimentosFiltrados && atendimentosFiltrados.length > 0 ?(
              atendimentosFiltrados.map((atendimento) => (
                <div key={atendimento.id} className="col-12 col-md-6 col-xl-4">
                  <AgendamentoCard atendimento={atendimento} getAllAtendimentos={getAllAtendimentos} setEditAtend={setEditAtend}/>
                </div>
              ))
          ):(
            <h2 className="bg-white p-3 rounded-4 text-center">Nenhuma Coleta Encontrada</h2>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default ListService;
