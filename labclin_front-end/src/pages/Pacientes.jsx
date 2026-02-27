import { useEffect, useState } from "react";
import DashClient from "../components/dashClient/DashClient";
import FormClient from "../components/formClient/FormClient";
import ListClient from "../components/listClient/ListClient";
import TableClient from "../components/tableClients/TableClient";
import { listAllClients } from "../service/ClientService";

function Pacientes({clients,carregarUsuarios}) {
        
    return (
        <div className="d-flex flex-column gap-5">
            <DashClient/>
            <FormClient carregarUsuarios = {carregarUsuarios}/>
            <ListClient clients = {clients} carregarUsuarios={carregarUsuarios}/>
            <TableClient/>
        </div>
    );
}

export default Pacientes;
