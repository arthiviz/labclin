import DashService from "../components/dashService/DashService";
import ListService from "../components/listService/ListService";

function Atendimentos() {
  return (
    <div className="d-flex flex-column gap-4">
      <DashService />
      <ListService />
    </div>
  );
}


export default Atendimentos;