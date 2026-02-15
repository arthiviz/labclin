import React from 'react';

const AgendamentoCard = ({ data }) => {
  // Função para definir a cor do badge baseada no status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Agendado': return 'bg-primary';
      case 'Em Andamento': return 'bg-warning text-dark';
      case 'Concluído': return 'bg-success';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden mb-4" 
         style={{ borderLeft: '5px solid #dc3545', minWidth: '320px' }}>
      
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span className={`badge rounded-pill px-3 py-2 me-2 ${getStatusColor(data.status)}`}>
              {data.status}
            </span>
            <span className="text-muted fw-bold">#{data.id}</span>
          </div>
          <div className="d-flex gap-2">
            <i className="bi bi-pencil-square text-primary cursor-pointer"></i>
            <i className="bi bi-trash text-danger cursor-pointer"></i>
          </div>
        </div>

        <h4 className="fw-bold mb-4">{data.exame}</h4>

        {/* Info Rows */}
        <div className="d-flex flex-column gap-2 mb-4">
          <div className="d-flex align-items-center bg-light p-2 rounded-3">
            <i className="bi bi-person me-3 ms-2 text-secondary"></i>
            <div>
              <p className="mb-0 fw-bold small">{data.paciente}</p>
              <small className="text-muted">{data.cpf}</small>
            </div>
          </div>

          <div className="d-flex align-items-center bg-light p-2 rounded-3">
            <i className="bi bi-telephone me-3 ms-2 text-secondary"></i>
            <span className="fw-semibold small">{data.telefone}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#fff5f5' }}>
            <i className="bi bi-calendar-event me-3 ms-2 text-danger"></i>
            <span className="fw-semibold small">{data.data}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#f0f7ff' }}>
            <i className="bi bi-clock me-3 ms-2 text-primary"></i>
            <span className="fw-semibold small">{data.hora}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3" style={{ backgroundColor: '#fffcf0' }}>
            <i className="bi bi-file-earmark-text me-3 ms-2 text-warning"></i>
            <span className="fw-semibold small">{data.obs}</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-auto">
          <p className="small text-muted mb-2">Atualizar status:</p>
          <div className="d-flex gap-2">
            {data.status === 'Agendado' && <button className="btn btn-outline-dark btn-sm px-3 fw-bold">Iniciar</button>}
            <button className="btn btn-outline-success btn-sm px-3 fw-bold">Concluir</button>
            <button className="btn btn-outline-danger btn-sm px-3 fw-bold">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgendamentoCard;