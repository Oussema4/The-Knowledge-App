import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { getNumberQuestions } from '../../redux/actions/gameAction'
import Gamecard from './Gamecard'

function Numbergame() {

    


const numberquestions=useSelector(state=>state.gameReducer.numberquestions)
  return (
    <div>
    
    
    


   {numberquestions.map((el,i)=><h2><Gamecard el={el} i={i}></Gamecard></h2>)}
  
   
   
    
    
    
  
    
    </div>
  )
}

export default Numbergame