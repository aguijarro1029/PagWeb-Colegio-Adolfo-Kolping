import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CardProps {
    icon: IconDefinition;
    title: string;
    description: string;
}
const CardComponent = ({icon, title, description}:CardProps) => {
  return (
    <div className="card">
      <div className="card-icon">
        <FontAwesomeIcon icon={icon} size="3x" />
      </div>
      <div className="card-description">
        <h3>{title}</h3>
        <div className="line-small"></div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComponent