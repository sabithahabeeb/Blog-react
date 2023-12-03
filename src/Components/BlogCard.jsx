import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Services/baseurl';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Head from './Head';
import Footer from './Footer'
import { Col, Row } from 'react-bootstrap'

function BlogCard({blog}) {
  const [username, setUsername] = useState("")
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const date= ()=>{
    const showDate = new Date()
    const displayTodayDate = showDate.getDate()+'/'+showDate.getMonth()+'/'+showDate.getFullYear()
    return displayTodayDate
  }
  const navigateURL = useNavigate()

 

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  useEffect(()=>{
    if (sessionStorage.getItem("existingUser")) {
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <>
    
     
              <Card onClick={() => handleShow(true)}  style={{ width: '20rem',height:'350px'}} className='cards shadow mb-5  m-5 btn'>
           <Card.Img variant="top" height={'300px'} src={blog?`${BASE_URL}/uploads/${blog.blogImage}`:null} />
            <Card.Body>
              <Card.Title style={{color:'green'}}>{blog.title}</Card.Title>
              <p style={{color:'gray'}}>{date()}</p>
              <Card.Text>
                {blog?.overview.slice(0,45)}...
              </Card.Text>
              {/* <Link to={'/blogdetails'}>View</Link> */}
            </Card.Body>
          </Card>
     
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          {/* <Head/> */}
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body className='shdow'> <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col lg={7} className='mt-5 ms-5 me-5 pe-4 shadow mt-3 p-4'>
                    <img width={'80%'} height={'400px'} src={blog?`${BASE_URL}/uploads/${blog.blogImage}`:null} alt="" />
                    <h1 style={{ width: '900px',color:'green' }} className='fw-bold text-center mt-5 ms-10'>{blog.title}</h1>
                    <div style={{ color: 'gray', width: '900px' ,color:'red'}} className='d-flex flex-row justify-content-around alighn-items-between  mt-4'>
                        <p>Author : {username}</p>
                        <p>{date()}</p>
                    </div>
                    <div style={{ width: '700px' ,color:''}} className='mt-4'>
                        {blog.overview}
                    </div>
                </Col>
                
            </Row></Modal.Body>
            {/* <Footer/> */}
      </Modal>
     
    </>
  )
}

export default BlogCard