function ListClient({clients}) {
    return (
        <div className="bg-white rounded-4 border border-2 border-secondary-subtle shadow-sm p-4 gap-4">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                    <strong>Lista de Pacientes</strong>
                    <small>Todos os pacientes cadastrados.</small>
                </div>
                <div className="d-flex gap-2">
                    <input type="text" placeholder="Buscar paciente" className="form-control" style={{backgroundColor: "#d7d7d7"}} />
                    <button className="btn btn-danger" >Buscar</button>
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
                        {clients.length > 0 ?

                            clients.map((client,index) =>(
                                <tr key={client.id || index}>
                                    <td>{client.name}</td>
                                    <td>{client.CPF || "-"}</td>
                                    <td>{client.email || "-"}</td>
                                    <td>{client.telephone || "-"}</td>
                                    <td>{client.birthDate || "-"}</td>
                                </tr>
                            ))


                         : <tr><td><p>Nenhum Paciente Encontrado</p></td></tr>}
                    </tbody>
                </table>
            </div>
            
            
        </div>
    );
}

export default ListClient;
