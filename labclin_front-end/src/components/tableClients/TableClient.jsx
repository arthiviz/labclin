function TableClient() {
    return (
        <div className="d-flex gap-5">
            
            <div className="bg-white rounded-4 border border-danger p-4 gap-4" style={{width: "50%"}}>
                <div className="d-flex flex-column">
                    <strong className="fs-6 text-danger">Últimos Clientes Cadastrados</strong>
                    <small>Clientes cadastrados recentemente</small>
                </div>
                <div className="table-responsive mt-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Data de Cadastro</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>João da Silva</td>
                                <td>000.000.000-00</td>
                                <td>(00) 00000-0000</td>
                                <td>01/01/2023</td>
                                <td><span className="badge bg-success">Ativo</span></td>
                            </tr>
                            <tr>
                                <td>Maria de Socorro</td>
                                <td>000.000.000-00</td>
                                <td>(00) 00000-0000</td>
                                <td>13/07/2025</td>
                                <td><span className="badge bg-success">Ativo</span></td>
                            </tr>
                            <tr>
                                <td>Arthur da Silva</td>
                                <td>000.000.000-00</td>
                                <td>(00) 00000-0000</td>
                                <td>01/02/2026</td>
                                <td><span className="badge bg-success">Ativo</span></td>
                            </tr>
                            <tr>
                                <td>Antonio Claudino</td>
                                <td>000.000.000-00</td>
                                <td>(00) 00000-0000</td>
                                <td>05/10/2024</td>
                                <td><span className="badge bg-success">Ativo</span></td>
                            </tr>
                            <tr>
                                <td>Raimundo Neto</td>
                                <td>000.000.000-00</td>
                                <td>(00) 00000-0000</td>
                                <td>23/09/2022</td>
                                <td><span className="badge bg-success">Ativo</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-white rounded-4 border border-danger p-4" style={{width: "50%"}}>
                <div className="d-flex flex-column">
                    <strong className="fs-6 text-danger"><i className="bi bi-graph-up text-danger">  </i>Clientes Mais Frequentes</strong>
                    <small>Top 5 clientes com mais visitas</small>
                </div>

                <div className="table-responsive mt-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Posição</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Visitas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className="badge bg-danger">#1</span></td>
                                <td>João da Silva</td>
                                <td>joaodasilva@gmail.com</td>
                                <td className="text-center text-danger">20</td>
                            </tr>
                            <tr>
                                <td><span className="badge bg-danger opacity-75">#2</span></td>
                                <td>Maria de Socorro</td>
                                <td>mariadesocorro@gmail.com</td>
                                <td className="text-center text-danger">17</td>
                            </tr>
                            <tr>
                                <td><span className="badge bg-danger opacity-75">#3</span></td>
                                <td>Arthur da Silva</td>
                                <td>arthurdasilva@gmail.com</td>
                                <td className="text-center text-danger">15</td>
                            </tr>
                            <tr>
                                <td><span className="badge bg-danger opacity-75">#4</span></td>
                                <td>Antonio Claudino</td>
                                <td>antonioclaudino@gmail.com</td>
                                <td className="text-center text-danger">14</td>
                            </tr>
                            <tr>
                                <td><span className="badge bg-danger opacity-75">#5</span></td>
                                <td>Raimundo Neto</td>
                                <td>raimundoneto@gmail.com</td>
                                <td className="text-center text-danger">10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TableClient;
