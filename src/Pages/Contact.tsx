import React, { useState } from 'react';
import '../css/Gonzalez.css';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí podrías agregar la lógica para enviar los datos a un servidor, por ejemplo
    console.log('Formulario enviado:', { name, email, message });

    // Mostrar mensaje de confirmación
    setSubmitted(true);

    // Limpiar los campos después de enviar
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-page">
      <br />
      <h1 className="contact-title">Contacto</h1>
      <div className="line"></div>
      <br />
      <div className="contact-content">
        <div className="contact-details">
          <h2>Nuestra ubicación:</h2>
          <address>
            <p>Unidad Educativa Adolfo Kolping</p>
            <p>Calle 24 de Mayo y s/n vía a Puctús</p>
            <p>YARUQUÍES / RIOBAMBA</p>
            <p>Ecuador</p>
          </address>
          <p>Email: <a href="mailto:uedukolping@gmail.com">uedukolping@gmail.com</a></p>
        </div>
        <div className="contact-details">
          <h2>Contacto en Alemán y Español:</h2>
          <p>Email: <a href="mailto:gabriele.errerd@web.de">gabriele.errerd@web.de</a></p>
        </div>
        <div className="contact-form-container">
          <h2>Formulario de Contacto</h2>
          {submitted ? (
            <p className="success-message">Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;