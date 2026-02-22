import { useEffect, useState } from "react";
import DashClient from "../components/dashClient/DashClient";
import FormClient from "../components/formClient/FormClient";
import ListClient from "../components/listClient/ListClient";
import TableClient from "../components/tableClients/TableClient";
import { listAllClients } from "../service/ClientService";

function Pacientes() {
    
    const [clients, setClients] = useState([]);

const carregarUsuarios = () =>{
    listAllClients()
    .then(response => {
      setClients(response.data);
    }).catch(error => {
      console.error("Erro ao carregar clientes:", error);
    });
  }

  useEffect(()=>{
    carregarUsuarios()
    
  },[])

    
        

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
