import React from 'react';
import logo from '../assets/Img/Logo_Ut.png'
const Header: React.FC = () => {
  return (
    <header >
      <nav style={{backgroundColor:'#fd6a01'}} className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} height={"90px"} width={"590px"} alt="" />
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/talleres">Talleres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">Link</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item"  href="/">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-divider"></a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
