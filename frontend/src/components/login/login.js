import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearerrors, signin } from '../../redux/actions/authAction'

import "./login.css"

function Login() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{e.preventDefault()}
  const navigate=useNavigate()
  const errors=useSelector(state=>state.authReducer.errors)
  useEffect(() => { setTimeout(() => { { errors && errors.map((el) => alert(el.msg))} 
    if (errors) { dispatch(clearerrors()); } }, 1000); }, [errors]);
  return (
    <div className="form-wrap">
    <div className="tabs">
      <h3 className="signup-tab">Login</h3>
    
    </div>{/*.tabs*/}
    <div className="tabs-content">
      <div id="signup-tab-content" className="active">
        <form className="signup-form" action method="post">
          
        <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button  className="button"  onClick={(e)=>{handleSubmit(e);dispatch(signin({email,password},navigate))}}>ENVOYER</button>
        </form>{/*.login-form*/}
        <div className="help-text">
        <p>Forgot password?<Link to="/n">Reset password</Link></p>
          <p>if you don't have an account <Link to="/signup">Sign Up</Link></p>
         
        </div>{/*.help-text*/}
      </div>{/*.signup-tab-content*/}
      
    </div>{/*.tabs-content*/}
  </div>
  
  )
  
}

export default Login