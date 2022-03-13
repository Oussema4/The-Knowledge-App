import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AdminRoute({children}) {

    const token=localStorage.getItem("token")
    const user=useSelector(state=>state.authReducer.user)
      return (<div>

{token&&user.role==1?children:<Navigate to="/"></Navigate>}

  </div>
  )
}

export default AdminRoute