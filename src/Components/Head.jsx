import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Head() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
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
            <Nav.Link href="#action1">HOME</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            
            <Nav.Link href="#" >
            CONTACT
            </Nav.Link>
            <Nav.Link href="#action2">WRITE</Nav.Link>

          </Nav>
          <Nav.Link href="#action2" style={{margin:'20px'}}>REGISTER</Nav.Link>

          <Nav.Link href="#action2">LOGOUT</Nav.Link>
          <img
              alt=""
              src="https://cdn.icon-icons.com/icons2/1571/PNG/512/483490-blogger-google-logo-media-network-social_107708.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default Head