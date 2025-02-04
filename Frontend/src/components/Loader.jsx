import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading meals...</p>
    </div>
  );
};

export default Loader;
