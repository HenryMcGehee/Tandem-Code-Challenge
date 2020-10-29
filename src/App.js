import React, { useState, useEffect } from 'react';
import Modal from './Components/Modal';
import QuestionDataJSON from './Data/Apprentice_TandemFor400_Data.json';

import './App.css';

export default function App() {
  // state info
  
  const [questionData, setQuestionData] = useState(QuestionDataJSON);

  const [currentQuestion, setCurrentQuestion] = useState(Math.floor(Math.random() * questionData.length));

  let [questionCount, setQuestionCount] = useState(0);

  const [showModal, setModal] = useState(false);
  
  let [score, setScore] = useState(0);
  
  // let [currentQuestion, setCurrentQuestion] = useState(0);
  
  // let [currentQuestion, setQuestionContent] = useState(Math.floor(Math.random() * 21));
  
  const [showScore, showEndScore] = useState(false);
  
  //functions

  const Answer = () => {
    
    
    if(questionCount < 9){
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

    const newQuestionData = questionData
    newQuestionData.splice(currentQuestion, 1);
    setQuestionData(newQuestionData);
    
    const newQuestionCount = questionCount + 1;
    setQuestionCount(newQuestionCount);
    
    const newCurrentQuestion = Math.floor(Math.random() * questionData.length);
    setCurrentQuestion(newCurrentQuestion);
    setModal(false);
  }
  
  const Reset = () => {
    showEndScore(false)
    setQuestionCount(0)
    setScore(0)
    setQuestionData(QuestionDataJSON)
  }
  
  
  return (
    <div className="App">
      <div className="header">
        <h1>Trivia</h1>
      </div>

      <Modal show={showModal} close={CloseModal} correct={questionData[currentQuestion].correct}/>

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
                  <span>Question {questionCount + 1}</span>/10
                </div>
                <div className="question-text">
                  {questionData[currentQuestion].question}
                </div>
            </div>

            <div className="answer-section">
                
              {questionData[currentQuestion].incorrect.map((option) => (
                <button className="regButton" onClick={Answer}>
                    {option}
                </button>
              ))}

              <button className="regButton" onClick={() => {
                Correct();
                Answer();
              }}>
                {questionData[currentQuestion].correct}
              </button>

            </div>

          </>
        )}
      </div>
    </div>
  );
}