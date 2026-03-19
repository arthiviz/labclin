import { useEffect, useState } from "react";
import DashService from "../components/dashService/DashService";
import ListService from "../components/listService/ListService";


function Atendimentos({editAtend,setEditAtend}) {

  return (
    <div className="d-flex flex-column gap-4 container-fluid">
      <DashService/>
      <ListService editAtend={editAtend} setEditAtend={setEditAtend}/>
    </div>
  );
}


export default Atendimentos;