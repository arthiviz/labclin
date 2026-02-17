import {useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

function Login(){

    const navigate = useNavigate()

    function logar(){
        navigate("/")
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="shadow-lg p-5 rounded-4 w-50">
                <div className="text-center">
                    <img src={Logo} alt="Logo" className="img-fluid w-50"/>
                </div>
                <div className="container gap-4 d-flex flex-column p-0">
                    <h1 className="text-center display-2">Login</h1>
                    <input type="email" className="form-control" placeholder="Email"/>
                    <input type="password" className="form-control" placeholder="Senha"/>
                    <button onClick={() => {logar()}} className="btn btn-danger btn-lg rounded-4 w-100">Entrar</button>
                </div>
                
            </div>
        </div>
    )
}

export default Login
