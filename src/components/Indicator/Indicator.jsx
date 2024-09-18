import React from 'react';
import styled from "styled-components";



export const StyledLink = styled.div`
    width: ${({isActive}) => isActive ? '20px' : '10px'};
    height: ${({isActive}) => isActive ? '2px' : '10px'};
    background-color: ${({isActive}) => isActive ? 'black' : 'grey'};
    border-radius: ${({isActive}) => isActive ? '0' : '50%'};
    margin-right: 5px;
    display: inline-block;  /* Ensures they appear inline */
`


const Indicator = ({ totalStep, step }) => {
  //  console.log("totalStep:", totalStep, "step:", step); // Check values
    
    const indicators = [...Array(totalStep).keys()]; // create an array with totalStep

    return (
      <div className='indicators'>
        {indicators.map((index) => (
          <StyledLink key={index} isActive={index === step}></StyledLink> //iterate each index with StyleLink if index and step same then isActive true
        ))}
      </div>
    );
  };
  

export default Indicator;
