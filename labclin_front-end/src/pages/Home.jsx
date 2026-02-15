import Dashboard from "../components/dashboard/dashboard"
import TableDashboard from "../components/tableDashboard/tableDashboard"
import Tasks from "../components/tasks/Tasks"

function Home(){
    return(
        <div className="d-flex flex-column gap-5 container-fluid px-5">
            <Dashboard/>
            <div className="d-flex gap-4">
                <div style={{minWidth: "65%"}}>
                     <TableDashboard/>
                </div>
                <div style={{minWidth: "35%"}}>
                    <Tasks/>
                </div> 
            </div>
            
        </div>
    )
}

export default Home
