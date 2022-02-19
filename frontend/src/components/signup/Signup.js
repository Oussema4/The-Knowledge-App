import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearerrors, signup } from '../../redux/actions/authAction'
function Signup() {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [name,setName]=useState("")
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{e.preventDefault()}
  const navigate=useNavigate()


  
  const errors=useSelector(state=>state.authReducer.errors)
  useEffect(() => { setTimeout(() => { { errors && errors.map((el) =>
 alert(el.msg)); } 
    if (errors) { dispatch(clearerrors()); } }, 1000); }, [errors]);
  return (
    <div className="form-wrap">
    <div className="tabs">
      <h3 className="signup-tab">Sign Up</h3>
    
    </div>{/*.tabs*/}
    <div className="tabs-content">
      
      <div id="signup-tab-content" className="active">
        <form className="signup-form" onSubmit={handleSubmit}>
        <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Username" onChange={(e)=>setName(e.target.value)} value={name} />
        
         <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
         <button  className="button"  onClick={(e)=>{handleSubmit(e);dispatch(signup({email,password,name},navigate))}}>ENVOYER</button>
        
        </form>{/*.login-form*/}
        <div className="help-text">
          <p>By signing up, you agree to our</p>
          <p><Link to="/termsOfservices">Terms of service</Link></p>
        </div>{/*.help-text*/}
      </div>{/*.signup-tab-content*/}
      
    </div>{/*.tabs-content*/}
  </div>
  )
}

export default Signup