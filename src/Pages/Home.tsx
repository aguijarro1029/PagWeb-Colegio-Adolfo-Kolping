import React from 'react';
import '../css/inicio.css';
import imagen1 from '../assets/Img/Imagen-inicio1.jpg';
import imagen3 from '../assets/Img/Imagen-inicio3.jpg';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1 style={{ color: '#fd6a01' }}>Bienvenido</h1>
      <div className="main-content">
        <div className="side-content">
          <p>La Unidad Educativa Adolfo Kolping está ubicada en los Andes del Ecuador, en el pueblo de Yaruquíes, en las faldas del Chimborazo. La institución ofrece educación básica y bachillerato para niños y jóvenes vulnerables de la región, junto con formación profesional en tres ramas a partir del 8° año, además de desayuno y almuerzo.</p>
          <p>La institución fue fundada en el año 2000 por el antiguo párroco en Lörrach, Wolfgang Schaft, durante sus nueve años de estancia como sacerdote en Ecuador. Tras su fallecimiento en 2010, el proyecto continuó gracias al compromiso de personas en Alemania, Suiza, España y Ecuador.</p>
          <ul>
            <li>educación Básica y Bachillerato (1° hasta 13° año)</li>
            <li>formación profesional en tres ramas a partir del 8° año</li>
            <li>desayuno y almuerzo</li>
          </ul>
          <h2 style={{ color: '#fd6a01' }}>La Institución</h2>
          <p>La Unidad Educativa Adolfo-Kolping es una institución particular de carácter social, autorizada por el Ministerio de Educación ecuatoriano pero sin apoyo estatal directo, dependiendo completamente de donaciones. Es un proyecto del “Kindermissionswerk – Die Sternsinger” (Obra de la Infancia Misionera de la Iglesia Católica en Alemania).</p>
          <a href="#">Leer más...</a>
          <h2 style={{ color: '#fd6a01' }}>Visión</h2>
          <p>Convertir a la Unidad en una experiencia demostrativa de educación básica y bachillerato que provea a los alumnos con herramientas para pensar, interrelacionar, desarrollar conciencia crítica, valores y compromiso hacia las necesidades sociales. Además, ofrecer formación profesional artesanal que facilite su inserción exitosa en el campo laboral y profesional, contribuyendo al desarrollo socioeconómico de sus familias y la población en general.</p>
        </div>
        <div className="side-images">
          <img src={imagen1} alt="Imagen 1" />
          <img src={imagen3} alt="Imagen 3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
