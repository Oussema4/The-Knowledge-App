import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {  getNumberQuestions, getOneQuiz, getQuizQuestions } from '../../redux/actions/gameAction'

import  "./home.css"
function Home() {
const dispatch=useDispatch()
const navigate=useNavigate()

  return (
  


    
    
     <div >
       <h1  className='p_knowledge_home' style={{textAlign:"center"}}>WELCOME TO THE KN<img  style={{width:"40px"}} src="icon_ball.png" alt="error"></img>WLEDGE  WORLD</h1>
<div className="cards-list"  >
<Link to="/Learn">
<div className="card 4" >
         <div className="card_image">
           <img src="https://media.giphy.com/media/lPwZcFRMGOFPO/giphy.gif" />
         </div>

         <div className="card_title title-black">
           <p className='p_home_card'> Learn</p>
         </div>
         
       </div>
       </Link>

<Link to="/quiz">
       <div className="card 3" >
         <div className="card_image">
           <img src="https://media.giphy.com/media/tgWX6N4nHQjNC/giphy.gif" />
         </div>
        
         <div className="card_title title-black">
           <p className='p_home_card'>Quiz</p>
         </div>
         
       </div>
       </Link>
       <Link to="/number">
       <div className="card 4" >
         <div className="card_image">
           <img src="https://media.giphy.com/media/dJoJCypWihblC/giphy.gif" />
         </div>

         <div className="card_title title-black">
           <p className='p_home_card'>Number</p>
         </div>
         
       </div>
       </Link>

      
     </div>
 
      
      </div>


    
     
    
  )
}

export default Home