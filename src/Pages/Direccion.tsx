
import CardComponent2 from '../components/CardComponent2';
import '../css/inicio.css';
const Direccion = () => {
  const directorsData = [
    {
      imgSrc: "http://ak.gibts.net/wordpress/wp-content/uploads/2017/06/daniel.jpg",  // Reemplaza con la ruta correcta
      title: "Janeth López",
      description: "Rectora"
    },
    {
      imgSrc: "http://ak.gibts.net/wordpress/wp-content/uploads/2017/06/daniel.jpg",  // Reemplaza con la ruta correcta
      title: "Daniel Cabezas",
      description: "Vicerrector"
    }
  ];

  return (
    <div className="container">
      <h1>Dirección</h1>
      <div className="line"></div>
      <div className="card-container">
        {directorsData.map((director, index) => (
          <CardComponent2 
            key={index}
            imgSrc={director.imgSrc}
            title={director.title}
            description={director.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Direccion;
