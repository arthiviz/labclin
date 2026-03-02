import Dashboard from "../components/dashboard/dashboard"
import TableDashboard from "../components/tableDashboard/tableDashboard"
import Tasks from "../components/tasks/Tasks"

function Home({carregarUsuarios,getAllAtendimentos,getAllExams,clients,exams,setEditAtend}){
    return(
        <div className="d-flex flex-column gap-5 container-fluid">
            <Dashboard/>
            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-7" >
                     <TableDashboard/>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <Tasks clients={clients} exams={exams} carregarUsuarios={carregarUsuarios} getAllExams={getAllExams} getAllAtendimentos={getAllAtendimentos} setEditAtend={setEditAtend}/>
                </div> 
            </div>
            
        </div>
    )
}

export default Home
