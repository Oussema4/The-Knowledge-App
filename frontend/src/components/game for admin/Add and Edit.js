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

const handleEdit=(e)=>{
  
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
  question_type:question && question.question_type },[question]):
  setdata({question:"",choice1:"",choice2:"",choice3:"",true_choice:"",game_type:"",question_type:""})
  },[question])

  return (
    <div>
        

 
   

       
   <Form>
    
   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>The question type</Form.Label>
    <Form.Control value={data.question_type} type="text"   placeholder=" the question type"  name="question_type" onChange={handleChange}  />
  </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>The game type</Form.Label>
    <Form.Control value={data.game_type} type="text" placeholder=" the game type"  name="game_type" onChange={handleChange}  />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Question</Form.Label>
    <Form.Control value={data.question} type="text" placeholder="question"  name="question" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Choice 1</Form.Label>
    <Form.Control value={data.choice1} type="text" placeholder="choice1"  name="choice1" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Choice 2</Form.Label>
    <Form.Control value={data.choice2}  type="text" placeholder="choice2"  name="choice2" onChange={handleChange}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Choice 3</Form.Label>
    <Form.Control  value={data.choice3}  type="text" placeholder="choice3"  name="choice3" onChange={handleChange}  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>The True Choice</Form.Label>
    <Form.Control  value={data.true_choice} type="text" placeholder=" the true choice"  name="true_choice" onChange={handleChange}  />
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