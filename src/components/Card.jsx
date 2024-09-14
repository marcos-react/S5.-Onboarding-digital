import React from 'react';

const Card = ({ title, description, bgcolor, image }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};

export default Card; // access to Card outside

