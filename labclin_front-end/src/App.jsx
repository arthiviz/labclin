import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Layout from "./components/Layout/Layout"
import Pacientes from "./pages/Pacientes"
import Exames from "./pages/Exames"
import Atendimentos from "./pages/Atendimentos"
import "./index.css"
import { useState } from "react"
import Relatorios from "./pages/Relatorios"
import ProtectRoute from "./components/protectRoute/ProtectRoute"
import Medicos from "./pages/Medicos"
import { AppProviders } from "./contexts/AppProviders"
import InitData from "./components/initData/InitData"

function App() {

  const[editAtend,setEditAtend] = useState()
  const [editExam,setEditExam] = useState()
  const [editMedic,setEditMedic] = useState()

    
  return (
    <div className="min-vh-100 space-body bg-light">
      <AppProviders>
          <InitData/>
          <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<ProtectRoute> <Home setEditAtend={setEditAtend}/></ProtectRoute>} />
                <Route path="/pacientes" element={<ProtectRoute> <Pacientes/></ProtectRoute>} />
                <Route path="/exames" element={<ProtectRoute> <Exames editExam={editExam} setEditExam={setEditExam}/></ProtectRoute>} />
                <Route path="/medicos" element={<Medicos editMedic={editMedic} setEditMedic={setEditMedic}/>}/>
                <Route path="/atendimentos" element={<ProtectRoute> <Atendimentos editAtend={editAtend} setEditAtend={setEditAtend}/></ProtectRoute>} />
                <Route path="/relatorios" element={ <ProtectRoute><Relatorios/></ProtectRoute> }/>
              </Route>
            
              <Route className="m-0 p-0" path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AppProviders>
      
    </div>
  )
}

export default App
