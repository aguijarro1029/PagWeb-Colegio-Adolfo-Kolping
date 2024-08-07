import React from 'react';

interface CardProps2 {
  imgSrc: string;
  title: string;
  description: string;
}

const CardComponent = ({ imgSrc, title, description }: CardProps2) => {
  return (
    <div className="card" style={cardStyle}>
      <div style={imgContainerStyle}>
        <img src={imgSrc} alt={title || "Image"} className="card-img-top" style={imgStyle} />
      </div>
      <div className="card-body" style={bodyStyle}>
        <h5 className="card-title" style={titleStyle}>{title}</h5>
        <p className="card-text" style={textStyle}>{description}</p>
      </div>
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  margin: '50px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '300px',
  textAlign: 'center'
};

const imgContainerStyle: React.CSSProperties = {
  width: '150px',
  height: '150px',
  overflow: 'hidden',
  borderRadius: '50%',
  margin: '20px auto'
};

const imgStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block'
};

const bodyStyle: React.CSSProperties = {
  padding: '20px',
  backgroundColor: '#f9f9f9'
};

const titleStyle: React.CSSProperties = {
  color: '#fd6a01',
  fontSize: '1.5em',
  marginBottom: '10px'
};

const textStyle: React.CSSProperties = {
  color: '#555',
  fontSize: '1em',
  textAlign:'center'
};

export default CardComponent;
