import Dashboard from "../components/dashboard/dashboard"
import TableDashboard from "../components/tableDashboard/tableDashboard"
import Tasks from "../components/tasks/Tasks"

function Home({carregarUsuarios,getAllAtendimentos,getAllExams,clients,exams,setEditAtend}){
    return(
        <div className="d-flex flex-column gap-5 container-fluid px-5">
            <Dashboard/>
            <div className="d-flex flex-wrap gap-4 justify-content-center">
                <div style={{width: "60%", minWidth : "300px",}}>
                     <TableDashboard/>
                </div>
                <div style={{width: "30%", minWidth : "300px",}}>
                    <Tasks clients={clients} exams={exams} carregarUsuarios={carregarUsuarios} getAllExams={getAllExams} getAllAtendimentos={getAllAtendimentos} setEditAtend={setEditAtend}/>
                </div> 
            </div>
            
        </div>
    )
}

export default Home
