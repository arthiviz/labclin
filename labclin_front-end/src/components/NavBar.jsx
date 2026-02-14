import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg px-4 bg-white shadow-sm" style={{}}>
      <div className="container-fluid">
        
        {/* ESQUERDA: Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" height="40" />
        </Link>

        {/* BOTÃO MOBILE (Hambúrguer) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CONTEÚDO DA NAVBAR */}
        <div className="collapse navbar-collapse" id="navContent">
          
          {/* MEIO: Links (mx-auto centraliza no Bootstrap) */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pacientes">Pacientes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exames">Exames</Link>
            </li>
          </ul>

          {/* DIREITA: Pesquisa */}
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
            <button className="btn btn-danger rounded-4" type="submit">Buscar</button>
          </form>
          
        </div>
      </div>
    </nav>
  );
}
export default NavBar;