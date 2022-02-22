import React from 'react'
import { useDispatch } from 'react-redux'
import { getQuizQuestions } from '../../redux/actions/gameAction'

function Gamecard({el}) {

  return (
    <div>
    
    

    <div className=''>
        
      
        <h1>{el.question}</h1>
        <h2>{el.choice1}</h2>
        <h2>{el.true_choice}</h2>
        <h2>{el.choice2}</h2>
        <h2>{el.choice3}</h2>

      </div>
   
      </div>
    
      
    
    
  )
}

export default Gamecard