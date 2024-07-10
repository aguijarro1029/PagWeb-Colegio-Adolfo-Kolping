import React from 'react';
import '../css/inicio.css';

const Historia = () => {
  return (
    <div className="container">
      <div className="main-content">
        <div className="image-container">
          <img 
            src="http://ak.gibts.net/wordpress/wp-content/uploads/2017/04/Un-poco-de-histori%CC%81a-Foto-Spanischer-Text.jpg" 
            alt="Historia de la escuela" 
            className="full-width-image"
          />
        </div>
        <div className="text-content">
          <div className="history">
            <h2>Historia</h2>
            <p>
              Un poco de historia
              <br />
              El fundador de nuestra escuela, el sacerdote Wolfgang Schaft, ha descrito la aparición de la escuela poco antes de su muerte. Aquí están algunos extractos de sus dos últimos boletines del año 2010:
            </p>
            <p>
              „… ¿Pero cómo empezó todo? Me fui en 1994 a Ecuador como párroco. … Educación y capacitación son de vida necesaria en una industria globalizada. Por lo tanto, la idea de una escuela técnica en el espíritu del sacerdote Adolph Kolping surgió muy pronto. En mi parroquia de Yaruquíes una joven profesora trabajó en el tiempo, Janeth López, la actual directora. Viene de la aldea y conoce las necesidades y preocupaciones de la gente de esta región. Janeth fue inmediatamente entusiasmado con mi idea de una escuela técnica y quería empezar. Así que alquilamos habitaciones en una antigua escuela en Yaruquíes para la tarde y ella sola enseñó. Para las clases prácticas construí dos galpones y contractamos un carpintero y un mecánico que fueron por hora. Juntos hemos desarrollado la escuela, hemos construido sala por sala en un sitio, que conseguimos en el año 2000 con contrato enfitéutico. …
              Después tuvimos que luchar para la aprobación, para que los estudiantes pudieran recibir un título reconocido. Porque era un colegio artesanal y secundaria – el primero en esta forma en el país -, tuvimos que obtener la aprobación de 2 ministerios y la Cámara Nacional de Artesanos. El proceso de aprobación tardó casi 2 años. … Para la firma final del Ministro de trabajo, estuvimos 3 días en Quito y hicimos 8 visitas al Ministerio! …
              Si veamos esta hermosa escuela hoy, apenas se puede creer que empezamos con sólo un salón de clases y dos cobertizos improvisados. Todavía recuerdo, que en el primer día dos alumnas mayores trajeron a sus bebés a la escuela. Tenían a nadie que podría proteger a los pequeños en casa y nos rogaron, asistir a las clases con los bebés. …
              Un gran desafío fue y es la diferente mentalidad de la gente en el altiplano andino. Ecuador se encuentra en el cinturón tropical y allí crecen frutas todo el año con riego suficiente. Esto significa que en estos países, la idea de planificación o prevención, como por ejemplo en la formación profesional, es en gran parte desconocida. Además de eso, que durante 500 años había represión y acostumbrados de la determinación ajena, piensan solamente en el día, pero nunca en la mañana o en pasado mañana. …”
            </p>
            <p>
              En Yaruquíes al Padre Wolfgang Schaft le llaman cariñosamente “Padre Lobito”. “Lobito” se deriva de su nombre Wolfgang. Él vive en los corazones de la gente, y acompañados por todo el pueblo se celebra cada año una misa en memoria de él.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historia;
