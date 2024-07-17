import React from 'react';
import logo from '../assets/Img/Logo_Ut.png';

const Header: React.FC = () => {
  return (
    <header>
      <nav style={{ backgroundColor: '#fd6a01' }} className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} className='logo' height={"90px"} width={"590px"} alt="Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item dropdown" onMouseOver={(e) => {
                const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                  dropdownMenu.classList.add('show');
                }
              }} onMouseLeave={(e) => {
                const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
                if (dropdownMenu) {
                  dropdownMenu.classList.remove('show');
                }
              }}>
                <a className="nav-link active" href="/escuelaycolegio">
                  Escuela y Colegio
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/direccion">Dirección</a></li>
                  <li><a className="dropdown-item" href="/historia">Historia</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/talleres">Talleres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/voluntarios">Voluntarios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
