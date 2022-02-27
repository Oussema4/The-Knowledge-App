import React, { useEffect } from 'react'
import { getquestions } from '../../redux/actions/gameAction'
import { useDispatch,useSelector} from 'react-redux'
import Gamecard from '../game for user/Gamecard'
import { Button, Form, FormControl } from 'react-bootstrap'
import "../game for user/game.css"

function Questions() {

    const dispatch=useDispatch()

const allquestions=useSelector(state=>state.gameReducer.allquestions)


useEffect(()=>{

    dispatch(getquestions())
        
      },[])
  return (


    <div >
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
    
    
    
  
<h2>   {allquestions.map(el=><Gamecard el={el}></Gamecard>)}</h2>



  
   
    
    </div>
  )
}

export default Questions