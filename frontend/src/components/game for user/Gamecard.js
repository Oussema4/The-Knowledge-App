import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteQuestion, getOneQuestion, toggleTrue } from '../../redux/actions/gameAction'

function Gamecard({el}) {



  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleDelete=()=>{
    if(window.confirm(`Do you want delete ${el.question}`)){
    dispatch(deleteQuestion(el._id))}
  }


  const handleEdit=()=>{
    dispatch(getOneQuestion(el._id))
    dispatch(toggleTrue());
    navigate("/add_edit")
    }
  return (

    <div>
    
    

    <div className=''>
    <Card>
  
  <Card.Body>
    <Card.Title><h1>{el.question}</h1></Card.Title>
    <Card.Text>
    
  
    </Card.Text>

    
   <Button variant="primary">{el.choice1}</Button>
    <Button variant="primary">{el.choice2}</Button>
    <Button variant="primary">{el.choice3}</Button>
    <Button variant="primary">{el.true_choice}</Button>
  
    <br/>

{el.game_type==="quiz"?<Button variant="success">{el.game_type}</Button>:<Button variant="info">{el.game_type}</Button>}
   
    <Button variant="danger">{el.question_type}</Button>
<br/>
    <Button variant="warning"  onClick={handleEdit}>Edit</Button>
    <Button variant="danger"  onClick={handleDelete}>Delete</Button>

    
  </Card.Body>
</Card>
      
        
      
      

      </div>
   
      </div>
    
      
    
    
  )
}

export default Gamecard