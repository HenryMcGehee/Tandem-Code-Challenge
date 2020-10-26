import React, { Component } from 'react';
import Question from '../Components/Question';


class QuestionContainer extends Component {
    state = {
        index: 0,
        trueBtn: "",
        falseBtn: "",
        opaque: "",
        trueOpacity: "",
        falseOpacity: "",
        infoHide: 'hidden',
        censorHide: '',
        buttonDisable: false
    }

    onAnswer = (bool) => {
        if (this.state.buttonDisable === false) {
          this.props.onAnswer(bool)
          if (bool === 'true') {
            this.PlayAudio('./Audio/Hackathon - Correct Answer.wav')
            this.setState({qHeader: "CORRECT!"})
            this.setState({headColor: "headCorrect"})
            this.setState({trueBtn: "correct"})
            this.setState({opaque: "opaque"})
            this.setState({trueOpacity: "visible"})
          } else {
            this.PlayAudio('./Audio/Hackathon - Incorrect Answer.wav')
            this.setState({qHeader: "SO CLOSE!"})
            this.setState({headColor: "headWrong"})
            this.setState({falseBtn: "wrong"})
            this.setState({opaque: "opaque"})
            this.setState({falseOpacity: "visible"})
          }
          this.setState({buttonDisable: true})
        }
    }

    render() {

        return(
            <div>
                <Question 
                    index={this.state.index}
                    onAnswer={this.onAnswer} 
                    buttonDisable={this.state.buttonDisable}
                    trueBtn={this.state.trueBtn}
                    falseBtn={this.state.falseBtn}
                    opaque={this.state.opaque}
                    trueOpacity={this.state.trueOpacity}
                    falseOpacity={this.state.falseOpacity}
                    unselected={this.state.unselected}
                />
            </div>
        );
    }
}

export default QuestionContainer;