import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Talleres from './Pages/Talleres';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Escuela_colegio from './Pages/Escuela_colegio';
import Direccion from './Pages/Direccion';
import Historia from './Pages/Historia';
import Voluntarios from './Pages/Voluntarios';
import Contact from './Pages/Contact';
import Novedades from './Pages/Novedades';

const App: React.FC = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


