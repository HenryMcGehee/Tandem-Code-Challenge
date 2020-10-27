import React, { useState } from 'react';
import './App.css';
import QuestionData from './Data/Apprentice_TandemFor400_Data.json';

export default function App() {
  let [score, setScore] = useState(0);

  let [currentQuestion, setCurrentQuestion] = useState(0);

  let [questionContent, setQuestionContent] = useState(Math.floor(Math.random() * 21));

  const [showScore, showEndScore] = useState(false);

  const Answer = () => {

    let nextQuestion = currentQuestion + 1;
    if(nextQuestion < 10){
      setCurrentQuestion(nextQuestion);
      setQuestionContent(Math.floor(Math.random() * 21))
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
      <div className="header">
        <h1>Trivia</h1>
      </div>

      <div className="questionContainer">
        {showScore ? (
          <div>You scored {score} out of 10</div>
        ) : (
          <>
            <div className="question-section">
                <div className="current-question">
                  <span>Question {currentQuestion + 1}</span>/10
                </div>
                <div className="question-text">
                  {QuestionData[questionContent].question}
                </div>
            </div>

            <div className="answer-section">
                
              {QuestionData[questionContent].incorrect.map((option) => (
                <button onClick={Answer}>
                    {option}
                </button>
              ))}

              <button onClick={() => {
                Correct();
                Answer();
              }}>
                {QuestionData[questionContent].correct}
              </button>

            </div>

          </>
        )}
      </div>
    </div>
  );
}