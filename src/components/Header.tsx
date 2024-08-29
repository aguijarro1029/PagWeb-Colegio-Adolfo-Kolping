import React, {  useEffect, useState } from 'react';
import logo from '../assets/Img/logo_adolfo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faBullhorn, faCircleXmark, faEnvelope, faHandsHoldingChild, faHouseUser, faToolbox , faUser  } from '@fortawesome/free-solid-svg-icons';

import { useLocation, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const location=useLocation();
 
  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  useEffect(() => {
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleMenuClick = () => {
    setMenuOpen(prevState => !prevState);
  };
  const handleLinkClick = () => {
    if (isSmallScreen) {
      setMenuOpen(false); // Cierra el menú cuando se hace clic en un enlace en pantallas pequeñas
    }
  };
  return (
    <header>
      <nav className='navbar-items'>
        <Link to={"/"}>
        <div className='navbar-logo'>
          <img
            src={ logo}
            className='logo'
            alt="Logo"
          />        
        </div>
        </Link>
        
        <div className='menu-icons' onClick={handleMenuClick}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faCircleXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <Link className={`nav-links ${isActive('/')}`} to="/" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faHouseUser}/> Inicio
            </Link>
          </li>
          <li>
            <Link className={`nav-links ${isActive('/novedades')}`} to="/novedades" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faBullhorn}/> Novedades
            </Link>
          </li>
          <li>
            <Link className={`nav-links ${isActive('/talleres')}`} to="/talleres" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faToolbox}/> Talleres
            </Link>
          </li>
          <li>
            <Link className={`nav-links ${isActive('/voluntarios')}`} to="/voluntarios" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faHandsHoldingChild} /> Estudiantes
            </Link>
          </li>
          <li>
            <Link className={`nav-links ${isActive('/contact')}`} to="/contact" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faEnvelope}/> Contacto
            </Link>
          </li>
          <li className='login-nav'>
            <Link className={`nav-links ${isActive('/login')}`} to="/login" onClick={handleLinkClick}>
                <FontAwesomeIcon icon={faUser }/>
              </Link>
          </li>
        </ul>
          <div className='login-nav2'>
            <Link className={`nav-links ${isActive('/login')}`} to="/login" onClick={handleLinkClick}>
              <FontAwesomeIcon icon={faUser }/>
            </Link>
          </div>
      </nav>
    </header>
  );
};

export default Header;