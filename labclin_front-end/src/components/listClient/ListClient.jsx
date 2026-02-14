function ListClient() {
    return (
        <div className="bg-white rounded-4 border border-danger p-4 gap-4">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <strong>Lista de Pacientes</strong>
                    <small>Todos os pacientes cadastrados.</small>
                </div>
                <div className="d-flex gap-2">
                    <input type="text" placeholder="Buscar paciente" className="form-control" />
                    <button className="btn btn-danger">Buscar</button>
                </div>
            </div>

            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
                <table className="table table-hover mt-3">
                    {/* sticky-top faz o cabeçalho ficar parado enquanto o corpo rola */}
                    <thead className="sticky-top bg-white" style={{ zIndex: 1 }}>
                        <tr>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Data de Nascimento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>João da Silva</td>
                            <td>123.456.789-00</td>
                            <td>joao@example.com</td>
                            <td> (11) 98765-4321</td>
                            <td>01/01/1990</td>
                        </tr>
                        {/* ... repita suas linhas aqui ... */}
                        <tr>
                            <td>Maria de Socorro</td>
                            <td>987.654.321-00</td>
                            <td>maria@example.com</td>
                            <td> (11) 91234-5678</td>
                            <td>02/02/1992</td>
                        </tr>
                        <tr>
                            <td>Arthur da Silva</td>
                            <td>111.222.333-44</td>
                            <td>arthur@example.com</td>
                            <td> (11) 99876-5432</td>
                            <td>03/03/1993</td>
                        </tr>
                        <tr>
                            <td>Antonio Claudino</td>
                            <td>555.666.777-88</td>
                            <td>antonio@example.com</td>
                            <td> (11) 98765-4321</td>
                            <td>04/04/1994</td>
                        </tr>
                        <tr>
                            <td>Raimundo Neto</td>
                            <td>999.888.777-66</td>
                            <td>raimundo@example.com</td>
                            <td> (11) 91234-5678</td>
                            <td>05/05/1995</td>
                        </tr>
                        <tr>
                            <td>Maria de Socorro</td>
                            <td>987.654.321-00</td>
                            <td>maria@example.com</td>
                            <td> (11) 91234-5678</td>
                            <td>02/02/1992</td>
                        </tr>
                        <tr>
                            <td>Arthur da Silva</td>
                            <td>111.222.333-44</td>
                            <td>arthur@example.com</td>
                            <td> (11) 99876-5432</td>
                            <td>03/03/1993</td>
                        </tr>
                        <tr>
                            <td>Antonio Claudino</td>
                            <td>555.666.777-88</td>
                            <td>antonio@example.com</td>
                            <td> (11) 98765-4321</td>
                            <td>04/04/1994</td>
                        </tr>
                        <tr>
                            <td>Raimundo Neto</td>
                            <td>999.888.777-66</td>
                            <td>raimundo@example.com</td>
                            <td> (11) 91234-5678</td>
                            <td>05/05/1995</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            
        </div>
    );
}

export default ListClient;
