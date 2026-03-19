import { useEffect } from "react";
import DashClient from "../components/dashClient/DashClient";
import FormClient from "../components/formClient/FormClient";
import ListClient from "../components/listClient/ListClient";
import TableClient from "../components/tableClients/TableClient";
import { useClients } from "../contexts/ClientContext";

function Pacientes() {
        
    return (
        <div className="d-flex flex-column gap-4 container-fluid">
            <DashClient/>
            <FormClient/>
            <ListClient/>
            <TableClient/>
        </div>
    );
}

export default Pacientes;
