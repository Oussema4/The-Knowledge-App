import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getOneQuiz, getQuizQuestions } from '../../redux/actions/gameAction'
import "./game.css"

function Quiz() {

  const [x,setx]=useState(Math.random())
const onequestion=useSelector(state=>state.gameReducer.onequestion)
useEffect(()=>{

  {dispatch(getOneQuiz());setx(Math.random())}
        
      },[])
const dispatch=useDispatch()
  return (
    <div>
    
    
 

   
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
   

    

    
    
    


         
      {x>0.5 && x<0.7?   
      <>
      
      <Card style={{ width: '35rem',textAlign:"center" }}>
  <Card.Body>
    <Card.Text>
    <h4>{onequestion.question}</h4>

    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem style={{backgroundColor:"tomato"}}>{onequestion.choice1}</ListGroupItem>
    <ListGroupItem>{onequestion.true_choice}</ListGroupItem>

    <ListGroupItem>{onequestion.choice2}</ListGroupItem>
    <ListGroupItem>{onequestion.choice3}</ListGroupItem>
   
  </ListGroup>

</Card>
        </> : x<0.5 && x>0.3? 
          <>
          <Card style={{ width: '35rem',textAlign:"center" }}>
  <Card.Body>
    <Card.Text>
    <h4>{onequestion.question}</h4>

    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem style={{backgroundColor:"tomato"}}>{onequestion.choice1}</ListGroupItem>
    <ListGroupItem>{onequestion.choice2}</ListGroupItem>
    <ListGroupItem>{onequestion.true_choice}</ListGroupItem>
    <ListGroupItem>{onequestion.choice3}</ListGroupItem>
   
  </ListGroup>

</Card>

            </>:  x<0.3 && x>0.1? 
             <>
            <Card style={{ width: '35rem',textAlign:"center" }}>
  <Card.Body>
    <Card.Text>
    <h4>{onequestion.question}</h4>

    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem style={{backgroundColor:"tomato"}}>{onequestion.choice1}</ListGroupItem>
    <ListGroupItem>{onequestion.choice2}</ListGroupItem>
    <ListGroupItem>{onequestion.choice3}</ListGroupItem>
    <ListGroupItem>{onequestion.true_choice}</ListGroupItem>
  </ListGroup>

</Card>

               </>:
                <>
                  <Card style={{ width: '35rem',textAlign:"center" }}>
  <Card.Body>
    <Card.Text>
    <h4>{onequestion.question}</h4>

    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
  <ListGroupItem>{onequestion.true_choice}</ListGroupItem>
    <ListGroupItem style={{backgroundColor:"tomato"}}>{onequestion.choice1}</ListGroupItem>
    <ListGroupItem>{onequestion.choice2}</ListGroupItem>
    <ListGroupItem>{onequestion.choice3}</ListGroupItem>

  </ListGroup>

</Card>
                 
                  </> }
  
                  <Button variant="success" onClick={()=>{dispatch(getOneQuiz());setx(Math.random())}} >Next</Button>

                  
    
    </div>


    
  )
}

export default Quiz