import React, { useState, useEffect } from 'react';
import Modal from './Components/Modal';
import QuestionData from './Data/Apprentice_TandemFor400_Data.json';

import './App.css';

export default function App() {
  const QuestionArry = [];
  
  for(let i = 0; i < QuestionData.length; i++){
    QuestionArry.push(QuestionData[i]);
  }
  // state info
  
  const [showModal, setModal] = useState(false);
  
  let [score, setScore] = useState(0);
  
  let [currentQuestion, setCurrentQuestion] = useState(0);
  
  let [questionContent, setQuestionContent] = useState(Math.floor(Math.random() * 21));
  
  const [showScore, showEndScore] = useState(false);
  
  //functions
  
  const LoadData = () => {
  }

  const Answer = () => {
    QuestionArry.splice(QuestionArry[questionContent - 1], 1);
    console.log(QuestionArry[questionContent - 1]);
    
    let nextQuestion = currentQuestion + 1;
    if(nextQuestion < 10){
      setModal(true);
    }
    else{
      showEndScore(true);
    }
  }
  
  const Correct = () => {
    console.log("correct");
    
    let newScore = score + 1;
    setScore(newScore);
  }
  
  const CloseModal = () => {
    let nextQuestion = currentQuestion + 1;
    
    if(nextQuestion < 10){
      setCurrentQuestion(nextQuestion);
      setQuestionContent(Math.floor(Math.random() * 21))
    }
    
    setModal(false);
  }

  const Reset = () => {
    showEndScore(false)
    setCurrentQuestion(0)
    setScore(0)
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Trivia</h1>
      </div>

      

      <Modal show={showModal} close={CloseModal} correct={QuestionArry[questionContent].correct}/>

      <div className="questionContainer">
        {showScore ? (
          <div>
            <h1>You scored {score} out of 10</h1>
            <button className="resetButton" onClick={Reset}>
                Play Again?
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
                <div className="current-question">
                  <span>Question {currentQuestion + 1}</span>/10
                </div>
                <div className="question-text">
                  {QuestionArry[questionContent].question}
                </div>
            </div>

            <div className="answer-section">
                
              {QuestionArry[questionContent].incorrect.map((option) => (
                <button className="regButton" onClick={Answer}>
                    {option}
                </button>
              ))}

              <button className="regButton" onClick={() => {
                Correct();
                Answer();
              }}>
                {QuestionArry[questionContent].correct}
              </button>

            </div>

          </>
        )}
      </div>
    </div>
  );
}