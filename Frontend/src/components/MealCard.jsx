import React from 'react';
import './MealCard.scss';

const MealCard = ({ meal, onAdd }) => {
  return (
    <div className="meal-card">
      <img src={meal.image} alt={meal.name} />
      <div className="meal-content">
      <h3>{meal.name}</h3>
      <span>{meal.instructions[1]} {meal.instructions[2]}</span>
      <button onClick={() => onAdd(meal)}>Add to Week</button>
      </div>
       </div>
  );
};

export default MealCard;
  