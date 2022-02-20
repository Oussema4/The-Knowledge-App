import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "./Profile.css"
function Profile() {
    const user=useSelector(state=>state.authReducer.user)

    
    //const ques1=[user.name,user.email,user.password]
    
    //var ran=Math.floor(Math.random()* ques1.length);

  return (


    <div>
    
     
    

     <div className="overlay text-center">
        <div id="profile-panel" className="panel panel-default">
          {/* Default panel contents */}
          <div className="panel-heading">
            <h3>Profile Settings</h3>
          </div>
          <div className="panel-body">
            <div className="col-md-3">
              <img style={{width:"110px"}} src="https://gomycodelearndev.blob.core.windows.net/profiles/606b5710-79cd-46e0-84ee-daf7af0803e4-132820907731410763.jpg"/>
            </div>
            <div className="col-md-9 main-user-info text-left">
              <ul className="list-group">
                <li className="list-group-item">
                  {user.name}
                </li>
                <li className="list-group-item">
                  {user.email}
                </li>
                <li className="list-group-item">
                  bio
                </li>
              </ul>
            </div>
          </div>
          <div className="item">
            <div className="col-md-10 label">
              <p>Send Me Newsletters</p>
            </div>
            <div className="col-md-2">
              <label className="switch"><input type="checkbox" />
                <div className="slider" />
              </label>
            </div>
          </div>
          <div className="item">
            <div className="col-md-10 label">
              <p>Other users can add me as a friend</p>
            </div>
            <div className="col-md-2">
              <label className="switch"><input type="checkbox" />
                <div className="slider" />
              </label>
            </div>
          </div>
          
          <hr />
          <div className="privacy-item">
            <h4 className="text-left">Privacy</h4>
          </div>
          <div className="item">
            <div className="col-md-10 label">
              <p>
                <a href="https://www.plinga.com/corporate/terms-of-service">Agree with our terms of service and our privacy policy apply to this game.
                </a>
              </p>
            </div>
            <div className="col-md-2">
              <label className="switch"><input type="checkbox" />
                <div className="slider" />
              </label>
            </div>
          </div>
          <div className="item">
            <div className="label">
              <p><a href="https://www.plinga.com/corporate/terms-of-service" target="_blank">Download your profile data <i className="text-info fas fa-cloud-download-alt" /></a></p>
            </div>
          </div>
          <div className="item">
            <div className="label">
              <p><a className="text-danger" href="https://www.plinga.com/corporate/terms-of-service" target="_blank">Delete your profile</a></p>
            </div>
          </div>
          <div className="col-md-6" />
          <div className="panel-footer">
            <button className="btn btn-success btn-block">Save changes</button>
            <button className="btn btn-danger btn-block">Logout</button>
          </div>
        </div>
      </div>
     

    

      
      
      
      
      </div>
  )
}

export default Profile