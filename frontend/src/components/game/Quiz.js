import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getOneQuiz, getQuizQuestions } from '../../redux/actions/gameAction'
import Gamecard from './Gamecard'

function Quiz() {

const quizquestions=useSelector(state=>state.gameReducer.quizquestions)
const onequestion=useSelector(state=>state.gameReducer.onequiz)
const dispatch=useDispatch()
  return (
    <div>
    
    
    <button onClick={()=>dispatch(getOneQuiz())} >PLAY</button>
    <button onClick={()=>dispatch(getQuizQuestions())}>show all quiz questions</button>
    <h2>   {quizquestions.map(el=><Gamecard el={el}></Gamecard>)}</h2>

   
  <Link to="/"><div className="grad">
  <div className="container1">
    <div className="left">
    
    </div>
  </div>
  <div className="container2">
    <div className="goku">
      
    </div>
  </div>
  
</div></Link>
   

    
    
    
    
    <h1>{onequestion.question}</h1>
    

        <h2>{onequestion.choice1}</h2>
        <h2>{onequestion.true_choice}</h2>
        <h2>{onequestion.choice2}</h2>
        <h2>{onequestion.choice3}</h2>
    
    </div>


    
  )
}

export default Quiz