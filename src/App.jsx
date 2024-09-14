import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = () => {
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li mes hores. Al principi sembla imposible, però notaràs una millora ràpidament",
      bgcolor: "",
      image: ""
    },
    {
      title: "Programa projectes propis",
      description: "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivación i la implicació en el projecte ajudará a accelerar el teu aprenentatge",
      bgcolor: "",
      image: ""
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduirás l'estrès i l'ansietat. Millorarás el teu aprenentatge",
      bgcolor: "",
      image: ""
    }
  ];

  const [step, setStep] = useState(0);

  // Get the currentCardData
  const currentCardData = tutorialData[step];

  return (
    <>
      <Card title={currentCardData.title} description={currentCardData.description} bgcolor={currentCardData.bgcolor} image={currentCardData.image} />
    </>
  );
}

// Use default export App
export default App;

