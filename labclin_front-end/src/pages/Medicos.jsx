import MedicDashboard from "../components/MedicDashboard/MedicDashboard";
import MedicList from "../components/MedicList/MedicList";

function Medicos({carregarMedicos,medics,editMedic,setEditMedic}){
    return(
        <div className="d-flex flex-column gap-4 container-fluid">
            <MedicDashboard medics={medics}/>
            <MedicList medics={medics} carregarMedicos={carregarMedicos} editMedic={editMedic} setEditMedic={setEditMedic}/>
        </div>
    )
}
export default Medicos;