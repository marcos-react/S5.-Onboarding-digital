import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import timeManagment from './assets/time_managment.svg';
import programming from './assets/programming.svg';
import meditation from './assets/meditation.svg';



const App = () => {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li mes hores. Al principi sembla imposible, però notaràs una millora ràpidament",
      bgcolor: "#44979f",
      image: timeManagment
    },
    {
      title: "Programa projectes propis",
      description: "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivación i la implicació en el projecte ajudará a accelerar el teu aprenentatge",
      bgcolor: "#ffffff",
      image: programming
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduirás l'estrès i l'ansietat. Millorarás el teu aprenentatge",
      bgcolor: "#bbbbbb",
      image: meditation
    }
  ];

  const [step, setStep] = useState(0);

  // Get the currentCardData
  const currentCardData = tutorialData[step];

  // Arrow function nextStep()
  const nextStep = () => {
    if(step < tutorialData.length -1){
      setStep(step+1);
      //console.log(step);
    }
  }

  const prevStep = () => step > 0 && setStep(step-1);
  
  const isFirstStep = () => step === 0;

  const isFinalStep = () => step === tutorialData.length -1;
  
  //console.log("tutorialData.length:", tutorialData.length);

  return (
    <>
      
      <Card title={currentCardData.title} description={currentCardData.description} bgcolor={currentCardData.bgcolor} image={currentCardData.image} nextStep={nextStep} prevStep={prevStep} step={step} isFirstStep={isFirstStep} isFinalStep={isFinalStep} totalStep ={tutorialData.length} goToPhrase={(step) => setStep(step)}/>
      
    </>
  );
}

// Use default export App
export default App;

