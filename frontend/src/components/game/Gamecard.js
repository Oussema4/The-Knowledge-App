import React from 'react'
import { useDispatch } from 'react-redux'
import { getQuizQuestions } from '../../redux/actions/gameAction'

function Gamecard({el,i}) {

  return (
    <div>
    
    

    <div>
        
        <main>
        
          <div className="game-quiz-container">
            <div className="game-details-container">
              <h1>Score : <span id="player-score" /> 25B <span className="questions-count" /></h1>
              <h1>Time : <span id="question-number" /> 33s <span className="questions-count" /></h1>
            </div>
            <div className="game-question-container">
              <h1 id="display-question" >{el.question} </h1>
            </div>
            <div className="game-options-container">
              <div className="modal-container" id="option-modal">
                <div className="modal-content-container">
                 
                </div>
              </div>
              <span>
              <label htmlFor="option-four" className="option" id="option-four-label"  >{el.choice1} </label>
              </span>
              <span>
              <label htmlFor="option-four" className="option" id="option-four-label" x >{el.choice2}</label>
              </span>
              <span>
              <label htmlFor="option-four" className="option" id="option-four-label"  >{el.true_choice}</label>
              </span>
              <span>
               
                <label  onClick={i++} htmlFor="option-four" className="option" id="option-four-label" >{el.choice3}</label>
              </span>
              <button onClick={i++}></button>
            </div>
           
          </div>
        </main>
      </div>
   
      </div>
    
      
    
    
  )
}

export default Gamecard