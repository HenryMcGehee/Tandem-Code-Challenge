import React, { useState, useEffect } from 'react';
import Modal from './Components/Modal';
import QuestionDataJSON from './Data/Apprentice_TandemFor400_Data.json';

import './App.css';

export default function App() {
  // state info
  
  const [questionData, setQuestionData] = useState(QuestionDataJSON);

  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(Math.floor(Math.random() * questionData.length));

  const [questionCount, setQuestionCount] = useState(0);

  const [showModal, setModal] = useState(false);

  const [messageOnAnswer, setMessageOnAnswer] = useState('ooop');
  
  const [score, setScore] = useState(0);
  
  const [showScore, showEndScore] = useState(false);
  
  //functions

  
  const CloseModal = () => {
    
    if(questionCount < 9){
      const newQuestionData = questionData
      newQuestionData.splice(currentQuestionIndex, 1);
      setQuestionData(newQuestionData);
      
      const newQuestionCount = questionCount + 1;
      setQuestionCount(newQuestionCount);
      
      const newcurrentQuestionIndex = Math.floor(Math.random() * questionData.length);
      setcurrentQuestionIndex(newcurrentQuestionIndex);
    }
    else{
      showEndScore(true);
    }
    setModal(false);
    
  }
  
  const Reset = () => {
    showEndScore(false)
    setQuestionCount(0)
    setScore(0)
    setQuestionData(QuestionDataJSON)
  }
  
  
  function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
  }
  
  const checkAnswer = (answer) => {
    if(answer===currentQuestion.correct){
      let newScore = score + 1;
      setScore(newScore);
      setMessageOnAnswer('Correct!')
    }
    else{
      setMessageOnAnswer('Incorrect you idiot')
    }
    setModal(true);
  }
  
  const currentQuestion = questionData[currentQuestionIndex];
  const answers = [...currentQuestion.incorrect, currentQuestion.correct];
  const shuffledAnswers = shuffle(answers);
  const answerButtons = shuffledAnswers.map((answer) => {
    return (
    <button className="regButton" onClick={() => checkAnswer(answer)}>{answer}</button>
    )
  })

  return (
    <div className="App">
      <div className="header">
        <h1>Trivia</h1>
      </div>

      <Modal show={showModal} close={CloseModal} message={messageOnAnswer} correct={currentQuestion.correct}/>

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
                  {currentQuestion.question}
                </div>
            </div>

            <div className="answer-section">

              {answerButtons}

            </div>

          </>
        )}
      </div>
    </div>
  );
}