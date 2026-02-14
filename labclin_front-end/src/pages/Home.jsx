import Dashboard from "../components/dashboard"
import TableDashboard from "../components/tableDashboard"
import Tasks from "../components/Tasks"

function Home(){
    return(
        <div className="d-flex flex-column gap-5">
            <Dashboard/>
            <div className="d-flex gap-4">
                <div className="w-75">
                     <TableDashboard/>
                </div>
                <div className="w-25">
                    <Tasks/>
                </div> 
            </div>
            
        </div>
    )
}

export default Home
