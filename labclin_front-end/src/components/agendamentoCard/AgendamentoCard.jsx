import React, { useState } from 'react';
import './agendamentoCard.css';
import { deleteAtendimento } from '../../service/Atendimento';
import Swal from 'sweetalert2';
import ModalNewAtendimento from '../ModalNewAtendimento/ModalNewAtendimento';
import { formatarCPF, formatarData, formatarTelefone } from '../../utils/masks';

const AgendamentoCard = ({ atendimento,getAllAtendimentos,setEditAtend }) => {

  const removerAtendimento = async (id)=>{
    Swal.fire({
                title: "Deseja Remover Essa Coleta?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#ff0000",
                cancelButtonColor: "rgb(76, 76, 76)",
                confirmButtonText: "Sim, Remover!"
                }).then( async (result) => {
                if (result.isConfirmed) {
                    const response = await deleteAtendimento(id)
                    .then(response=>{
                      console.log(response)
                      Swal.fire("Removida!", "Coleta Removida com Sucesso.", "success");
                      getAllAtendimentos()
                    }).catch(erro =>{
                      console.log(erro)
                      Swal.fire("Erro!", "Erro ao Remover Coleta", "error");
                    })
                }
                });
      
  }

  const onEditAtendimento = (atendimento)=>{
      setEditAtend(atendimento)
  }

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
            <button onClick={()=>{onEditAtendimento(atendimento)}} data-bs-toggle="modal" data-bs-target="#modalNewAtendimento" className='btn border border-0'><i className="bi bi-pencil-square text-primary cursor-pointer"></i></button>
            <button onClick={()=>{removerAtendimento(atendimento.id)}} className='btn border border-0'><i className="bi bi-trash text-danger cursor-pointer"></i></button>
          </div>
        </div>

        <h4 className="fw-bold mb-4">{atendimento.client.name}</h4>

        {/* Info Rows */}
        <div className="d-flex flex-column gap-2 mb-4">
          <div className="d-flex align-items-center p-2 rounded-3 bg-light">
            <i className="bi bi-person me-3 ms-2 text-secondary"></i>
            <div>
              <p className="mb-0 fw-bold small">{atendimento.client.name}</p>
              <small className="text-muted">{formatarCPF(atendimento.client.CPF)}</small>
            </div>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3 bg-light">
            <i className="bi bi-telephone me-3 ms-2 text-secondary"></i>
            <span className="fw-semibold small">{formatarTelefone(atendimento.client.telephone)}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3 bg-light">
            <i className="bi bi-calendar-event me-3 ms-2 text-danger"></i>
            <span className="fw-semibold small">{formatarData(atendimento.date)}</span>
          </div>

          <div className="d-flex align-items-center p-2 rounded-3 bg-light">
            <i className="bi bi-currency-dollar me-3 ms-2 text-primary"></i>
            <span className="fw-semibold small">R${atendimento.total || "não informado"}</span>
          </div>

          

            
            <div className="accordion accordion-flush w-100" id={`accordion-${atendimento.id}`}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${atendimento.id}`} aria-expanded="false" aria-controls={`panelsStayOpen-${atendimento.id}`}>
                    <i className="bi bi-file-earmark-text me-3 ms-2 text-warning"></i>
                    Exames
                  </button>
                </h2>
                
                <div id={`panelsStayOpen-${atendimento.id}`} className="accordion-collapse collapse"data-bs-parent={`#accordion-${atendimento.id}`}>
                  <div className="accordion-body">
                    {atendimento.exams && atendimento.exams.length > 0 ? (
                      <ul className="list-group list-group-flush">
                        {atendimento.exams.map((exam, index) => (
                          <li key={exam.id || index} className="list-group-item border-0">
                            {exam.name}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted small">Nenhum exame cadastrado</p>
                    )}
                  </div>
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