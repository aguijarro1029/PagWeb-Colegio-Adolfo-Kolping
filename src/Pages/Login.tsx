import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import { getUser } from '../lib/controller';
import { Usuario } from '../Models/Usuario';
import { useToast } from "@chakra-ui/react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const toast = useToast(); 

  const handleBack = () => {
    navigate('/');
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Por favor, ingresa un correo electrónico válido.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una minúscula, un número y un símbolo.');
    } else {
      setPasswordError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    validateEmail(email);
    validatePassword(password);

    if (!email || !password || emailError || passwordError) {
      return;
    }

    const user: Usuario | null = await getUser(email, password);
    if (user) {
      console.log('Login exitoso:', user);
      localStorage.setItem('user', JSON.stringify(user)); // Guarda el usuario en localStorage
      navigate('/'); // Navega a la página de inicio o cualquier otra
    } else {
      toast({
        title: "Error",
        description: "Credenciales incorrectas. Inténtalo de nuevo",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
    }
  };

  return (
    <div className='fondo-login'>
      <div className="ring">
        <i style={{ '--clr': '#fd6a01' } as React.CSSProperties}></i>
        <i style={{ '--clr': '#fd6a01' } as React.CSSProperties}></i>
        <i style={{ '--clr': '#fd6a01' } as React.CSSProperties}></i>
        <div className="login">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Usuario"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>
            <div className="inputBx">
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
                className={passwordError ? 'error' : ''}
              />
              {passwordError && <span className="error">{passwordError}</span>}
            </div>
            <div className="inputBx">
              <button
                type="submit"
                className='btn-login'
                style={{ marginTop: '10px' }}
              >
                Ingresar
              </button>
            </div>
            <div className="inputBx">
              <button
                className='btn-login'
                onClick={handleBack}
                style={{ marginTop: '10px' }}
              >
                Regresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
