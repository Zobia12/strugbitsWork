import React from 'react';
import './PopupComponent.scss';

const Popup = ({ setSelectedWeek, saveMealToWeek, closePopup }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2>Select a Week</h2>
        {[1, 2, 3, 4].map(num => (
          <button key={num} onClick={() => setSelectedWeek(`week${num}`)}>Week {num}</button>
        ))}
        <button onClick={saveMealToWeek}>Save</button>
        <button onClick={closePopup}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;