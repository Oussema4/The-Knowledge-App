import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getNumberQuestions, getquestions, getQuizQuestions } from '../../redux/actions/gameAction'
import Gamecard from './Gamecard'
function Quiz() {

const quizquestions=useSelector(state=>state.gameReducer.quizquestions)

  return (
    <div>
    
    
    
    


   {quizquestions.map((el,i)=><h2><Gamecard el={el} i={i}></Gamecard></h2>)}
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
   

    
    
    
    
    
    
    </div>


    
  )
}

export default Quiz