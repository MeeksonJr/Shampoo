import React, { useState, useEffect } from 'react';
import ShampooCard from './ShampooCard';
import './ShampooList.css';

interface Shampoo {
  _id: string;
  title: string;
  image: string;
  ingredients: string[];
  whyBad: string[];
}

const API_URL = 'http://localhost:5004/api/shampoos';

export default function ShampooList() {
  const [shampoos, setShampoos] = useState<Shampoo[]>([]);
  const [newShampoo, setNewShampoo] = useState({
    title: '',
    image: '',
    ingredients: '',
    whyBad: '',
  });

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then((data: Shampoo[]) => setShampoos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewShampoo({
      ...newShampoo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredientsArray = newShampoo.ingredients.split(',').map(ingredient => ingredient.trim());
    const whyBadArray = newShampoo.whyBad.split(',').map(reason => reason.trim());

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: newShampoo.title,
        image: newShampoo.image,
        ingredients: ingredientsArray,
        whyBad: whyBadArray,
      }),
    })
      .then(response => response.json())
      .then((data: Shampoo) => {
        setShampoos([...shampoos, data]);
        setNewShampoo({
          title: '',
          image: '',
          ingredients: '',
          whyBad: '',
        });
      })
      .catch(error => console.error('Error posting data:', error));
  };

  const handleDelete = (id: string) => {
    console.log(`Attempting to delete shampoo with ID: ${id}`); // Debugging log

    fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          return response.json().then(data => {
            console.log('Delete response:', data); // Debugging log
            setShampoos(shampoos.filter(shampoo => shampoo._id !== id));
          });
        } else {
          return response.text().then(text => {
            console.error('Error deleting shampoo:', text);
          });
        }
      })
      .catch(error => console.error('Error deleting data:', error));
  };

  return (
    <div className="shampoo-list">
      {shampoos.map((shampoo) => (
        <ShampooCard key={shampoo._id} shampoo={shampoo} onDelete={handleDelete} />
      ))}
      <div className="shampoo-card add-card">
        <h3>Add New Shampoo</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newShampoo.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="image"
            value={newShampoo.image}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
          <input
            type="text"
            name="ingredients"
            value={newShampoo.ingredients}
            onChange={handleChange}
            placeholder="Ingredients (comma separated)"
            required
          />
          <textarea
            name="whyBad"
            value={newShampoo.whyBad}
            onChange={handleChange}
            placeholder="Reasons Why It's Bad (comma separated)"
            required
          />
          <button type="submit">Add Shampoo</button>
        </form>
      </div>
    </div>
  );
}
