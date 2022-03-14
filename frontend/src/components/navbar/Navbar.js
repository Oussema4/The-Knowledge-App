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
   <div className='arround'>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Container>
   <Navbar.Brand  as={Link} to="/"><p  className='p_knowledge' style={{fontSize:"25px"}}>THE KN<img  style={{width:"30px"}} src="icon_ball.png" alt="error"></img>WLEDGE</p></Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="me-auto">
     <Nav.Link as={Link} to="/" style={{fontSize:"19px"}}>Home</Nav.Link>
      <Nav.Link as={Link} to="/help" style={{fontSize:"19px"}}>Help</Nav.Link>

      <Nav>
       
    
       <NavDropdown    style={{fontSize:"19px"}} title="Games" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link}  to="/quiz"  style={{textDecoration: "none",color:"black" }} >Quiz</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/number" style={{textDecoration: "none",color:"black" }}> Guess The Number</NavDropdown.Item>

      

        
      </NavDropdown></Nav>
    
{user.role==1?
      <Nav>
       
    
       <NavDropdown    style={{fontSize:"19px"}} title="Admin" id="collasible-nav-dropdown">
       <NavDropdown.Item as={Link} to="/add_edit" style={{textDecoration: "none",color:"black" }}>Add</NavDropdown.Item>

        <NavDropdown.Item as={Link} to="/questions" style={{textDecoration: "none",color:"black" }}>Questions List</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/users_list" style={{textDecoration: "none",color:"black" }}>Users List</NavDropdown.Item>

      

        
      </NavDropdown></Nav>:null
}
    
      
     </Nav>
     {(localStorage.getItem("token"))?
     <Nav>
       
       <img style={{width:"50px",height:"50px",borderRadius:"50px"}} src={user.imageUrl?`uploads/${user.imageUrl}`:"defaultPdp.jpg"}></img>
       <NavDropdown    style={{fontSize:"19px"}}  title={user.name} id="collasible-nav-dropdown">

        <NavDropdown.Item as={Link} to="/profile">Edit Profile </NavDropdown.Item>
        
        
        <NavDropdown.Divider />
        <NavDropdown.Item  onClick={()=>dispatch(logout())} as={Link} to="/Login">Logout</NavDropdown.Item>
      </NavDropdown>
      </Nav>
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