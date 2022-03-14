import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { useDispatch,useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {   getAllNumbers, getOneNumber } from '../../redux/actions/gameAction'
import "./number.css"
function Numbergame() {


  const numbers=useSelector(state=>state.gameReducer.allnumbers)

  const onequestion=useSelector(state=>state.gameReducer.onequestion)

  const [screen,setScreen]=useState("")
  const [currentIndex,setCurrentIndex]=useState(1)
  const [score,setScore]=useState(0)
  const [tonext,setTonext]=useState(1)
  const [fifty,setFifty]=useState(true)


  const navigate=useNavigate()

  useEffect(()=>{

    dispatch(getOneNumber(1))
    dispatch (getAllNumbers())
          
        },[])
  const dispatch=useDispatch()

const goodJob=(e)=>{
  dispatch(getOneNumber(onequestion.index+1));
  setScreen("");
  e.preventDefault();
  setCurrentIndex(currentIndex+1)
  setScore(score+1)
  setFifty(true)

  setTonext(2)

}

const uCanDobetter=(e)=>{
  e.preventDefault();
  setScreen("")
  dispatch(getOneNumber(onequestion.index+1));
  setTonext(0)
  setCurrentIndex(currentIndex+1)
  setFifty(true)



}


  return (
    <div className='numbergame'>

      { score>onequestion.index-1?<img style={{  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop:"10px",
  height:"600px",
  width: "50%"}} src="https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif"/>: numbers.length<currentIndex && score>=currentIndex/2?<div className='cent'><h2>Congratulation</h2><h3>Your Score is {score}/{numbers.length}</h3><br/><Button onClick={()=>navigate("/")} variant="dark">Go home</Button></div>:numbers.length<currentIndex && score<currentIndex/2?<div className='cent'><h2>Hard Luck</h2><h3>Your Score is {score}/{numbers.length}</h3><br/><Button onClick={()=>navigate("/")} variant="dark">Go home</Button></div>:<Form>
    
   
    <h1 style={{textAlign:'center',fontSize:"300%",color:"black",paddingTop:"40px",paddingBottom:"80px",backgroundImage:"url(https://www.seekpng.com/png/full/375-3753368_background-image-for-title-unhitched-book-by-sunny.png)"}}>
      {onequestion.question}</h1> 


    
        
  
 
      <div style={{backgroundColor:'black',opacity:"70%",color:"white",marginLeft:"200px",borderRadius:"40px"}}className="game-details-container">
          <h1>Score : <span /> {score} <img  style={{width:"20px",paddingTop:"8px"}} src="icon_ball.png" alt="error"></img>  <span /></h1>
          <h1>Question : <span  /> {onequestion.index} <span /></h1>
         {fifty==false&&currentIndex%4==0?<><h6>Choices:</h6>
         <Button onClick={uCanDobetter}>{onequestion.choice1}</Button>
         <Button onClick={goodJob}>{onequestion.true_choice}</Button>
         <Button  onClick={uCanDobetter}>{onequestion.choice3}</Button>
         <Button  onClick={uCanDobetter}>{onequestion.choice2}</Button></>:fifty==false&&currentIndex%4==1?
         <><h6>Choices:</h6>
         <Button onClick={goodJob}>{onequestion.true_choice}</Button>
         <Button onClick={uCanDobetter}>{onequestion.choice1}</Button>
         <Button  onClick={uCanDobetter}>{onequestion.choice3}</Button>
         <Button  onClick={uCanDobetter}>{onequestion.choice2}</Button></>:fifty==false&&currentIndex%4==2?
          <><h6>Choices:</h6>
          <Button onClick={uCanDobetter}>{onequestion.choice1}</Button>
          <Button  onClick={uCanDobetter}>{onequestion.choice3}</Button>
          <Button onClick={goodJob}>{onequestion.true_choice}</Button>
          <Button  onClick={uCanDobetter}>{onequestion.choice2}</Button></>:fifty==false&&currentIndex%4==3?
           <><h6>Choices:</h6>
           <Button onClick={uCanDobetter}>{onequestion.choice1}</Button>
           <Button  onClick={uCanDobetter}>{onequestion.choice3}</Button>
           <Button  onClick={uCanDobetter}>{onequestion.choice2}</Button>
           <Button onClick={goodJob}>{onequestion.true_choice}</Button></>:null} 
        </div>
              
              
           
               <div id="calculator">
       {/* Screen and clear key */}
       <div className="top">
         <span className="clear" onClick={()=>setScreen("")}>C</span>
         <input placeholder='..'  className='screen' autoFocus value={screen} onChange={(e)=>setScreen(e.target.value)}/>
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
       {tonext==1?<Alert style={{textAlign:"center"}}  variant="warning">
<h5>We believe in you </h5> </Alert>

:tonext==0?<Alert style={{textAlign:"center"}} variant="danger">
<h5>you can do better</h5> </Alert>
:score%3==0?<Alert  style={{textAlign:"center"}} variant="dark">
<h5>Goku Can Help You</h5>
</Alert>
:<Alert style={{textAlign:"center"}} variant="success">
<h5>Good Job</h5>
</Alert>} 


     </div>
    
   
 
  
     {score%3==0&&score!=0?<><div onClick={()=>setFifty(false)} className="grad">
  
  <div className="container1">
    <div className="left">
    
    </div>
  </div>
  
  <div className="container2">
    <div className="goku">
      
    </div>
  </div>
  
</div></>:null}








   
 
</Form>}

    </div>
  )
}

export default Numbergame