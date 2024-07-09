import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EffectCoverflow,Navigation, Autoplay,Pagination } from "swiper/modules"
import { faCircleArrowLeft, faCircleArrowRight, faCogs, faHammer, faUtensils } from '@fortawesome/free-solid-svg-icons';
import CardComponent from '../components/CardComponent';

const Talleres = () => {
      const cardsData = [
        
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/gastromonie/05_kueche.jpg",
          title: "Card 1",
          text: "Texto 1"
        },
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/metallwerkstatt/08_schlosserei2.jpg",
          title: "Card 1",
          text: "Texto 1"
        },
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/metallwerkstatt/metall10.jpg",
          title: "Card 1",
          text: "Texto 1"
        },
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/schreinerei/holz04.jpg",
          title: "Card 1",
          text: "Texto 1"
        },
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/gastromonie/gastro02.jpg",
          title: "Card 2",
          text: "Texto 2"
        },
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/metallwerkstatt/metall11.jpg",
          title: "Card 2",
          text: "Texto 2"
        },
        
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/gastromonie/gastro13.jpg",
          title: "Card 3",
          text: "Texto 3"
        },
        {
          imgSrc: "http://adolfo-kolping.de/wordpress/wp-content/gallery/metallwerkstatt/metall17.jpg",
          title: "Card 2",
          text: "Texto 2"
        }
      ];
  return (
    <div className="container">
     <h1 className="heading">Nuestros Talleres</h1>
     <div className="line"></div>

     
        <p className="description">
          A partir del curso 8, ofrecemos clases adicionales en las áreas de madera, mecánica y gastronomía. Los estudiantes pueden elegir una de estas especialidades y, en los cursos 11, 12 y 13, tienen la oportunidad de perfeccionar sus conocimientos en el área seleccionada.
        </p>
        <div className="card-container">
        <CardComponent 
          icon={faHammer} 
          title="Madera" 
          description="Aprende a trabajar con madera, desde el diseño hasta la construcción." 
        />
        <CardComponent 
          icon={faCogs} 
          title="Mecánica" 
          description="Descubre el mundo de la mecánica y cómo funcionan las máquinas." 
        />
        <CardComponent 
          icon={faUtensils} 
          title="Gastronomía" 
          description="Perfecciona tus habilidades culinarias y aprende nuevas técnicas de cocina." 
        />
      </div>

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
    </div>
  )
}

export default Talleres