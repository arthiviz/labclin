import React from 'react';
import './agendamentoCard.css';

const AgendamentoCard = ({ atendimento }) => {
  

  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden mb-4" 
         style={{ borderLeft: '5px solid #dc3545', minWidth: '320px' }}>
      
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span className="badge rounded-pill px-3 py-2 me-2">
              
            </span>
            <span className="text-muted fw-bold">#{atendimento.id}</span>
          </div>
          <div className="d-flex gap-2">
            <i className="bi bi-pencil-square text-primary cursor-pointer"></i>
            <i className="bi bi-trash text-danger cursor-pointer"></i>
          </div>
        </div>

        <h4 className="fw-bold mb-4">{atendimento.client.name}</h4>

        {/* Info Rows */}
        <div className="d-flex flex-column gap-2 mb-4">
          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#d7d7d7' }}>
            <i className="bi bi-person me-3 ms-2 text-secondary"></i>
            <div>
              <p className="mb-0 fw-bold small">{atendimento.client.name}</p>
              <small className="text-muted">{atendimento.client.CPF}</small>
            </div>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#d7d7d7' }}>
            <i className="bi bi-telephone me-3 ms-2 text-secondary"></i>
            <span className="fw-semibold small">{atendimento.client.telephone}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#d7d7d7' }}>
            <i className="bi bi-calendar-event me-3 ms-2 text-danger"></i>
            <span className="fw-semibold small">{atendimento.date}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#d7d7d7' }}>
            <i className="bi bi-currency-dollar me-3 ms-2 text-primary"></i>
            <span className="fw-semibold small">{atendimento.total || "não informado"}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#d7d7d7' }}>
            <i className="bi bi-file-earmark-text text-warning me-3 ms-2 text-secondary"></i>
            <div>
              <p className="mb-0 fw-bold small">Exames</p>
              {atendimento.exams && atendimento.exams.length > 0 ? (
                      <ul className="list-group list-group-flush">
                        {atendimento.exams.map((exam, index) => (
                          <li key={exam.id || index} className="list-group-item border-0 text-muted small" style={{ backgroundColor: 'transparent' }}>{exam.name}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted small">Nenhum exame cadastrado</p>
                    )}
              <small className="text-muted"></small>
            </div>
          </div>

            
            <div className="accordion accordion-flush shadow-lg  w-100 " id="accordionAtendimento">
                <h2 className="accordion-header ">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <i className="bi bi-file-earmark-text me-3 ms-2 text-warning"></i>Exames
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionAtendimento">
                  <div className="accordion-body">
                    {atendimento.exams && atendimento.exams.length > 0 ? (
                      <ul className="list-group list-group-flush">
                        {atendimento.exams.map((exam, index) => (
                          <li key={exam.id || index} className="list-group-item border-0">{exam.name}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted small">Nenhum exame cadastrado</p>
                    )}
                  </div>
                </div>
            </div>
        </div>

        
        <div className="mt-auto">
          <p className="small text-muted mb-2">Atualizar status:</p>
          <div className="d-flex gap-2">
            
            <button className="btn btn-outline-success btn-sm px-3 fw-bold">Concluir</button>
            <button className="btn btn-outline-danger btn-sm px-3 fw-bold">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgendamentoCard;