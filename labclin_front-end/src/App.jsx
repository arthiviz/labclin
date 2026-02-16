import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Layout from "./components/Layout/Layout"
import Pacientes from "./pages/Pacientes"
import Exames from "./pages/Exames"
import Atendimentos from "./pages/Atendimentos"
import "./index.css"

function App() {

  return (
    <div className="min-vh-100t" style={{backgroundColor: "#d7d7d7"}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/pacientes" element={<Pacientes />} />
              <Route path="/exames" element={<Exames />} />
              <Route path="/atendimentos" element={<Atendimentos />} />
            </Route>
          
            <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
