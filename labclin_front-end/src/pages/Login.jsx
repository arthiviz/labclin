import {useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { login } from "../service/User";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

function Login(){
    const username = useRef()
    const password = useRef()

    const[loading,setLoading] = useState(false)

    const logar = async () => {
        try{
            setLoading(true)
            const response = await login(username.current.value,password.current.value)

            const token = response.data.token

            if(token){
                localStorage.setItem("token",token)
                window.location.href = "/"
            }
        }catch(erro){
            console.log(erro)
            Swal.fire("Erro", "Usuário ou senha inválidos", "error");
        }
        finally{
            setLoading(false)
        }
        

    }

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"75vh"}}>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="shadow-lg p-5 rounded-4">
                            <div className="text-center">
                                <img src={Logo} alt="Logo" className="img-fluid"/>
                            </div>
                            <div className="container gap-4 d-flex flex-column align-items-center p-0">
                                <h1 className="text-center display-5">Login</h1>
                                <input type="text" ref={username} className="form-control" placeholder="username"/>
                                <input type="password" ref={password} className="form-control" placeholder="Senha"/>

                                {loading ?(
                                    <button class="btn btn-danger rounded-4 w-50">
                                        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                        <span role="status">Carregando...</span>
                                    </button>
                                ):(
                                    <button onClick={() => {logar()}} className="btn btn-danger rounded-4 w-50">Entrar</button>
                                )}
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Login
