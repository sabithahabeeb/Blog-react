import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

function Head() {
  const [username,setUsername] = useState("")
  const navigateURL = useNavigate()
  const navigate = ()=>{
    navigateURL('/myaccount')
  }
 useEffect(()=>{
if(sessionStorage.getItem("existingUser")){
setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
}
 },[])
  return (
    <>
        <Navbar  expand="lg" className="bg-body-tertiary  ">
      <Container fluid>
      <img
              alt=""
              src="https://cdn.icon-icons.com/icons2/1571/PNG/512/483490-blogger-google-logo-media-network-social_107708.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/dashboard">HOME</Nav.Link>
            {/* <Nav.Link  href="/write">ABOUT</Nav.Link>
            
            <Nav.Link href="#" >
            CONTACT
            </Nav.Link> */}
            <Nav.Link  href="/write">WRITE</Nav.Link>

          </Nav>
         <div onClick={navigate} className='d-flex flex-row justify-content-center'>
            <img
                alt=""
                src="https://cdn.icon-icons.com/icons2/1571/PNG/512/483490-blogger-google-logo-media-network-social_107708.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />{' '}
            <Nav.Link className='fw-bold text-warning' href="#action2" style={{margin:'20px',fontSize:'20px'}}>{username}</Nav.Link>
         </div>

          <Nav.Link href="#action2">LOGOUT</Nav.Link>
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default Head