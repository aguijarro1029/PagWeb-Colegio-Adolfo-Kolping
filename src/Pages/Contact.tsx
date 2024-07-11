import React from 'react';
import '../css/inicio.css';

const Contact: React.FC = () => {
  return (
    <div className="main-content contact-container">
      <h1>Contacto</h1>
      <div className="contact-details text-content">
        <h2>Nuestra ubicación:</h2>
        <address>
          <p>Unidad Educativa Adolfo Kolping</p>
          <p>Calle 24 de Mayo y s/n vía a Puctús</p>
          <p>YARUQUÍES / RIOBAMBA</p>
          <p>Ecuador</p>
        </address>
        <p>Email: <a href="mailto:uedukolping@gmail.com">uedukolping@gmail.com</a></p>
        <p>Correo convencional ya no existe en Ecuador.</p>
      </div>
      <div className="contact-details text-content">
        <h2>Contacto en Alemán y Español:</h2>
        <p>Email: <a href="mailto:gabriele.errerd@web.de">gabriele.errerd@web.de</a></p>
      </div>
      <div className="contact-details text-content">
        <h2>Formulario de Contacto</h2>
        <form className="contact-form">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows={5} required></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
