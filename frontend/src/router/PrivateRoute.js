import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {

    const token=localStorage.getItem("token")
  return (<div>

{token?children:<Navigate to="/Login"></Navigate>}

  </div>
  )
}

export default PrivateRoute