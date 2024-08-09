import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='fondo-login'>
      <div className="ring">
        <i style={{ '--clr': '#fd6a01' } as React.CSSProperties}></i>
        <i style={{ '--clr': '#fd6a01' } as React.CSSProperties}></i>
        <i style={{ '--clr': '#fd6a01' } as React.CSSProperties}></i>
        <div className="login">
          <h2>Iniciar Sesión</h2>
          <div className="inputBx">
            <input type="text" placeholder="Usuario"/>
          </div>
          <div className="inputBx">
            <input type="password" placeholder="Contraseña"/>
          </div>
          <div className="inputBx">
            <button className='btn-login'  style={{ marginTop: '10px' }}>Ingresar</button>
          </div>
          <div className="inputBx">
            <button className='btn-login' onClick={handleBack} style={{ marginTop: '10px' }}>Regresar</button>
          </div>
          <div className="links">
            {/* Aquí puedes añadir tus enlaces */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
