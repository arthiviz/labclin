import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <main className="d-flex justify-content-center my-5">
                <Outlet/>
            </main>
            
            
        </div>
    );
}

export default Layout;