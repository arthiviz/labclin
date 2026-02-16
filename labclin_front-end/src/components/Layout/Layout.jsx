import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

function Layout() {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <main className="d-flex justify-content-center  px-5 py-5 min-vh-100">
                <Outlet/>
            </main>
            <footer className="w-100">
                <Footer/>
            </footer>
        </div>
    );
}

export default Layout;