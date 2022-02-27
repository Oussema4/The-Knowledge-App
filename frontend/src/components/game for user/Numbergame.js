import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {  getOneNumber } from '../../redux/actions/gameAction'
import "./number.css"
function Numbergame() {
  const [x,setx]=useState(Math.random())

  const onequestion=useSelector(state=>state.gameReducer.onequestion)


  useEffect(()=>{

    {dispatch(getOneNumber());setx(Math.random())}
          
        },[])
  const dispatch=useDispatch()

  return (
    <div>
    


   
     <h1>{onequestion.question}</h1>
    

         
   
  
                
               
               
            
                <div id="calculator">
        {/* Screen and clear key */}
        <div className="top">
          <span className="clear">C</span>
          <input  className='screen'/>
        </div>
        <div className="keys">
          {/* operators and other keys */}
          
          <span>1</span>
          <span>2</span>
          
          <span>3</span>
          <span>4</span>
          <span>5</span>
          
          <span>6</span>
          <span>7</span>
          <span>8</span>
          
          <span>9</span>
          <span >0</span>
          <Button style={{width:"180px"}} variant="success" onClick={()=>{dispatch(getOneNumber());setx(Math.random())}} >Next</Button>
         
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
    <div className="tel">
<div className="keyboard">		
        <div className="buttons">
          <div className="cuboid number one" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-1.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number two" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-2.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number three" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-3.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number four" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-1.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number five" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-2.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number six" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-3.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number seven" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-1.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number eight" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-2.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number nine" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-3.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number asterisk" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-1.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number zero" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-2.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
          <div className="cuboid number hash" onmousedown="new Audio('https://josetxu.com/demos/sounds/tc-dial-3.mp3').play()">	
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
            <div className="side" />
          </div>
        </div>
      </div>
      </div>
    
  
    
    </div>
  )
}

export default Numbergame