
interface CardProps2 {
  imgSrc: string;
  title: string;
  description: string;
}
const CardComponent = ({ imgSrc, title, description }:CardProps2) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title || "Image"} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;