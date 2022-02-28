import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getOneQuiz, getQuizQuestions } from '../../redux/actions/gameAction'
import "./game.css"

function Quiz() {

  const [x,setx]=useState(Math.random())
  const [tonext,setTonext]=useState(1)
const onequestion=useSelector(state=>state.gameReducer.onequestion)
useEffect(()=>{

  {dispatch(getOneQuiz());setx(Math.random())}
        
      },[])
const dispatch=useDispatch()


const goodJob=()=>{
 
  setx(Math.random());
  {dispatch(getOneQuiz())};
  setTonext(2)

}

const uCanDobetter=()=>{
 
  
  setx(Math.random());
  dispatch(getOneQuiz());
  setTonext(0)
}


  return (
    <div>
    <div >
    
    

    
 

   

   

    

    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quiz Example</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="icon.png" />
        <main>
          <div className="modal-container" id="score-modal">
            <div className="modal-content-container">
              <h1>Congratulations, Quiz Completed!</h1>
             
              <div className="modal-button-container">
                <button id="btn-continue" onclick="closeScoreModal()">Restart</button>
              </div>
            </div>
          </div>
          <div className="game-quiz-container">
            <div className="game-details-container">
              <h1>Score : <span id="player-score" /> / <span className="questions-count" /></h1>
              <h1>Question : <span id="question-number" /> / <span className="questions-count" /></h1>
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
              {x>0.5 && x<0.7?   
               <>
              <Button onClick={goodJob} variant="dark" style={{width:"200px",height:"40px"}}>
               {onequestion.true_choice}
              </Button>
              <Button onClick={uCanDobetter} variant="dark"  style={{width:"200px",height:"40px"}}>
              {onequestion.choice3}
               </Button>
               <Button onClick={uCanDobetter} variant="dark"  style={{width:"200px",height:"40px"}}>
               {onequestion.choice2}
               </Button>
               <Button  onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
               {onequestion.choice1}
               </Button>
            
               </>
               : x<0.5 && x>0.3? 
               <>
                <Button onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
                {onequestion.choice3}
              </Button>
              <Button onClick={goodJob} variant="dark"  style={{width:"200px",height:"40px"}}>
              {onequestion.true_choice}
               </Button>
               <Button onClick={uCanDobetter} variant="dark"  style={{width:"200px",height:"40px"}}>
               {onequestion.choice2}
               </Button>
               <Button  onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
               {onequestion.choice1}
               </Button>
               </>:  x<0.3 && x>0.1? 
             <>
             
             <Button onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
                {onequestion.choice3}
              </Button>
             
               <Button onClick={uCanDobetter} variant="dark"  style={{width:"200px",height:"40px"}}>
               {onequestion.choice2}
               </Button>
               <Button onClick={goodJob} variant="dark"  style={{width:"200px",height:"40px"}}>
              {onequestion.true_choice}
               </Button>
               <Button  onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
               {onequestion.choice1}
               </Button>
             
             
             </>:
                <>
                <Button onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
                {onequestion.choice3}
              </Button>
             
               <Button onClick={uCanDobetter} variant="dark"  style={{width:"200px",height:"40px"}}>
               {onequestion.choice2}
               </Button>
            
               <Button  onClick={uCanDobetter} variant="dark" style={{width:"200px",height:"40px"}}>
               {onequestion.choice1}
               </Button>
               <Button onClick={goodJob} variant="dark"  style={{width:"200px",height:"40px"}}>
              {onequestion.true_choice}
               </Button></>}
            </div>








{tonext==1?<Alert variant="warning">
   We believe in you  </Alert>
    
  :tonext==0?<Alert variant="danger">
   you can do better </Alert>
  :<Alert variant="success">
   Good Job
  </Alert>} 

     
          </div>
        </main>
      </div>
    
    
    


         
    
                  
    
    </div>




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