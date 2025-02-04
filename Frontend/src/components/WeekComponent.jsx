import React from 'react';
import './WeekComponent.scss';

const weekComponent = ({ meals, setWeeks, week }) => {
  const handleRemove = (id) => {
    setWeeks(prevWeeks => ({
      ...prevWeeks,
      [week]: prevWeeks[week].filter(meal => meal.id !== id)
    }));
  };

  return (
    <div className="week-container">
      <h2>{week}</h2>
      <div className="meal-list">
        {meals.map(meal => (
          <div key={meal.id} className="meal-item">
            <h4>{meal.name}</h4>
            <button onClick={() => handleRemove(meal.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default weekComponent;