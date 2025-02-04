import React, { useState, useEffect } from 'react';
import MealCard from './components/MealCard';
import WeekComponent from './components/WeekComponent';
import PopupComponent from './components/PopupComponent';
import Loader from './components/Loader';
import './App.scss';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [weeks, setWeeks] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: []
  });
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        console.log("response", data)
        setMeals(data.recipes);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, []);
  
  const handleAddMeal = (meal) => {
    setSelectedMeal(meal);
  };

  // const saveMealToWeek = () => {
  //   debugger
  //   if (selectedMeal && selectedWeek && !weeks[selectedWeek].some(m => m.id === selectedMeal.id)) {
  //     setWeeks(prevWeeks => ({
  //       ...prevWeeks,
  //       [selectedWeek]: [...prevWeeks[selectedWeek], selectedMeal]
  //     }));
  //   }
  //   setSelectedMeal(null);
  //   setSelectedWeek(null);
  // };
  
  const saveMealToWeek = () => {
    if (!selectedWeek) {
      alert("Kindly choose a week before adding a meal.");
      return;
    }
  
    if (!selectedMeal) {
      alert("No meal selected. Please choose a meal.");
      return;
    }
    setWeeks(prevWeeks => {
      const currentWeekMeals = prevWeeks[selectedWeek] || [];
      if (currentWeekMeals.some(meal => meal.id === selectedMeal.id)) {
        alert("This meal is already added in this week. Kindly choose another week.");
        return prevWeeks; 
            }
  
      setSelectedMeal(null);
      setSelectedWeek(null);
  
      return {
        ...prevWeeks,
        [selectedWeek]: [...currentWeekMeals, selectedMeal]
      };
    });
  };
  
  
  return (
    <div className="app-container">
      <div className="font-section">
      <h1>Optimized Your Meal</h1>
      <p>Select Meal to Add in Week. You will be able to edit, modify and change the Meal Weeks</p>
      </div>
      <div className='week-order'>
          <p>Week Orders</p>
        </div>
      <div className="tabs">
        <button onClick={() => setActiveTab('all')}>All Meals</button>
        {[1, 2, 3, 4].map(num => (
          <button key={num} onClick={() => setActiveTab(`week${num}`)}>Week {num}</button>
        ))}
      </div>
      <br/>
      <br/>
      {isLoading ? (
        <Loader /> 
      ) : activeTab === 'all' ? (
     
        <div className="meal-list">
          {meals.map(meal => (
            <MealCard key={meal.id} meal={meal} onAdd={handleAddMeal} />
          ))}
        </div>
      ) : (
        <WeekComponent meals={weeks[activeTab]} setWeeks={setWeeks} week={activeTab} />
      )}
      
      {selectedMeal && (
        <PopupComponent
          setSelectedWeek={setSelectedWeek} 
          saveMealToWeek={saveMealToWeek} 
          closePopup={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
};

export default App;