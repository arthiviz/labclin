import { Link, NavLink, useLocation} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';

function NavBar() {
  
  const location = useLocation();
  
  const [MostrarNav,setMostarNav] = useState(false);

  const handleToggle = ()=> setMostarNav(!MostrarNav);

  const closeMenu = ()=> setMostarNav(false)

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    console.log("Rota atual mudou para:", location.pathname);
  }, [location.pathname]);


  return (
    <nav className="navbar navbar-expand-lg px-4 bg-white shadow-sm fixed-top" style={{minHeight: "80px"}}>
      <div className="container-fluid">
        
        {/* ESQUERDA: Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" height="40" />
        </Link>

        {/* BOTÃO MOBILE (Hambúrguer) */}
        <button className="navbar-toggler" type="button" onClick={handleToggle} aria-expanded={MostrarNav}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTEÚDO DA NAVBAR */}
        <div className={`collapse navbar-collapse ${MostrarNav ? 'show' : ''}`} id="navContent">
          
          {/* MEIO: Links (mx-auto centraliza no Bootstrap) */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link onClick={closeMenu} className={`nav-link ${isActive("/") ? "border-bottom border-danger" : ''}`} to="/">início</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className={`nav-link ${isActive("/pacientes") ? "border-bottom border-danger" : ''}`} to="/pacientes">Pacientes</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className={`nav-link ${isActive("/exames") ? "border-bottom border-danger" : ''}`} to="/exames">Exames</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className={`nav-link ${isActive("/medicos") ? "border-bottom border-danger" : ''}`} to="/medicos">Médicos</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className={`nav-link ${isActive("/atendimentos") ? "border-bottom border-danger" : ''}`} to="/atendimentos">Atendimentos</Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className={`nav-link ${isActive("/relatorios") ? "border-bottom border-danger" : ''}`} to="/relatorios">Relatórios</Link>
            </li>
          </ul>

          {/* DIREITA: Pesquisa */}
          <form className="d-flex" role="search">
            <input className="form-control me-2 bg-light" type="search" placeholder="Buscar..." aria-label="Search"/>
            <button className="btn btn-danger rounded-4" type="submit">Buscar</button>
          </form>
          
        </div>
      </div>
    </nav>
  );
}
export default NavBar;