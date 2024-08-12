import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ShampooDetail.css';

interface Shampoo {
  _id: string;
  image: string;
  title: string;
  ingredients: string[];
  whyBad: string[];
}

const API_URL = 'http://localhost:5003/api/shampoos';

const ShampooDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [shampoo, setShampoo] = useState<Shampoo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShampoo = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Shampoo = await response.json();
        setShampoo(data);
      } catch (error) {
        setError('Error fetching shampoo details');
        console.error('Error fetching shampoo details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShampoo();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!shampoo) return <div>Shampoo not found</div>;

  return (
    <div className="shampoo-detail-container">
      <img src={shampoo.image} alt={shampoo.title} className="shampoo-image" />
      <h2 className="shampoo-title">{shampoo.title}</h2>
      <div className="shampoo-info">
        <h3>Ingredients</h3>
        <ul>
          {shampoo.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="shampoo-info">
        <h3>Why It's Bad</h3>
        <ul>
          {shampoo.whyBad.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShampooDetail;
