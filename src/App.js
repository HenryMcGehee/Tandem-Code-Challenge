import React, { useState, Component } from 'react';
import Modal from './Components/Modal';
import QuestionData from './Data/Apprentice_TandemFor400_Data.json';

import './App.css';

export default class App extends Component {
  state = {
    QuestionArry: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    showModal: false,
    score: 0,
    currentQuestion: 0,
    questionContent: 0,
    showScore: false,
  }
  
  render (){
    const Answer = () => {
      //QuestionArry.splice(QuestionArry[this.state.questionContent - 1], 2);
      
      let nextQuestion = this.state.currentQuestion;
      console.log(nextQuestion);
      
      this.setState({questionContent: nextQuestion})
      
      if(nextQuestion < 10){
        this.setState({setModal: true});
      }
      else{
        this.setState({showEndScore: true});
      }
    }
    
    const Correct = () => {
      console.log("correct");
      
      let newScore = this.state.score + 1;
      this.setState({setScore: newScore});
    }
    
    const CloseModal = () => {
      let nextQuestion = this.state.currentQuestion + 1;
      
      if(nextQuestion < 10){
        this.setState({setCurrentQuestion: nextQuestion});
        this.setState({setQuestionContent: this.state.QuestionArry[Math.floor(Math.random() * this.state.QuestionArry.length)]});
      }
      
      this.setState({setModal: false});
    }
  
    const Reset = () => {
      this.setState({showEndScore: false});
      this.setState({setCurrentQuestion: 0});
      this.setState({setScore: 0});
    }

    return (
      <div className="App">
        <div className="header">
          <h1>Trivia</h1>
        </div>
  
        
  
        <Modal show={this.state.showModal} close={CloseModal} correct={QuestionData[this.state.questionContent].correct}/>
  
        <div className="questionContainer">
          {this.state.showScore ? (
            <div>
              <h1>You scored {this.state.score} out of 10</h1>
              <button className="resetButton" onClick={Reset}>
                  Play Again?
              </button>
            </div>
          ) : (
            <>
              <div className="question-section">
                  <div className="current-question">
                    <span>Question {this.state.currentQuestion + 1}</span>/10
                  </div>
                  <div className="question-text">
                    {QuestionData[this.state.questionContent].question}
                  </div>
              </div>
  
              <div className="answer-section">
                  
                {QuestionData[this.state.questionContent].incorrect.map((option) => (
                  <button className="regButton" onClick={Answer}>
                      {option}
                  </button>
                ))}
  
                <button className="regButton" onClick={() => {
                  Correct();
                  Answer();
                }}>
                  {QuestionData[this.state.questionContent].correct}
                </button>
  
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}