import React, { useEffect, useState } from 'react'
import { Alert, Button} from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {  getAllQuiz, getOneQuiz } from '../../redux/actions/gameAction'
import "./game.css"

function Quiz() {
const [score,setScore]=useState(0)
const [currentIndex,setCurrentIndex]=useState(1)
  const [x,setx]=useState(Math.random())
  const [tonext,setTonext]=useState(1)
const onequestion=useSelector(state=>state.gameReducer.onequestion)
const quiz=useSelector(state=>state.gameReducer.allquiz)
const [fifty,setFifty]=useState(true)

const navigate=useNavigate()
useEffect(()=>{
  dispatch(getOneQuiz(1));
dispatch(getAllQuiz())
  setx(Math.random())
  },[])


      
const dispatch=useDispatch()


//
const goodJob=()=>{
  setx(Math.random());
  dispatch(getOneQuiz(onequestion.index+1))
  setTonext(2)
  setCurrentIndex(currentIndex+1)
   setScore(score+1)
   setFifty(true)
}
////
const uCanDobetter=()=>{
  setx(Math.random());
  dispatch(getOneQuiz(onequestion.index+1))
  setTonext(0)
  setCurrentIndex(currentIndex+1)
  setFifty(true)

}



  return (
    <div>
      
   <div >
    <div>

        <main>
        {
         quiz.length<currentIndex && score>=currentIndex/2? <><h2>Congratulation</h2><h3>Your Score is {score}/{quiz.length}</h3><br/><Button onClick={()=>navigate("/")} variant="dark">Go home</Button></>:quiz.length<currentIndex && score<currentIndex/2?<><h2>Hard Luck</h2><h3>Your Score is {score}/{quiz.length}</h3><br/><Button onClick={()=>navigate("/")} variant="dark">Go home</Button></>:<div className="game-quiz-container">
         <div className="game-details-container">
           <h1>Score : <span id="player-score" />  {score} <img  style={{width:"15px",paddingTop:"8px"}} src="icon_ball.png" alt="error"></img> <span className="questions-count" /></h1>
           <h1>Question : <span id="question-number" /> {onequestion.index}<span className="questions-count" /></h1>
         </div>
         <div className="game-question-container">
           <h1 id="display-question" >{onequestion.question}</h1>
         </div>
         <div className="game-options-container">
           <div className="modal-container" id="option-modal">
             <div className="modal-content-container">
               <h1>Please Pick An Option!!</h1>
               <div className="modal-button-container">
                 <button onclick="closeOptionModal()">Continue</button>
               </div>
             </div>
           </div>
          {x>=0&&x<0.3?<>
           <Button  onClick={goodJob} variant="dark"  style={{width:"200px",height:"40px"}} >
            {onequestion.true_choice}
           </Button>
           <Button onClick={uCanDobetter} variant="dark"  style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
           {onequestion.choice3}
            </Button>
            <Button onClick={uCanDobetter} variant="dark"  style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
            {onequestion.choice2}
            </Button>
            <Button  onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
            {onequestion.choice1}
            </Button></>
         :x>=0.3&&x<0.5?<> 
        <Button onClick={uCanDobetter} variant="dark"  style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
        {onequestion.choice3}
         </Button>
         <Button onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}} >
         {onequestion.choice2}
         </Button>
         <Button  onClick={uCanDobetter} variant="dark" style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
         {onequestion.choice1}
         </Button>
         <Button  onClick={goodJob} variant="dark"  style={{width:"200px",height:"40px"}} >
         {onequestion.true_choice}
        </Button></>
          :x>=0.5&&x<0.7? <> 
          <Button onClick={uCanDobetter} variant="dark"  style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
          {onequestion.choice3}
           </Button>
           <Button onClick={uCanDobetter} variant="dark"  style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
           {onequestion.choice2}
           </Button>
           <Button  onClick={goodJob} variant="dark"  style={{width:"200px",height:"40px"}} >
           {onequestion.true_choice}
          </Button>
           <Button  onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
           {onequestion.choice1}
           </Button>
          </>: <> 
          <Button onClick={uCanDobetter} variant="dark"  style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
          {onequestion.choice3}
           </Button>
           <Button  onClick={goodJob} variant="dark"  style={{width:"200px",height:"40px"}} >
           {onequestion.true_choice}
          </Button>
           <Button onClick={uCanDobetter} variant="dark"  style={{width:"200px",height:"40px"}}>
           {onequestion.choice2}
           </Button>
          
           <Button  onClick={uCanDobetter} variant="dark" style={fifty?{width:"200px",height:"40px"}:{width:"200px",height:"40px",display:"none"}}>
           {onequestion.choice1}
           </Button>
          </>}
           
         </div>




{tonext==1?<Alert variant="warning">
We believe in you  </Alert>
 
:tonext==0?<Alert variant="danger">
you can do better </Alert>
:score%3==0?<Alert variant="dark">
Goku Can Help You
</Alert>:<Alert variant="success">
Good Job
</Alert>} 

  
       </div>
        }
          
        </main>
      </div>
    
    
    


         
    
                  
    
    </div>




{score%3==0&&score!=0?<><div onClick={()=>setFifty(false)} className="grad">
  
  <div className="container1">
    <div className="left">
    
    </div>
  </div>
  
  <div className="container2">
    <div className="goku">
    </div>
  </div>
  
</div></>:null}


</div>


    
  )
}

export default Quiz