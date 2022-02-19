import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const user=useSelector(state=>state.authReducer.user)
  return (
    <div><h2>{ user.name}</h2></div>
  )
}

export default Profile