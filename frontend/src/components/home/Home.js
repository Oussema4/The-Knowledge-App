import React from 'react'
import { Link } from 'react-router-dom'

import  "./home.css"
function Home() {

  return (
  


    
    
     <div className='bg' >
       <h1  className='p_knowledge_home' style={{textAlign:"center"}}>WELCOME TO THE KN<img  style={{width:"40px"}} src="icon_ball.png" alt="error"></img>WLEDGE  WORLD</h1>
<div className="cards-list"  >
<Link to="/Learn">
<div className="carta 4" >
         <div className="carta_image">
           <img src="giphy.webp" />
         </div>

         <div className="carta_title title-black">
           <p className='p_home_card'> Learn</p>
         </div>
         
       </div>
       </Link>

<Link to="/quiz">
       <div className="carta 3" >
         <div className="carta_image">
           <img src="giphy2.webp" />
         </div>
        
         <div className="carta_title title-black">
           <p className='p_home_card'>Quiz</p>
         </div>
         
       </div>
       </Link>
       <Link to="/number">
       <div className="carta 4" >
         <div className="carta_image">
           <img src="giphy3.webp" />
         </div>

         <div className="carta_title title-black">
           <p className='p_home_card'>Number</p>
         </div>
         
       </div>
       </Link>

      
     </div>
 
      
      </div>


    
     
    
  )
}

export default Home