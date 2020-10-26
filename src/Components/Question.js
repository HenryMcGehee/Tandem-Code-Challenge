import React from 'react';
import QuestionData from '../Data/Apprentice_TandemFor400_Data.json'

import './Question.css';

function Question(props) {

    // const buttons = for (let i = 0; i < QuestionData; i++){
    //     <button>
    //       {QuestionData.incorrect}
    //     </button>
    // }

  return (

    <div className="questionContainer">
      {QuestionData.map((QuestionDetail) => {
            return <div>
                
                <h1>{QuestionDetail.question}</h1>

                <div>
                    {QuestionDetail.incorrect.map((option) => (
                        <button className="incorrect">{option}</button>
                    ))}

                    <button className="correct">{QuestionDetail.correct}</button>
                </div>
                
            </div>
        })}
    </div>
  )
}

export default Question;