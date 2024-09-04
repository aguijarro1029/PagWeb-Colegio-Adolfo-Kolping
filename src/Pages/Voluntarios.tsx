import React from 'react';
import '../css/Estudiantes.css';

const Voluntarios: React.FC = () => {
  const images = [
    "https://lh3.googleusercontent.com/proxy/XT78H8KsN366aDOmDZiIJ0q0uBkh81LZHtfnOh6CjxQmCHDt3fYalEDXNnbLleDHnyc58sI-w-Ae09PHJz6TxSjyg_FCbghr3hsIoCSg9QYpFNFjkbK2RpEHONTqZGi_",
    "https://lh3.googleusercontent.com/proxy/FHCpPcAc52y7Y7mMb6SPsDVyXxpGhpRPLoVjAgA1tkJK5SwDWnKRWkgBGKxgdkWgKFeklCfk1L-HqD0ccDh7Ai1EOtWodDBPKJrkCFjjrEtYLuXk5pfShwivmDSLD8qcExWHDHAdLw",
    "https://i.ytimg.com/vi/WxRQvM9elAU/maxresdefault.jpg",
  ];

  return (
    <div className="volunteers-page">
      <br></br><br></br>
      <header className="header">
        <h1 className="title">SOY DEL KOLPING</h1>
        <div className="line"></div>
        <p className="subtitle">Educación integral en los Andes del Ecuador</p>
      </header>
      <div className="volunteer-content">
        <div className="volunteer-section">
          <p className="volunteer-text">
            Los estudiantes del Colegio Adolfo-Kolping reciben una educación integral que abarca desde la educación básica hasta el bachillerato. La institución, situada en los Andes del Ecuador, se enfoca en el desarrollo académico y profesional de los jóvenes.
          </p>
          <div className="volunteer-image-wrapper">
            <img src={images[0]} alt="Imagen 1" className="volunteer-image" />
          </div>
        </div>
        <div className="volunteer-section alternate">
          <div className="volunteer-image-wrapper">
            <img src={images[1]} alt="Imagen 2" className="volunteer-image" />
          </div>
          <p className="volunteer-text">
            El colegio ofrece formación en áreas técnicas como carpintería y gastronomía, proporcionando a los estudiantes las habilidades necesarias para su futuro. Los programas están diseñados para combinar teoría y práctica, asegurando una preparación completa.
          </p>
        </div>
        <div className="volunteer-section">
          <p className="volunteer-text">
            Ser parte del Kolping significa enfrentar desafíos y superarlos con determinación. Los estudiantes aprenden a valorar el esfuerzo, la dedicación y el trabajo en equipo, preparándose para contribuir positivamente a la sociedad.
          </p>
          <div className="volunteer-image-wrapper">
            <img src={images[2]} alt="Imagen 3" className="volunteer-image" />
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
    </div>
  );
};

export default Voluntarios;
