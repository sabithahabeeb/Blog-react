import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from '../Components/Head'
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form';
import Write from '../Components/Write';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const navigateURL = useNavigate()
  const navigatewrite = ()=>{
    navigateURL('/write')
  }
  return (
    <>
      <Head />
      <Row className='d-flex flex-row'>
        <Col lg={5} className='mt-5 ms-5 me-5 pe-4'>
          <h1 style={{color:'pink',fontWeight:'400'}} className='mb-5'>Update Youre Account</h1>
          <div className='d-flex flex-column card shadow w-100 ms-3 p-3' >
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
              
              {/* <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>Catogeries</Form.Label>
                <Form.Control type="text" />
                </Form.Group> */}
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
        <Col></Col>
        {/* <Col lg={4} className='ms-5 mt-5 '>
         <h1>Add Youre Blog</h1>
         <Write/>
<div className='card shadow p-3 m-3'>
  
           <h2 className='m-5'>MY BLOGs</h2>
           <table className=' '>
           <thead>
            <tr>
              <th className='p-3'>#</th>
              <th className='p-3'>Title</th>
              <th className='p-3'>image</th>
              <th className='p-3'>edit</th>
             <th className='p-3'>Delete</th>
            </tr>
  
          </thead>
          <tbody>
           <tr>
              <td className='p-3'>1</td>
              <td className='p-3'>dsfd</td>
              <td className='p-3'><img width={'100px'} height={'100px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s" alt="" /></td>
              <td className='p-3'><button className="btn"><i className="fa-solid fa-pen-to-square "></i></button></td>
              <td className='p-3'><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
           </tr>
           <tr>
              <td className='p-3'>1</td>
              <td className='p-3'>dsfd</td>
              <td className='p-3'><img width={'100px'} height={'100px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s" alt="" /></td>
              <td className='p-3'><button className="btn"><i className="fa-solid fa-pen-to-square "></i></button></td>
              <td className='p-3'><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
           </tr>
           <tr>
              <td className='p-3'>1</td>
              <td className='p-3'>dsfd</td>
              <td className='p-3'><img width={'100px'} height={'100px'} className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s" alt="" /></td>
              <td className='p-3'><button className="btn"><i className="fa-solid fa-pen-to-square "></i></button></td>
              <td className='p-3'><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
           </tr>
          </tbody>
  
           </table>
      
</div>
        </Col> */}
      </Row>
    </>
  )
}

export default MyAccount

