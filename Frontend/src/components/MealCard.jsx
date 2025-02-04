import React from 'react';
import './MealCard.scss';

const MealCard = ({ meal, onAdd }) => {
  return (
    <div className="meal-card">
      <img src={meal.image} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <button onClick={() => onAdd(meal)}>Add to Week</button>
    </div>
  );
};

export default MealCard;
  