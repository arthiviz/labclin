import DashClient from "../components/dashClient/DashClient";
import FormClient from "../components/formClient/FormClient";
import ListClient from "../components/listClient/ListClient";
import TableClient from "../components/tableClients/TableClient";

function Pacientes() {
    return (
        <div className="d-flex flex-column gap-5">
            <DashClient/>
            <FormClient/>
            <ListClient/>
            <TableClient/>
        </div>
    );
}

export default Pacientes;
