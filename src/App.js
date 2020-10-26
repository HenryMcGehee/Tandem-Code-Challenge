import React, { Component } from 'react';
import './App.css';
import QuestionContainer from './Containers/QuestionContainer';

class App extends Component {
  state = {
    answers: [],
  }

  onAnswer = (bool) => {
    const answerState = this.state.answers;
    let answer;
    if (bool === 'true') {
      answer = true;
    } else {
      answer = false;
    }
    answerState.push(answer);
    this.setState({answers: answerState})
  }

  render() {

    return (
      <div className="App">
        <h1>Trivia</h1>
  
        <QuestionContainer onAnswer={this.onAnswer} answers={this.state.answers}/>

        <h1>The End</h1>
      </div>
    );
  }
}

export default App;
