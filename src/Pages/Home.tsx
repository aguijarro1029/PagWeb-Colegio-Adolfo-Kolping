import React from 'react';
import '../css/inicio.css';
import imagen1 from '../assets/Img/Imagen-inicio1.jpg';
import imagen5 from '../assets/Img/Imagen-inicio5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBook, faAppleAlt, faEye } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 style={{ color: '#fd6a01' }}>Bienvenido</h1>
      <div className="main-content">
        <div className="side-content">
          <div className="card-container">
            <div className="card">
              <FontAwesomeIcon icon={faSchool} size="3x" color="#fd6a01" />
              <h2>Sobre Nosotros</h2>
              <p>La Unidad Educativa Adolfo Kolping está ubicada en los Andes del Ecuador, en el pueblo de Yaruquíes, en las faldas del Chimborazo. Ofrecemos educación básica y bachillerato, formación profesional, desayuno y almuerzo.</p>
              <a href="/escuelaycolegio">Leer más...</a>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faBook} size="3x" color="#fd6a01" />
              <h2>Nuestra Historia</h2>
              <p>Fundada en el año 2000 por Wolfgang Schaft, nuestra institución continúa gracias al compromiso de personas en Alemania, Suiza, España y Ecuador.</p>
              <a href="/historia">Leer más...</a>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faAppleAlt} size="3x" color="#fd6a01" />
              <h2>Nuestros Servicios</h2>
              <ul>
                <li>Educación Básica y Bachillerato (1° hasta 13° año)</li>
                <li>Formación profesional en tres ramas a partir del 8° año</li>
                <li>Desayuno y almuerzo</li>
              </ul>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faEye} size="3x" color="#fd6a01" />
              <h2>Visión</h2>
              <p>Proveer a los alumnos con herramientas para pensar, interrelacionar, desarrollar conciencia crítica, valores y compromiso hacia las necesidades sociales.</p>
            </div>
          </div>
        </div>
        <div className="side-images">
          <img src={imagen1} alt="Imagen 1" />
          <img src={imagen5} alt="Imagen 5" />
        </div>
      </div>
    </div>
  );
};

export default Home;
