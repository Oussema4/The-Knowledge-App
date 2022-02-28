import React, { useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {  getOneNumber } from '../../redux/actions/gameAction'
import "./number.css"
function Numbergame() {

  const onequestion=useSelector(state=>state.gameReducer.onequestion)

  const [screen,setScreen]=useState("")

  useEffect(()=>{

    {dispatch(getOneNumber())}
          
        },[])
  const dispatch=useDispatch()

const goodJob=(e)=>{
  {dispatch(getOneNumber());setScreen("");e.preventDefault();}

}

const uCanDobetter=(e)=>{
  e.preventDefault();
  setScreen("")
  alert("no false");
  dispatch(getOneNumber());

  
}


  return (
    <div className='numbergame'>
      
      <Form>
    
   
     <h1 style={{textAlign:'center',color:"white",paddingTop:"40px",paddingBottom:"80px",backgroundImage:"url(https://www.seekpng.com/png/full/375-3753368_background-image-for-title-unhitched-book-by-sunny.png)"}}>{onequestion.question}</h1>
    

         
   
  
                
               
               
            
                <div id="calculator">
        {/* Screen and clear key */}
        <div className="top">
          <span className="clear" onClick={()=>setScreen("")}>C</span>
          <input   className='screen' autofocus="on" value={screen} onChange={(e)=>setScreen(e.target.value)}/>
        </div>
        <div className="keys">
          {/* operators and other keys */}
          
          <span onClick={()=>setScreen(screen+"1")} >1</span>
          
          <span onClick={()=>setScreen(screen+"2")} >2</span>
          
          <span onClick={()=>setScreen(screen+"3")} >3</span>
          <span onClick={()=>setScreen(screen+"4")} >4</span>
          <span onClick={()=>setScreen(screen+"5")} >5</span>
          
          <span onClick={()=>setScreen(screen+"6")} >6</span>
          <span onClick={()=>setScreen(screen+"7")} >7</span>
          <span onClick={()=>setScreen(screen+"8")} >8</span>
          
          <span onClick={()=>setScreen(screen+"9")} >9</span>
          <span onClick={()=>setScreen(screen+"0")} >0</span>
          <Button style={{width:"180px"}} type="submit"  variant="success" onClick={screen===onequestion.true_choice?goodJob:uCanDobetter} >Next</Button>
         
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
    
    
  
</Form>
    </div>
  )
}

export default Numbergame