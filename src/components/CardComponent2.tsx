
interface CardProps2 {
  imgSrc: string;
  title: string;
  description: string;
}
const CardComponent = ({ imgSrc, title, description }:CardProps2) => {
  return (
    <div className="card" style={{margin:'50px'}} >
      <img src={imgSrc} alt={title || "Image"} className="card-img-top" />
      <div className="card-body" style={{textAlign:'center' , alignItems:'center' , justifyContent:'center', display:'flex', flexDirection:'column'}}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;