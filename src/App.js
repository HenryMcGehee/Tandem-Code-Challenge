import React, { useState } from 'react';
import './App.css';
import QuestionData from './Data/Apprentice_TandemFor400_Data.json';

export default function App() {

  let [currentQuestion, setCurrentQuestion] = useState(0);

  const Choice = () => {
    let nextQuestion = currentQuestion ++;
    if(nextQuestion < QuestionData.length){
      setCurrentQuestion(nextQuestion);
    }
    else{
      alert("End");
    }
  }

  return (
    <div className="App">
      <h1>Trivia</h1>
 
      <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{QuestionData.length}
          </div>
          <div className='question-text'>
            {QuestionData[currentQuestion].question}
          </div>
      </div>

      <div className='answer-section'>
          
        {QuestionData[currentQuestion].incorrect.map((option) => (
          <button onClick={Choice}>
              {option}
          </button>
        ))}

        <button onClick={Choice}>
          {QuestionData[currentQuestion].correct}
        </button>

      </div>
    </div>
  );
}