import React, { useEffect } from 'react'
import { getquestions } from '../../redux/actions/gameAction'
import { useDispatch,useSelector} from 'react-redux'
import Gamecard from './Gamecard'
import { Button, Form, FormControl } from 'react-bootstrap'
import "./game.css"

function Questions() {

    const dispatch=useDispatch()

const allquestions=useSelector(state=>state.gameReducer.allquestions)


useEffect(()=>{

    dispatch(getquestions())
        
      },[])
  return (


    <div>
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
    
    


   {allquestions.map(el=><h2>{el.question}</h2>)}
  
   
    
    
    
    
    
    
    </div>
  )
}

export default Questions