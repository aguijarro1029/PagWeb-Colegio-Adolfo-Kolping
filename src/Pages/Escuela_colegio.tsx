import React from 'react';
import '../css/inicio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import { EffectCoverflow,Navigation, Autoplay,Pagination } from "swiper/modules"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';



const cardsData = [
        
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/Rundgang2_oben.jpg",
      title: "Card 1",
      text: "Texto 1"
    },
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/grundstufe08.jpg",
      title: "Card 1",
      text: "Texto 1"
    },
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/grundstufe07.jpg",
      title: "Card 1",
      text: "Texto 1"
    },
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/grundstufe06.jpg",
      title: "Card 1",
      text: "Texto 1"
    },
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/grundstufe05.jpg",
      title: "Card 2",
      text: "Texto 2"
    },
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/grundstufe04.jpg",
      title: "Card 2",
      text: "Texto 2"
    },
    
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/sekundarstufe01.jpg",
      title: "Card 3",
      text: "Texto 3"
    },
    {
      imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/rundgang/rundgang01.jpg",
      title: "Card 2",
      text: "Texto 2"
    }
  ];
const Escuela_colegio: React.FC = () => {
  return (
    
    <div className="escuela">
      <h1>Escuela y Colegio</h1>
      <p>La Unidad Educativa “Adolfo-Kolping” es situada en Yaruquíes, un pueblecito de 3500 habitantes  en una altura de 2800 m en los Andes, 
        en la falda del volcán mas alto de la provincia, el Chimborazo (6310 m).  La provincia Chimborazo, completamente  indígena, 
        cuenta entre las mas pobres del país.  A causa de una infraestructura ausente y tanto desempleo existe un importante desplazamiento 
        hacia los barrios de chabolas de las grandes ciudades del país y hacia el extranjero. Las consecuencias de esto se refleja en grandes problemas sociales 
        en las  familias. Los que han quedado en el pueblo se alimentan difícilmente de una agricultura pobre o un pequeño comercio. Así las  familias de nuestros alumnos viven muy pobremente. 
        Las personas mayores casi exclusivamente hablan sólo su lengua materna indígena, el Kichwua, 
        que es completamente diferente al castellano. Los niños, sin embargo, desde párvulos, aprenden el Español.</p>
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}

          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 20,
            depth: 90,
            modifier: 2.5,
          }}
          autoplay={{
            delay:4000,
            disableOnInteraction:false
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          className="swiper_container"
        >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <img src={card.imgSrc} alt={`slide_image_${index}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          </div>
          <div className="swiper-button-next slider-arrow">
          <FontAwesomeIcon icon={faCircleArrowRight} />
          </div>
          <div className="swiper-pagination"></div>

        </div>
        </Swiper>
      
      <p>También en el Ecuador, la educación y la formación pertenecen a los grandes retos. El Colegio Adolfo-Kolping, intentando impedir la migración, ofrece integrar a los jóvenes en un proceso de formación profesional para que tengan un futuro, cerca, en la región.
      En el año 2007 y gracias a la financiación parcial por el Ministerio Alemán para Colaboración en Economía y Desarollo, el Colegio pudo ser ampliado. En consecuencia ahora podemos ofrecer a nuestros alumnos una educación conforme a la nueva ley escolar ecuatoriana desdel 1° hasta 13° año escolar. 
      Este período de escolaridad obligatorio de 13 años sube en general el nivel de educación, pero para las familias de muchos hijos resulta problemático, si los hijos no deben trabajar antes de los 18 años de edad. A partir del curso 8, el Colegio Adolfo-Kolping paralelamente ofrece una formación profesional en las especialidades de mecánica, carpintería y gastronomía/cocina. También están incluídas unas prácticas en diversas empresas. Con esto los alumnos tienen muy buenas posibilidades de encontrar en 
      seguida un buen empleo, después de tan larga escolaridad. También, si lo desean, pueden seguir estudiando en la universidad.</p>
        <p>El Colegio empieza a las 7:10 y termina a las 16:00. Puesto que nuestros alumnos 
        acuden desde muy lejos, ofrecemos desayuno y almuerzo en el colegio. Para la mayoría de ellos estas son las únicas comidas al día.</p>

        <p>La Unidad Educativa Adolfo-Kolping cuenta con el permiso del Ministerio de Educación ecuatoriano. Además una Fundación ecuatoriana en cada momento está al tanto de la proyectoria del Colegio. Su directora, muy experimentada, sigue siendo Janeth López. Se crió en el mismo pueblo, por lo tanto conoce muy bien las necesidades y penurias de los niños y de las familias.
        El coste mensual para un alumno asciende a 90 US-dólares (comidas, material escolar, sueldos de profesores, gastos varios, etc). Puesto que la mayoría de las familia no pueden pagar mucho, el Colegio depende exclusivamente de donativos. No existen subvenciones financieras por parte del estado Ecuatoriano. Nosotros colaboramos estrechamente con el Kindermissionswerk “Die Sternsinger” – obra de la infancia misionera de la iglesia católica en Alemania. Allí se reunen todos los donativos y regularmente son transferidos directamente al Colegio. También allí se examina nuestros informes de trabajo y nuestras
        bilanzas. Asímismo se emiten recibos de donativos (valido en Alemania) a 
        los donantes. Por lo tanto, nosotros no tenemos ningún gasto administrativo.</p>

        <p>En nombre de la Unidad Educativa Adolfo-Kolping muchas gracias a Uds. por su gran interés y compromiso. Nos despedimos con un saludo en Quechua:</p>

        <p>Taita diusca paicunaman allichinga – Dios Padre os otorgue que os vaya bien</p>

        
    
    </div>
  );
};
export default Escuela_colegio;