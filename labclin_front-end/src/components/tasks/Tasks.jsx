import "./tasks.css";
import ModalNewAtendimento from "../ModalNewAtendimento/ModalNewAtendimento";
import ModalNewClient from "../ModalNewClient/ModalNewClient";
import ModalNewExam from "../ModalNewExam/ModalNewExam";

function Tasks() {
  return (
    <div
      className="bg-white rounded-4 border border-danger p-4"
      style={{ height: "100%" }}
    >
      <div className="d-flex flex-column">
        <strong className="fs-6">Ações Rápidas</strong>
        <strong className="text-muted">
          Acesso rápido a funções principais
        </strong>
      </div>
      <div className="d-flex flex-column gap-3 mt-4">
        <button
          data-bs-toggle="modal"
          data-bs-target="#modalNewAtendimento"
          className="btn btn-danger w-100"
        >
          <i className="bi bi-building-add"></i>Novo Atendimento
        </button>
        <button data-bs-toggle="modal" data-bs-target="#modalNewClient" className="btn border-secondary-subtle btn-outline-dark border border-2 w-100 ">
          <i className="bi bi-person-plus"></i>Novo Cliente{" "}
        </button>
        <button data-bs-toggle="modal" data-bs-target="#modalNewExam" className="btn border-secondary-subtle btn-outline-dark border border-2 w-100 ">
          <i className="bi bi-clipboard2-pulse"></i>Adicionar Exame
        </button>
        <button className="btn border-secondary-subtle btn-outline-dark border border-2 w-100">
          <i className="bi bi-clipboard-check"></i>Novo Relatório
        </button>
        <button className="btn border-secondary-subtle btn-dark border border-2 w-100">
          <i className="bi bi-box-arrow-left px-2"></i>Sair
        </button>
      </div>
        <ModalNewAtendimento />
        <ModalNewClient />
        <ModalNewExam />
    </div>
  );
}

export default Tasks;
