import { useEffect, useState } from "react";
import DashService from "../components/dashService/DashService";
import ListService from "../components/listService/ListService";
import { listAllAtendimentos } from "../service/Atendimento";

function Atendimentos() {

  const [atendimentos, setAtendimentos] = useState([]);

  const getAllAtendimentos = async () =>{
    listAllAtendimentos()
    .then(response =>{
      setAtendimentos(response.data);
    }).catch(error =>{
      console.error("Erro ao carregar atendimentos:", error);
    });
  }

  useEffect(()=>{
    getAllAtendimentos()
  },[])

  return (
    <div className="d-flex flex-column gap-4">
      <DashService />
      <ListService atendimentos={atendimentos}/>
    </div>
  );
}


export default Atendimentos;