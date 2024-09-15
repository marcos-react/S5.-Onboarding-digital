import React from 'react';

const Card = ({ title, description, bgcolor, image, nextStep}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className = 'button'>
        <button onClick={nextStep}>+</button>
      </div>
    </>
  );
};

export default Card; // access to Card

