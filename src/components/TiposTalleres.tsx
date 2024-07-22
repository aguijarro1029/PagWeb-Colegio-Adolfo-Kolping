
import { faCogs, faHammer, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TiposTalleres = () => {
  return (
    <div className='tipo-talleres'>
        <h1 className='talleres-title'>NUESTROS TALLERES</h1>
        <div className="line"></div>
        <p style={{justifyContent:'center', textAlign:'center', fontSize:'1rem', color:'gray'}}>Ofrecemos clases adicionales en las áreas de madera, mecánica y gastronomía.</p>
        <div className="first-des">
            <div className="des-text">
                <h2 className='taller-subtitle'>Gastronomía <FontAwesomeIcon icon={faUtensils} /></h2>
                <p>Sumérgete en el arte culinario con nuestros talleres de gastronomía, aprendiendo técnicas avanzadas de cocina. Perfecciona tus habilidades y sorprende a tus seres queridos con tus creaciones.</p>
            </div>
            <div className="image">
                <img src="http://adolfo-kolping.de/wordpress/wp-content/gallery/gastromonie/gastro07.jpg" alt="gastronomía1" />
                <img src="http://adolfo-kolping.de/wordpress/wp-content/gallery/gastromonie/gastro13.jpg" alt="gastronomía2" />
            </div>
        </div>
        <div className="first-des-reverse">
            <div className="des-text">
                <h2 className='taller-subtitle'>Mecánica <FontAwesomeIcon icon={faCogs} /></h2>
                <p>Descubre los secretos de la mecánica y el funcionamiento de las máquinas. Aprende desde el mantenimiento básico hasta la reparación avanzada, y desarrolla una comprensión profunda de cómo funcionan los sistemas mecánicos.</p>
            </div>
            <div className="image">
                <img src="http://adolfo-kolping.de/wordpress/wp-content/gallery/metallwerkstatt/metall16.jpg" alt="mecanica1" />
                <img src="http://adolfo-kolping.de/wordpress/wp-content/gallery/metallwerkstatt/metall13.jpg" alt="mecanica2" />
            </div>
        </div>
        <div className="first-des">
            <div className="des-text">
                <h2 className='taller-subtitle'>Carpintería <FontAwesomeIcon icon={faHammer} /></h2>
                <p>Desarrolla tus habilidades en carpintería y aprende a trabajar con madera. Desde el diseño y planificación hasta la construcción de muebles y estructuras, nuestros talleres te enseñarán las técnicas esenciales para crear proyectos de madera duraderos y atractivos.</p>
            </div>
            <div className="image">
                <img src="http://adolfo-kolping.de/wordpress/wp-content/gallery/schreinerei/09_schreinerei.jpg" alt="carpintería1" />
                <img src="http://adolfo-kolping.de/wordpress/wp-content/gallery/schreinerei/schreinerei_mauro.jpg" alt="carpintería2" />
            </div>
        </div>
    </div>
  )
}

export default TiposTalleres