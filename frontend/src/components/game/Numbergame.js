import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { getNumberQuestions, getOneNumber } from '../../redux/actions/gameAction'
import Gamecard from './Gamecard'

function Numbergame() {
  const onenumber=useSelector(state=>state.gameReducer.onenumber)
  const dispatch=useDispatch()


const numberquestions=useSelector(state=>state.gameReducer.numberquestions)
  return (
    <div>
     <button onClick={()=>dispatch(getOneNumber())} >PLAY</button>


    
    

<h2>   {numberquestions.map(el=><Gamecard el={el}></Gamecard>)}</h2>

  
       
<h1>{onenumber.question}</h1>
    

    <h2>{onenumber.choice1}</h2>
    <h2>{onenumber.true_choice}</h2>
    <h2>{onenumber.choice2}</h2>
    <h2>{onenumber.choice3}</h2>

   
    
    
    
  
    
    </div>
  )
}

export default Numbergame