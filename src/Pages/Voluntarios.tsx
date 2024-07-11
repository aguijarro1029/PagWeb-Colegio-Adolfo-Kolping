import React from 'react';
import '../css/inicio.css';

const Voluntarios: React.FC = () => {
  return (
    <div className="main-content volunteer-container">
      <h1>Voluntarios</h1>
      <div className="volunteer-details text-content">
        <p>Con gusto aceptamos a jóvenes a partir de 24/25 años.</p>

        <h2>Requisitos:</h2>
        <ol>
          <li>
            <strong>Certificado acerca del conocimiento de la lengua:</strong>
            <p>
              (Certificado del Bachillerato, certificado DELE nivel B1 por lo menos, otros certificados)
              No tiene sentido atender a niños y jóvenes y convivir con gente de otra cultura sin entender y hablar su lengua. Ni en el colegio ni en su entorno nadie habla inglés ni mucho menos alemán.
            </p>
          </li>
          <li>
            <strong>Certificado médico:</strong>
            <p>
              Afirmando que el aspirante está física- y psíquicamente apto para vivir y trabajar en una altura de 3000 m y con condiciones higiénicas muy diferentes. Naturalmente existe atención médica en Quito, pero a una distancia de 4 horas en autobús. Por lo tanto, enfermedades crónicas o psíquicas no pueden ser atendidas adecuadamente en el pueblo de Yaruquíes, tampoco en Riobamba.
            </p>
          </li>
          <li>
            <strong>Estancia mínima de 3 meses sin interrupción:</strong>
            <p>
              Una estancia más breve no tiene sentido puesto que la aclimatación a otra cultura, otro estilo de vida, otro clima requiere su tiempo, como es sabido.
            </p>
          </li>
          <li>
            <strong>Coste:</strong>
            <p>
              El Colegio depende de donativos. Podemos ofrecer a los voluntarios alojamiento y media pensión (desayuno y almuerzo al mediodía, de lunes a viernes) gratuitos. Pero hay muchas posibilidades de comprar algo en el pueblo.
              No podemos correr con el gasto para el vuelo, los seguros, visado y demás necesidades.
              (El visado tienen que pedir en la embajada del Ecuador en su país de origen.)
              Los voluntarios trabajan por su propio riesgo. El colegio no se responsabiliza de accidentes, enfermedades, robos y otros daños.
            </p>
            <p>
              No es posible alojar en el colegio a parientes y amigos que vienen de visita.
              (Hay varias posibilidades de alojamiento en el pueblo y en Riobamba).
            </p>
          </li>
        </ol>

        <h2>Proceso de Aplicación:</h2>
        <p>
          Después de una entrevista personal conmigo, la directora del colegio decide sobre la posibilidad de ser aceptado. Por eso los aspirantes tienen que contactar con ella por escrito en español.
          Por favor, indiquen entonces también dónde y cómo le gustaría trabajar (en educación básica, secundaria, párvulos o talleres) y mencione también sus habilidades y preferencias. Mencione también si anteriormente ya ha trabajado en proyectos de asistencia social. También sería útil un breve currículum en español.
        </p>
        <p>
          Por favor, reflexione y planifique su petición con tiempo, ya que hay muchas otras demandas.
        </p>

        <h2>Retos:</h2>
        <p>
          Ni en el pueblo, ni en Riobamba, a 4 km de distancia, hay muchas posibilidades de diversión para jóvenes. Además, los habitantes andinos son muy reservados y enfocados en sus familias. Si se quiere entrar en contacto con ellos, hay que dar el primer paso, si no, amenaza soledad. La directora, los colegas, los compañeros, todos ellos son muy amables y dispuestos a ayudar y dentro de sus posibilidades se ocupan de los voluntarios.
        </p>
        <p>
          A menudo falla la electricidad, tampoco está garantizada en todo tiempo el abastecimiento de agua.
          El Tungurahua, el volcán más cercano, desde hace 18 años no deja de escupir cenizas y lava. La ceniza volcánica, por tanto, es parte de la vida cotidiana. Contamina nuestro agua y trae otras tantas incomodidades.
        </p>
        <p>
          Si a pesar de todo esto sigue con su decisión de “sí, quiero ir” nos daría una gran alegría.
        </p>
      </div>
    </div>
  );
};

export default Voluntarios;
