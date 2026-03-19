import { useEffect } from "react";
import MedicDashboard from "../components/MedicDashboard/MedicDashboard";
import MedicList from "../components/MedicList/MedicList";
import { useMedics } from "../contexts/Medic";

function Medicos({editMedic,setEditMedic}){

    return(
        <div className="d-flex flex-column gap-4 container-fluid">
            <MedicDashboard/>
            <MedicList editMedic={editMedic} setEditMedic={setEditMedic}/>
        </div>
    )
}
export default Medicos;