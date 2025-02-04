import React from 'react';
import './PopupComponent.scss';

const Popup = ({ setSelectedWeek, saveMealToWeek, closePopup }) => {
  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
    // saveMealToWeek(week);   
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Select a Week</h2>
        <br />
        {[1, 2, 3, 4].map(num => (
          <button key={num} onClick={() => handleWeekSelect(`week${num}`)}>
            Week {num}
          </button>
        ))}

        <br />
        <button id='addbutton' onClick={saveMealToWeek}>Add</button >

        <button id='cancelbutton' onClick={closePopup}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;
