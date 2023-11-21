import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from '../Components/Head'

function MyAccount() {
  return (
    <>
    <Head/>
      <Row className='d-flex flex-row'>
        <Col lg={7} className='mt-5 ms-5 me-5 pe-4'>
         <h3>Update Youre Account</h3>
         
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