import Dashboard from "../components/dashboard/dashboard"
import TableDashboard from "../components/tableDashboard/tableDashboard"
import Tasks from "../components/tasks/Tasks"

function Home(){
    return(
        <div className="d-flex flex-column gap-5 min-vh-100">
            <Dashboard/>
            <div className="d-flex gap-4">
                <div style={{width: "65%"}}>
                     <TableDashboard/>
                </div>
                <div style={{width: "35%"}}>
                    <Tasks/>
                </div> 
            </div>
            
        </div>
    )
}

export default Home
