import React from 'react';
import './Card.css'

const Card = ({ title, description, bgcolor, image, nextStep}) => {
  return (
    <>
      <div className='card mx-auto'>
        <div className = 'image justify-content-center align-items-center py-5' style={{ backgroundColor: bgcolor  }}>
            <img src={image} alt={title} className='img-fluid py-5'></img>
        </div>
        <div className = 'card-box text-start py-2 px-3'>
            <h1 className='fs-6'>{title}</h1>
            <p className='fs-6'>{description}</p>
  
          {/* buttons */}
            <div className='button d-flex justify-content-between align-items-center'>

            {/* Indicators */}
                <div className="indicators d-flex align-items-center">
                {/* Short line */}
                    <div className="line"></div>

                {/* circle icon 1*/}
                    <div className="circle"></div>

                {/* circle icon 2 */}
                    <div className="circle"></div>
                </div>
                    {/* Button arrow */}
                    <button onClick={nextStep} className='btn btn-dark btn-circle rounded-circle d-flex justify-content-center align-items-center'>
                        <i className='bi bi-arrow-right'></i>
                    </button>
            </div>
        </div>
       </div>
    </>
  );
};

export default Card; // access to Card

