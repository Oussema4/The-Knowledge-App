import React, { useEffect } from 'react'
import { getquestions } from '../../redux/actions/gameAction'
import { useDispatch,useSelector} from 'react-redux'
import Gamecard from '../game for user/Gamecard'
import { Button, Form, FormControl } from 'react-bootstrap'
import "../game for user/game.css"
import { Link } from 'react-router-dom'

function Questions() {

    const dispatch=useDispatch()

const allquestions=useSelector(state=>state.gameReducer.allquestions)


useEffect(()=>{

    dispatch(getquestions())
        
      },[])
  return (


    <div >
             <h1  className='p_knowledge_home' style={{textAlign:"center"}}>QUESTI<img  style={{width:"40px"}} src="icon_ball.png" alt="error"></img>NS LIST</h1>
             <Link to="/add_edit"><Button >Add New Question </Button></Link> 
        <div className='inp'>
          
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark ">Search</Button>
      </Form>
      </div>
      <br/>
    
    
    
  
<h2>   {allquestions.map(el=><Gamecard el={el}></Gamecard>)}</h2>



  
   
    
    </div>
  )
}

export default Questions