function ExamsList() {
    return (
        <div className="flex-grow-1 d-flex flex-column gap-3">
            
            <div className="border border-2 rounded-4 p-3 bg-white w-100 d-flex shadow-sm">
                <input type="text" className="form-control bg-light" placeholder="Buscar exames" />
                <button className="btn btn-danger ms-2 rounded-4">Buscar</button>
            </div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-danger rounded-4"><i className="bi bi-plus"></i>Adicionar Exame</button>
            </div>
            <div>
                <div className="border border-danger rounded-4 p-3 bg-white w-100 d-flex flex-column gap-3 shadow-sm">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome do Exame</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr>
                                <td>1</td>
                                <td>Exame de Sangue</td>
                                <td>R$50,00</td>
                                <td><span className="badge bg-success text-light">Concluído</span></td>
                                <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Exame de Urina</td>
                                <td>R$40,00</td>
                                <td><span className="badge bg-warning text-dark">Pendente</span></td>
                                <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Exame de Fezes</td>
                                <td>R$30,00</td>
                                <td><span className="badge bg-success text-light">Concluído</span></td>
                                <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Exame de Colesterol</td>
                                <td>R$45,00</td>
                                <td><span className="badge bg-warning text-dark">Pendente</span></td>
                                <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Exame de Diabetes</td>
                                <td>R$25,00</td>
                                <td><span className="badge bg-warning text-dark">Pendente</span></td>
                                <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Exame de Hepatite</td>
                                <td>R$30,00</td>
                                <td><span className="badge bg-warning text-dark">Pendente</span></td>
                                    <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Exame de COVID-19</td>
                                <td>R$100,00</td>
                                <td><span className="badge bg-warning text-dark">Pendente</span></td>
                                <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Exame de Sangue Oculto</td>
                                <td>R$40,00</td>
                                <td><span className="badge bg-warning text-dark">Pendente</span></td>
                                <td className="d-flex gap-4">
                                    <button className="btn  btn-outline-primary rounded-4"><i class="bi bi-pencil-square"></i></button>
                                    <button className="btn  btn-outline-danger rounded-4"><i class="bi bi-trash"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ExamsList;
