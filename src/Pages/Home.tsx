import React from 'react';
import '../css/inicio.css';
import '../css/Ariel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye ,faHammer , faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import CardComponent2 from '../components/CardComponent2';
import lottieData from '../assets/lottie/lottieEscuela.json'
import lottieData2 from '../assets/lottie/lottieHerramienta.json'
import lottieData3 from '../assets/lottie/lottieTrofeo.json'
import lottieData4 from '../assets/lottie/lottieProfesor.json'
import puce from '../assets/Img/convenios/puce.png'
import carloscisneros from '../assets/Img/convenios/carloscisneros.png'
import espoch from '../assets/Img/convenios/espoch.png'
import narrativa from '../assets/Img/convenios/narrativa.png'
import unach from '../assets/Img/convenios/unach.png'
import centrosalud from '../assets/Img/convenios/centrosalud.png'
import casamemorias from '../assets/Img/convenios/casamemorias.png'
import instituto from '../assets/Img/convenios/institutosuperior.png'
import municipio from '../assets/Img/convenios/municipioriobamba.png'
import imagenInicio1 from '../assets/Img/Imagen-inicio5.jpg'
import asamblea from '../assets/Img/convenios/asamblea.png'
import prefectura from '../assets/Img/convenios/prefecturachimborazo.png'


const Home: React.FC = () => {
  const directorsData = [
    {
      imgSrc: "http://ak.gibts.net/wordpress/wp-content/uploads/2017/06/Janeth.jpg",  // Reemplaza con la ruta correcta
      title: "Janeth López",
      description: "Rectora"
    },
    {
      imgSrc: "http://ak.gibts.net/wordpress/wp-content/uploads/2017/06/daniel.jpg",  // Reemplaza con la ruta correcta
      title: "Daniel Cabezas",
      description: "Vicerrector"
    }
  ];

  return (
    <div>
        <div className="carousel">
          <div className='list'>
            <div className='item'>
              <img src={imagenInicio1} alt='imagenInicio'/>
              <div className='content'>
                <div className='title'>Unidad Educativa</div>
                <div className='topic'>Adolfo Kolping</div>
                <div className='des'>La Unidad Educativa Adolfo Kolping brinda una educación integral en los Andes del Ecuador, ofreciendo formación básica y técnica.
                </div>
                <div className='buttons'>
                   <a style={{padding:'12px', marginTop:'10px', textDecorationLine:'none'}} className='btn-novedades' href="/Novedades">Novedades</a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
          <section className="cards-wrapper">
          <div className="card-grid-space">
            <a className="card-home" href="/escuelaycolegio" style={{ backgroundImage: "url('http://ak.gibts.net/wordpress/wp-content/uploads/2017/04/Un-poco-de-histori%CC%81a-Foto-Spanischer-Text.jpg')" }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',    
              justifyContent: 'center',
              textAlign: 'center',    
              height: '100%',      
              width: '100%'         
            }}>
              <FontAwesomeIcon className='icon-card' icon={faMapMarkerAlt} size="3x" color="#fd6a01" />
              <h1 className='title-card'>Ubicación</h1>
              <div className='div-parrafo'>
                <p className='parrafo-card' style={{ fontSize: '13px' }}>La Unidad Educativa Adolfo Kolping está ubicada en los Andes del Ecuador, en el pueblo de Yaruquíes, en las faldas del Chimborazo. Ofrecemos educación básica y bachillerato, formación profesional, desayuno y almuerzo.</p>
              </div>
              <div className="date">Adolfo Kolping</div>
              <div className="tags">
              </div>
            </div>

            </a>
          </div>
          <div className="card-grid-space">
            <a className="card-home" href="#" style={{ backgroundImage: "url('http://adolfo-kolping.de/wordpress/wp-content/gallery/gastromonie/gastro16.jpg')" }}>
              <div style={{
              display: 'flex',
              flexDirection: 'column', 
              alignItems: 'center',    
              justifyContent: 'center',
              textAlign: 'center',    
              height: '100%',      
              width: '100%'         
            }}>
                <FontAwesomeIcon className='icon-card' icon={faHammer} size="3x" color="#fd6a01" />
                <h1 className='title-card'>Especialidades</h1>
                <div className='div-parrafo'>
                  <p className='parrafo-card' style={{ fontSize: '13px' }}> Mecánica General <br /> Carpintería  <br /> Gastronomía</p>
                </div>
                <div className="date">Adolfo Kolping</div>
                <div className="tags">
                </div>
              </div>
            </a>
          </div>
          <div className="card-grid-space">
            <a className="card-home" href="#" style={{ backgroundImage: "url('http://ak.gibts.net/wordpress/wp-content/uploads/2017/04/Indi%CC%81gena-Familie.jpg')" }}>
              <div style={{ textAlign: 'center' }}>
                <FontAwesomeIcon className='icon-card' icon={faEye} size="3x" color="#fd6a01" />
                <h1 className='title-card'>Visión</h1>
                <p className='parrafo-card' style={{ fontSize: '13px', textAlign: 'center' }}>
                  Proveer a los alumnos con herramientas para pensar, interrelacionar, desarrollar conciencia crítica, valores y compromiso hacia las necesidades sociales.</p>
                <div className="date">Adolfo Kolping</div>
                <div className="tags">
                </div>
              </div>
            </a>
          </div>
        </section>
        <div className="line2"></div>
        <h1 id='history-section' className='talleres-title'>HISTORIA</h1>
        <div style={{padding:'50px'}}>
        <section className="lottie-text-section2">
          <div className="text-item">
            <h2>Fundación de la Escuela</h2>
            <p >La Unidad Educativa Adolfo Kolping fue fundada en el año 1999 por el sacerdote Wolfgang Schaft, conocido cariñosamente como el Padre Lobito. Su misión era atacar la pobreza y brindar oportunidades educativas a los jóvenes de la parroquia Yaruquíes, Ecuador. Con el apoyo de la comunidad y ayuda extranjera, estableció varios proyectos, incluyendo el Centro de Formación Artesanal “Adolfo Kolping”.</p>
          </div>
          <div className="lottie-item">
            <Lottie animationData={lottieData} loop={true} />
          </div>
        </section>

        <section className="lottie-text-section">
          <div className="text-item">
            <h2>Inspiración y Primeros Pasos</h2>
            <p >El Padre Wolfgang Schaft llegó a Yaruquíes en 1996 y rápidamente identificó la necesidad de una educación técnica para los jóvenes locales. Inspirado por el beato Adolfo Kolping, comenzó a reunir a la comunidad para crear un centro que ofreciera formación en diversas especialidades artesanales. A pesar de los desafíos iniciales, como la falta de recursos, la escuela comenzó a funcionar el 11 de octubre de 1999 en las instalaciones facilitadas por la escuela Domingo Carrillo.</p>
          </div>
          <div className="lottie-item">
            <Lottie animationData={lottieData2} loop={true} />
          </div>
        </section>

        <section className="lottie-text-section2">
          <div className="text-item">
            <h2>Desafíos y Crecimiento</h2>
            <p >Desde sus inicios, el Centro de Formación Artesanal Particular “Adolfo Kolping” enfrentó numerosos desafíos, incluyendo la construcción de un edificio propio y la obtención de la aprobación oficial. Con el esfuerzo de la comunidad y el apoyo de voluntarios extranjeros, el centro creció significativamente, ofreciendo especialidades como Mecánica en General, Ebanistería, Tejido Típico en Telar y Cerámica.</p>
          </div>
          <div className="lottie-item">
            <Lottie animationData={lottieData3} loop={true} />
          </div>
        </section>

        <section className="lottie-text-section">
          <div className="text-item">
            <h2>Legado del Padre Wolfgang Schaft</h2>
            <p >El legado del Padre Wolfgang Schaft perdura a través de la Unidad Educativa Adolfo Kolping, que sigue formando a jóvenes en diversas especialidades técnicas. Su visión de "Formando para la vida y servir a la sociedad" continúa guiando a la institución, que hoy en día ofrece una educación integral desde el 1° EGB hasta el bachillerato técnico, incluyendo formación en Mecánica General, Carpintería y Gastronomía.</p>
          </div>
          <div className="lottie-item">
            <Lottie animationData={lottieData4} loop={true} />
          </div>
        </section>
        </div>

        <div className="line2"></div>
        <h1 className='talleres-title'>DIRECCIÓN</h1>
        <div style={{textAlign:'center' , alignItems:'center' , justifyContent:'center', display:'flex', flexDirection:'column'}}>
          <div className="card-container">
            {directorsData.map((director, index) => (
              <CardComponent2 
                key={index}
                imgSrc={director.imgSrc}
                title={director.title}
                description={director.description}
              />
            ))}
          </div>
        </div>
        <div className="line2"></div>
        <h1 className='talleres-title'>CONVENIOS</h1>
        <div className='scroll-container'>
          <div className='container-convenios'>
            <img width={'300px'} height={'80px'} src={puce} alt="puce" />
            <img width={'300px'} height={'200px'}  src={unach} alt="unach" />
            <img width={'200px'} height={'200px'}  src={espoch} alt="espoch" />
            <img width={'300px'} height={'200px'}  src={instituto} alt="instituto" />
            <img width={'280px'} height={'100px'}  src={municipio} alt="municipio" />
            <img width={'180px'} height={'180px'}  src={centrosalud} alt="centrosalud" />
            <img width={'200px'} height={'200px'}  src={narrativa} alt="narrativa" />
            <img width={'300px'} height={'100px'}  src={casamemorias} alt="casamemorias" />
            <img width={'370px'} height={'100px'}  src={carloscisneros} alt="carloscisneros" />
            <img width={'300px'} height={'80px'} src={puce} alt="puce" />
            <img width={'300px'} height={'200px'}  src={unach} alt="unach" />
            <img width={'200px'} height={'200px'}  src={espoch} alt="espoch" />
            <img width={'300px'} height={'200px'}  src={instituto} alt="instituto" />
            <img width={'280px'} height={'100px'}  src={municipio} alt="municipio" />
            <img width={'180px'} height={'180px'}  src={centrosalud} alt="centrosalud" />
            <img width={'200px'} height={'200px'}  src={narrativa} alt="narrativa" />
            <img width={'300px'} height={'100px'}  src={casamemorias} alt="casamemorias" />
            <img width={'370px'} height={'100px'}  src={carloscisneros} alt="carloscisneros" />

          </div>
        </div>
        <div className="line2"></div>
        <h1 className='talleres-title'>RECONOCIMIENTO AL MÉRITO SOCIAL Y EDUCATIVO</h1>
        <div className='div-convenios2'>
          <img width={'200px'} height={'200px'}  src={asamblea} alt="asamblea" />
          <img width={'370px'} height={'100px'}  src={prefectura} alt="prefectura" />
        </div>
      </div>
  );
};

export default Home;
