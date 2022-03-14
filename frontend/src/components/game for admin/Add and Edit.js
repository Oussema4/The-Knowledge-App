import React, { useEffect, useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  addquestion,editQuestion, toggleFalse } from '../../redux/actions/gameAction'


function AddEdit() {

    const question=useSelector(state=>state.gameReducer.onequestion)
    const edit=useSelector(state=>state.gameReducer.edit)


  const navigate=useNavigate()

  const[data,setdata]=useState({question:"",choice1:"",choice2:"",choice3:"",true_choice:"",game_type:"",question_type:""})

  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }


 

  
const dispatch=useDispatch()




const handleAdd=()=>{


  dispatch(addquestion(data))
 navigate("/questions")
}

const handleEdit=()=>{
  
  dispatch(editQuestion(question._id,data))
  dispatch(toggleFalse())
  navigate("/questions")

}



useEffect(()=>{edit && edit?setdata({question:question && question.question,
  choice1:question && question.choice1,
  choice2:question && question.choice2,
  choice3:question && question.choice3,
  true_choice:question && question.true_choice,
  game_type:question && question.game_type,
  question_type:question && question.question_type
 },[question]):
  setdata({question:"",choice1:"",choice2:"",choice3:"",true_choice:"",game_type:"",question_type:""})
  },[question])

  return (
    <div >
        

 
   

       
   <Form style={{marginLeft:"500px"}}>
    
   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><b>The game type</b></Form.Label>
    <br/>
    <Button variant='dark' name="game_type" onClick={(e)=> setdata({...data,[e.target.name]:"number"})} >Guess The Number</Button> 
    <Button onClick={(e)=> setdata({...data,[e.target.name]:"quiz"})}   name="game_type" variant='warning'>Quiz</Button>
    <Form.Control  style={{width:"50%"}} value={data.game_type} disabled type="text" placeholder=" the game type"   />
  </Form.Group>


   <Form.Group className="mb-3" controlId="formBasicPassword" > 
    <Form.Label><b>The question type</b></Form.Label>
    <br/>
    <Button variant='success' name="question_type" onClick={(e)=> setdata({...data,[e.target.name]:"Sport"})}>Sport</Button>  
    <Button variant='warning'  name="question_type" onClick={(e)=> setdata({...data,[e.target.name]:"History"})}>History</Button> 
    <Button variant='danger'  name="question_type" onClick={(e)=> setdata({...data,[e.target.name]:"Geography"})}>Geography</Button>
    <Button variant='info'  name="question_type" onClick={(e)=> setdata({...data,[e.target.name]:"Music"})}>Music</Button>
    <Button variant='dark'  name="question_type" onClick={(e)=> setdata({...data,[e.target.name]:" Film & TV"})}> Film & TV</Button>

    <Form.Control  style={{width:"50%"}}  value={data.question_type} type="text"   placeholder=" the question type"  name="question_type" onChange={handleChange}  />
  </Form.Group>


 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><b>Question</b></Form.Label>
    <Form.Control  style={{width:"50%"}} value={data.question} type="text" placeholder="question"  name="question" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><b>Choice 1</b></Form.Label>
    <Form.Control  style={{width:"50%"}} value={data.choice1} type={data.game_type=="number"?"number":"text"} placeholder={data.game_type=="number"?"close to the answer":"choice 1"}   name="choice1" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><b>Choice 2</b></Form.Label>
    <Form.Control  style={{width:"50%"}} value={data.choice2}  type={data.game_type=="number"?"number":"text"}placeholder={data.game_type=="number"?"close to the answer":"choice 2"}   name="choice2" onChange={handleChange}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><b>Choice 3</b></Form.Label>
    <Form.Control  style={{width:"50%"}}  value={data.choice3}  type={data.game_type=="number"?"number":"text"} placeholder={data.game_type=="number"?"close to the answer":"choice 3"}  name="choice3" onChange={handleChange}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label><b>The True Choice</b></Form.Label>
    <Form.Control  style={{width:"50%"}}  value={data.true_choice} type={data.game_type=="number"?"number":"text"} placeholder=" the true choice"  name="true_choice" onChange={handleChange}  />
  </Form.Group>
  


  {edit?<Button  variant="dark" type="submit"  onClick={(e)=>{handleEdit(e)}}  >
    Edit
  </Button>:<Button  variant="primary" type="submit"  onClick={handleAdd}>
    Add
  </Button>}

  
</Form>
    
    
    
    
    </div>
  )
}

export default AddEdit