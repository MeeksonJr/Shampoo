import { Link } from 'react-router-dom';
import './ShampooCard.css';
import './../App.css';

interface ShampooCardProps {
  shampoo: {
    _id: string;
    title: string;
    image: string;
    ingredients: string[];
  };
  onDelete: (id: string) => void;
}

export default function ShampooCard({ shampoo, onDelete }: ShampooCardProps) {
  return (
    <div className="shampoo-card">
      <button 
        className="delete-button" 
        onClick={() => onDelete(shampoo._id)}
        aria-label="Delete shampoo"
      >
        ×
      </button>
      <img src={shampoo.image} alt={shampoo.title} className='img'/>
      <h3 className='title'>{shampoo.title}</h3>
      <p>Ingredients: {shampoo.ingredients.join(', ')}</p>
      <Link to={`/shampoo/${shampoo._id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}
