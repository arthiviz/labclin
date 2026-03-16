import { useEffect, useState } from "react";
import DashService from "../components/dashService/DashService";
import ListService from "../components/listService/ListService";
import { listAllAtendimentos } from "../service/Atendimento";

function Atendimentos({clients,exams,atendimentos,getAllAtendimentos,editAtend,setEditAtend,medics}) {

  

  useEffect(()=>{
    getAllAtendimentos()
  },[])

  return (
    <div className="d-flex flex-column gap-4 container-fluid">
      <DashService atendimentos={atendimentos} />
      <ListService atendimentos={atendimentos} clients={clients} exams={exams} getAllAtendimentos={getAllAtendimentos} editAtend={editAtend} setEditAtend={setEditAtend}medics={medics}/>
    </div>
  );
}


export default Atendimentos;