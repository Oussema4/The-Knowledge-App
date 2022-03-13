import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/authAction'
import UsersCard from './UsersCard'

function UsersList() {

const dispatch=useDispatch()
const users=useSelector(state=>state.authReducer.users)

useEffect(()=>{

dispatch(getAllUsers())

})

  return (
    <div className='userlist'>


{users.map(el=><UsersCard el={el}></UsersCard>)}


    </div>
  )
}

export default UsersList