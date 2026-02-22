import "./examsList.css"
import ModalNewExam from "../ModalNewExam/ModalNewExam";
import { useState } from "react";
import { deleteExam } from "../../service/ExamService";
import Swal from "sweetalert2";

function ExamsList({exams,carregarExames}) {
    
    const [editExam,SetEditExam] = useState()

    const onEdit = (Exam)=>{
        console.log(Exam)
        SetEditExam(Exam)
    }

    const onDelete = async (id)=>{

        Swal.fire({
            title: "Deseja Remover Esse Exame?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff0000",
            cancelButtonColor: "rgb(76, 76, 76)",
            confirmButtonText: "Sim, Remover!"
            }).then( async (result) => {
            if (result.isConfirmed) {
                const response = await deleteExam(id)
                .then(response =>{
                    Swal.fire("Removido!", "Exame Removido com sucesso.", "success");
                    carregarExames();
                }).catch(erro => {
                    Swal.fire("Erro!", "Erro ao Remover Exame.", "error");
                })
            }
            });
    }


    return (
        <div className="flex-grow-1 d-flex flex-column gap-3">
            
            <div className="border border-2 rounded-4 p-3 bg-white w-100 d-flex shadow-sm">
                <input type="text" className="form-control bg-light" placeholder="Buscar exames"/>
                <button className="btn btn-danger ms-2 rounded-4">Buscar</button>
            </div>
            
            <div className="h-100 ">
                <div className="border border-danger rounded-4 p-3 bg-white w-100 d-flex flex-column gap-3 shadow-sm h-100">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Nome do Exame</th>
                                <th scope="col">Preço</th>
                                <th scope="col">tipo</th>
                                <th scope="col">descrição</th>
                                <th scope="col" className="d-flex justify-content-end align-items-center gap-2">
                                    <button data-bs-toggle="modal" data-bs-target="#modalNewExam" className="btn btn-danger rounded-4"><i className="bi bi-plus"></i>Adicionar Exame</button>
                                    <ModalNewExam  carregarExames = {carregarExames} editExam = {editExam}/>
                                </th>
                            </tr>
                        </thead>
                        <tbody> 

                            {exams.length > 0 ? 

                                exams.map((exam,index)=>(
                                    <tr key={exam.id || index} className="border-secondary-subtle border-bottom ">
                                        <td>{exam.name}</td>
                                        <td>R${exam.preco}</td>
                                        <td>{exam.type}</td>
                                        <td>{exam.description}</td>
                                        <td className="d-flex gap-4 justify-content-end">
                                            <button onClick={()=>onEdit(exam)} data-bs-toggle = "modal" data-bs-target = "#modalNewExam" className="btn btn-actions btn-outline-primary rounded-4"><i className="bi bi-pencil-square"></i></button>
                                            <button onClick={()=>onDelete(exam.id)} className="btn btn-actions btn-outline-danger rounded-4"><i className="bi bi-trash"></i></button>
                                        </td>
                                    </tr>
                                ))
                            
                            : <tr>
                                <td>Nenhum Exame Cadastrado!</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                </tr>}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ExamsList;
