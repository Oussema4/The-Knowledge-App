import React from 'react'
import "./navbar.css"
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/authAction'


function Navbare() {

  const user=useSelector(state=>state.authReducer.user)
const dispatch=useDispatch()
  return (
   <div>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Container>
   <Navbar.Brand  as={Link} to="/"><p style={{fontSize:"25px"}}>THE KN<img  style={{width:"30px"}} src="icon_ball.png" alt="error"></img>WLEDGE</p></Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto">
     <Nav.Link as={Link} to="/" style={{fontSize:"18px"}}>Home</Nav.Link>
      <Nav.Link as={Link} to="/" style={{fontSize:"18px"}}>Learn</Nav.Link>
      <Nav.Link as={Link} to="/" style={{fontSize:"18px"}}>Play</Nav.Link>
      
     </Nav>
     {(localStorage.getItem("token"))?
     <Nav>
       
    
       <NavDropdown  as={Link} to="/profile"  style={{fontSize:"19px"}} title={user.name} id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Edit Profile </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
        
        <NavDropdown.Divider />
        <NavDropdown.Item  onClick={()=>dispatch(logout())}><Link to="/Login">Logout</Link></NavDropdown.Item>
      </NavDropdown></Nav>
       :
     <Nav>
       
     <Nav.Link as={Link} to="/Login" style={{fontSize:"18px"}}>  Login </Nav.Link>
       <Nav.Link as={Link} to="/Signup" style={{fontSize:"18px"}}>Sign Up</Nav.Link>
       
      
     </Nav>
  }
     
   </Navbar.Collapse>
   </Container>
 </Navbar>


  

     
   </div>
  
  )
}

export default Navbare