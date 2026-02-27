import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Layout from "./components/Layout/Layout"
import Pacientes from "./pages/Pacientes"
import Exames from "./pages/Exames"
import Atendimentos from "./pages/Atendimentos"
import "./index.css"
import { useEffect, useState } from "react"
import { listAllClients } from "./service/ClientService"
import { listAllExams } from "./service/ExamService"

function App() {

  const [clients, setClients] = useState([]);
  const [exams,setExams] = useState([]);
    
      const carregarUsuarios = () =>{
          listAllClients()
          .then(response => {
            setClients(response.data);
          }).catch(error => {
            console.error("Erro ao carregar clientes:", error);
          });
        }

        const getAllExams = async () =>{
        listAllExams()
        .then(response =>{
            setExams(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
      useEffect(()=>{
        carregarUsuarios()
        getAllExams()
        
      },[])

  return (
    <div className="min-vh-100t space-body bg-light">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/pacientes" element={<Pacientes clients={clients} carregarUsuarios={carregarUsuarios}/>} />
              <Route path="/exames" element={<Exames exams={exams} getAllExams={getAllExams}/>} />
              <Route path="/atendimentos" element={<Atendimentos clients={clients} exams={exams}/>} />
            </Route>
          
            <Route className="m-0 p-0" path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
