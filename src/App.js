import React, { useState } from 'react';
import './App.css';
import QuestionData from './Data/Apprentice_TandemFor400_Data.json';

export default function App() {
  let [score, setScore] = useState(0);

  let [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, showEndScore] = useState(false);

  const Answer = () => {

    let nextQuestion = currentQuestion + 1;
    if(nextQuestion < QuestionData.length){
      setCurrentQuestion(nextQuestion);
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

  return (
    <div className="App">
      <h1>Trivia</h1>

      {showScore ? (
        <div>You scored {score} out of {QuestionData.length}</div>
      ) : (
        <>
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
              <button onClick={Answer}>
                  {option}
              </button>
            ))}

            <button onClick={() => {
              Correct();
              Answer();
            }}>
              {QuestionData[currentQuestion].correct}
            </button>

          </div>

        </>
      )}
    </div>
  );
}