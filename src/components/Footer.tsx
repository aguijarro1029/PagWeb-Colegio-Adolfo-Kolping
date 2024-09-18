import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../assets/Img/Logo_Ut.png';
const Footer: React.FC = () => {
  return (
    <footer style={{backgroundColor:'#fd6a01'}} className="text-light py-4 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4" style={{marginTop:'40px'}}>
            <h5>Sobre nosotros</h5>
            <p>La Unidad Educativa Adolfo Kolping es situada en los Andes del Ecuador, en el pueblo Yaruquíes, en las faldas del Chimborazo.</p>
          </div>
          <div className="col-md-4" >
            <img src={logo} alt="" style={{marginTop:'40px'}} />
            {/* <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">Sobre nosotros</a></li>
              <li><a href="/contact" className="text-light">Contacto</a></li>
              <li><a href="/faq" className="text-light">Preguntas frecuentes</a></li>
              <li><a href="/support" className="text-light">Soporte</a></li>
            </ul> */}
          </div>
          <div className="col-md-4" style={{marginTop:'40px'}}>
            <h5>Contáctanos</h5>
            <p><FontAwesomeIcon icon={faEnvelope} /> uedukolping@gmail.com</p>
            {/* <p><FontAwesomeIcon icon={faPhone} /> +593 xx xxx xxx</p> */}
            <div>
              <a href="https://www.facebook.com/ueduadolfokolping" className="text-light mx-2"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
              {/* <a href="https://twitter.com" className="text-light mx-2"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
              <a href="https://instagram.com" className="text-light mx-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></a> */}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-0">© 2024 Colegio Adolfo Kolping</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
