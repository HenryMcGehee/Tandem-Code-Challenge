import React from "react";

import './Modal.css'


export default class Modal extends React.Component {

  render() {
    if(this.props.show){
    return <div className="modal">
                <div>
                    The correct answer was {this.props.correct}
                </div>

                <button className="modalButton" onClick={this.props.close}>
                    Next Question
                </button>
        
            </div>
    
    }
    else{
        return <div></div>
    }
  }
}