import React from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/actions/authAction'

function UsersCard({el}) {

const dispatch=useDispatch()

const handleDelete=()=>{
    if(window.confirm(`Do you want delete ${el.name}`)){
    dispatch(deleteUser(el._id))}
  }
  return (


    <div className='usercard'>
        <Card style={{ width: '18rem' }}>
    <Card.Img  style={{width:"auto",height:"300px"}} variant="top" src={el.imageUrl?`uploads/${el.imageUrl}`:"defaultPdp.jpg"} />
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        {el.email}
        <br/>
        
        {el.role==0?<Badge pill bg="warning" text="dark">User</Badge>:<Badge pill bg="success" >Admin</Badge>}
  
      </Card.Text>
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default UsersCard