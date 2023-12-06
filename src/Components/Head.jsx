import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Services/baseurl';
import { shareDarkLightContext } from '../Context/ContextShare';

function Head({ account, write }) {
  const {isDarkMode, setIsDarkMode} = useContext(shareDarkLightContext)

  const [username, setUsername] = useState("")
  const [userimage, settUserimage] = useState("")
  const navigateURL = useNavigate()
  const navigate = () => {
    navigateURL('/myaccount')
  }
  useEffect(() => {

    if (sessionStorage.getItem("existingUser")) {
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)

      const image = JSON.parse(sessionStorage.getItem('existingUser')).profile
      settUserimage(image)
    }
  }, [])


  const handleLogout = () => {
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    navigateURL('/')
  }

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <Navbar style={{ zIndex: '1' }} expand="lg" className="bg-body-tertiary position-fixed w-100 ">
        <Container fluid>
          <img
            alt=""
            src="https://cdn.icon-icons.com/icons2/1571/PNG/512/483490-blogger-google-logo-media-network-social_107708.png"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{' '}
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/dashboard" style={{ fontSize: '20px' }} className='fw-bolder text-success me-3 ms-3' >HOME</Nav.Link>
            {!write && <Nav.Link href="/write" style={{ fontSize: '20px' }} className='fw-bolder text-success me-3 ms-3'>WRITE</Nav.Link>}

          </Nav>
          <button style={{border:'none',fontSize:'20px',background:'transperent'}} className='m-2 me-5' onClick={toggleMode}>
            {isDarkMode ? <i className="fa-solid fa-sun  fa-2xl " style={{ color: 'white' }}></i> : <i className="fa-solid fa-moon  fa-xl " style={{ color: 'black' }}></i>}
          </button>
          {!account && <div onClick={navigate} className='d-flex flex-row justify-content-center '>
            <img
              alt=""
              src={`${BASE_URL}/uploads/${userimage}`}
              width="50"
              height="50"
              className="d-inline-block align-top mt-3"
            />{' '}
            <Nav.Link className='fw-bold text-warning' href="#action2" style={{ margin: '20px', fontSize: '25px' }}>{username}</Nav.Link>
          </div>}

          <button onClick={handleLogout} style={{ textDecoration: 'none', color: 'orange' }} className='btn btn-link fw-bolder fs-5'>LOGOUT</button>


        </Container>
      </Navbar>

    </>
  )
}

export default Head