import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Container,Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"

import  "./home.css"
import { useSelector } from 'react-redux'
function Home() {
  

  return (
    <div>
<div className='inp'>
       <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-dark ">Search</Button>
      </Form>
      </div>

     <h1>HOME</h1> 
    
      </div>
    
  )
}

export default Home