import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  getcurrent, logout } from '../../redux/actions/authAction'
import "./Profile.css"
function Profile() {
    const user=useSelector(state=>state.authReducer.user)
const dispatch=useDispatch()

const [file,setFile]=useState(null)



const handelEdit=async()=>{
  const token=localStorage.getItem("token")
  const config={
  
      headers:{
  
          "authorization":token
      }
  }
  
  const data= new FormData
  data.append("Pimage",file)
  
      try {
          
         await axios.put("/profile",data,config)
      dispatch(getcurrent())
      } catch (error) {
          console.log(error)
  
          
      }
  }
    
  return (


    <div>
    
     
    

     <div className="overlay text-center">
        <div id="profile-panel" className="panel panel-default">
          <div className="panel-heading">
            <h3 style={{color:"white"}}>Profile Settings</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-3">
              <img style={{width:"107px",height:"130px"}} src={user.imageUrl?`uploads/${user.imageUrl}`:"defaultPdp.jpg"}/>
            </div>
            <div className="col-md-9 main-user-info text-left">
              <ul className="list-group">
                <li className="list-group-item">
                 User: {user.name}
                </li>
                <li className="list-group-item">
         Email: {user.email}
                </li>
               
              </ul>
            </div>
          </div>
         
          <div className="privacy-item">
            
            <h5 style={{color:"white"}} className="text-left">Change your Profile photo</h5>
          </div>
          <br/>
          <div className="item">
            <div className="label">
              <br/>
            <input type="file"  style={{color:"white"}} onChange={(e)=>setFile(e.target.files[0])}/>  
           </div>
          </div>
          <br/>
          <hr />
          <br/>
          <div className="col-md-6" />
          <div className="panel-footer">
            <button className="btn btn-success btn-block" onClick={handelEdit}>Save changes</button>
            <br/>
            <br/>
            <button className="btn btn-danger btn-block" onClick={()=>dispatch(logout())}>Logout</button>
            <div className="item">
            
          </div>
          </div>
          
        </div>
        
      </div>
     

    

      
      
      
      
      </div>
  )
}

export default Profile