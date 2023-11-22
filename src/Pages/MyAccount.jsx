import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from '../Components/Head'
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';

function MyAccount() {
  return (
    <>
      <Head />
      <Row className='d-flex flex-row'>
        <Col lg={7} className='mt-5 ms-5 me-5 pe-4'>
          <h1 style={{color:'pink',fontWeight:'400'}} className='mb-5'>Update Youre Account</h1>
          <div className='d-flex flex-column'>
            <h3 style={{fontFamily:'serif'}} className='mb-3 '>Profile Picture</h3>
            <label>
              <input type="file" style={{ display: 'none' }} o />
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s" alt="" />
            </label>
            <Form className='mt-5'>
            <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>User Name</Form.Label>
                <Form.Control type="text" placeholder='Enter User Name' />
                </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Email address</Form.Label>
                <Form.Control type="email" placeholder='Enter Email' />
                </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bold'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Catogeries</Form.Label>
                <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Facebook Link</Form.Label>
                <Form.Control type="text" />
                               </Form.Group>
                               <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Instegram Link</Form.Label>
                <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Twitter Link</Form.Label>
                <Form.Control type="text" />
                </Form.Group>
            </Form>
<div className='d-flex justify-content-center alighn-items-center mt-5'><button className='btn btn-success w-50'>Update</button></div>
          </div>
        </Col>
        <Col lg={3} className='ms-5 mt-5'>
          <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <h2 className='text-center mt-3 ms-5 fw-bold'>About Me</h2>
          <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <img width={'300px'} className='fluid mt-5 ms-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUW6DyWPI5VTH1qtbszj8wsV03lEVwZxk1Jw&usqp=CAU" alt="" />
          <p className='mt-4 ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis mollitia asperiores quibusdam excepturi repellat nisi atque sit praesentium ex eligendi provident exercitationem vero, maxime veritatis. Eaque, quo! Quaerat, tempora.</p>
          <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <h2 className='text-center mt-3 ms-5 fw-bold'>Catagories</h2>
          <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <ul style={{ width: '30px' }} className='d-flex mt-5'>
            <li style={{ textDecoration: 'none' }} className='m-2 fw-bolder'>food</li>
          </ul>
          <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <h2 className='text-center mt-3 ms-5 fw-bold'>FOLLOW ME</h2>
          <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <div className='d-flex flex-row mt-5 justify-content-around alighn-items-center'>
            <i style={{ fontSize: '30px' }} className="fa-brands fa-facebook-f"></i>
            <i style={{ fontSize: '30px' }} className="fa-brands fa-twitter"></i>
            <i style={{ fontSize: '30px' }} className="fa-brands fa-instagram"></i>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default MyAccount