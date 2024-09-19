import React from 'react';
import './Card.css';
import Indicator from './Indicator/Indicator.jsx';



const Card = ({ title, description, bgcolor, image, nextStep, prevStep, step, isFirstStep,isFinalStep,totalStep,goToPhrase}) => {

  //  console.log("totalStep in Card:", totalStep);

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
                    <Indicator totalStep={totalStep} step={step} goToPhrase={goToPhrase}></Indicator>
                </div>

                <div className="d-flex justify-content-end">
                    {/* Button arrow left */}
                    {!isFirstStep() && <button onClick={prevStep} className='btn btn-circle rounded-circle d-flex justify-content-center align-items-center'>
                        <i className='bi bi-arrow-left'></i>
                    </button>}
                    {/* Button arrow right */}
                    {!isFinalStep() && <button onClick={nextStep} className='btn btn-dark btn-circle rounded-circle d-flex justify-content-center align-items-center'>
                        <i className='bi bi-arrow-right'></i>
                    </button>}
                </div>
            </div>
        </div>
       </div>
    </>
  );
};

export default Card; // access to Card

