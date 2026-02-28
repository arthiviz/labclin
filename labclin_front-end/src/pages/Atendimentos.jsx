import { useEffect, useState } from "react";
import DashService from "../components/dashService/DashService";
import ListService from "../components/listService/ListService";
import { listAllAtendimentos } from "../service/Atendimento";

function Atendimentos({clients,exams,atendimentos,getAllAtendimentos}) {

  

  useEffect(()=>{
    getAllAtendimentos()
  },[])

  return (
    <div className="d-flex flex-column gap-4">
      <DashService />
      <ListService atendimentos={atendimentos} clients={clients} exams={exams} getAllAtendimentos={getAllAtendimentos}/>
    </div>
  );
}


export default Atendimentos;