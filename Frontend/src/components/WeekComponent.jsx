import React from 'react';
import './WeekComponent.scss';

const weekComponent = ({ meals, setWeeks, week }) => {
  debugger
  const handleRemove = (id) => {
    setWeeks(prevWeeks => ({
      ...prevWeeks,
      [week]: prevWeeks[week].filter(meal => meal.id !== id)
    }));
  };
  return (
    
    <div className="week-container">
     {meals && meals.length === 0 && (
  <h1>Add meals to show here in Week.</h1>
)}
       <div className="meal-list">
        {meals.map(meal => (
          <div key={meal.id} className="meal-item">
           <img src={meal.image} alt={meal.name} />
            <h4>{meal.name}</h4>
            <h6>{meal.instructions[1]} {meal.instructions[2]}</h6>
            <button onClick={() => handleRemove(meal.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default weekComponent;