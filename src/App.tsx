import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Talleres from './Pages/Talleres';
import Escuela_colegio from './Pages/Escuela_colegio';
import Direccion from './Pages/Direccion';
import Historia from './Pages/Historia';
import Voluntarios from './Pages/Voluntarios';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Novedades from './Pages/Novedades';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="d-flex flex-column min-vh-100">
      {!isLoginPage && <Header />}
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/about" element={<About />} />
          <Route path="/escuelaycolegio" element={<Escuela_colegio />} />
          <Route path="/direccion" element={<Direccion />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/voluntarios" element={<Voluntarios />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;