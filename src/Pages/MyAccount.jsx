import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from '../Components/Head'
import Form from 'react-bootstrap/Form';
import Collapse from 'react-bootstrap/Collapse';
import Footer from '../Components/Footer';
import { BASE_URL } from '../Services/baseurl';

function MyAccount() {
  const [open, setOpen] = useState(false);
  const [useProfile, setUseProfile] = useState({
    profile: "", username: "", email: "", password: "", about: "", facebook: "", instegram: "", twitter: ""
  })
  const [existingImage, setExistingImage] = useState("")
  const [preview, setPreview] = useState("")
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"))
    setUseProfile({
      ...useProfile, profile: "", username: user.username, email: user.email, password: user.password, about: user.aboutme, facebook: user.facebook, instegram: user.instegram, twitter: user.twitter
    })
    setExistingImage(user.profile)

  }, [])
  useEffect(() => {
    if (useProfile.profile) {
      setPreview(URL.createObjectURL(useProfile.profile))
    } else {
      setPreview("")
    }
  }, [useProfile.profile])

  return (
    <>
      <Head account />
      <Row className='d-flex flex-row'>
        <Col lg={5} className='mt-5 ms-5 me-5 pe-4'>
          <h1 style={{ color: 'pink', fontWeight: '400' }} className='mb-5'>Update Youre Account</h1>
          <div className='d-flex flex-column card shadow w-100 ms-3 p-3' >
            <h3 style={{ fontFamily: 'serif' }} className='mb-3 '>Profile Picture</h3>
            <label>
              <input type="file" style={{ display: 'none' }} o onChange={e => setUseProfile({ ...useProfile, profile: e.target.files[0] })} />
              {existingImage !== "" ?
                <img width={'200px'} className='fluid mt-5 ms-5' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="upload profile" /> :
                <img width={'200px'} className='fluid mt-5 ms-5' src={preview ? preview : `"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s"`} alt="upload profile" />}
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

              <button onClick={() => setOpen(!open)} className='btn btn-success me-5'>More</button>
              {/*  */}
              <Collapse in={open}>
                <div id="example-collapse-text">
                  <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold'>About Me</Form.Label>
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
                  <div className='d-flex justify-content-center alighn-items-center mt-5'><button className='btn btn-success w-50'>Update</button></div>

                </div>
              </Collapse>


            </Form>

          </div>
        </Col>
        <Col lg={1}></Col>
        <Col lg={3} className='ms-5 mt-5'>
          <div style={{ width: '400px', height: '3px', backgroundColor: 'black' }}></div>
          <h2 className='text-center mt-3 ms-5 fw-bold'>About Me</h2>
          <div style={{ width: '400px', height: '3px', backgroundColor: 'black' }}></div>
          {existingImage !== "" ?
            <img width={'200px'} className='fluid mt-5 ms-5' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="" /> :
            <img width={'200px'} className='fluid mt-5 ms-5' src={preview ? preview : `"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s"`} alt="" />}
          <p className='mt-4 ms-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis mollitia asperiores quibusdam excepturi repellat nisi atque sit praesentium ex eligendi provident exercitationem vero, maxime veritatis. Eaque, quo! Quaerat, tempora.</p>
          {/* <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <h2 className='text-center mt-3 ms-5 fw-bold'>Catagories</h2>
          <div style={{ width: '450px', height: '3px', backgroundColor: 'black' }}></div>
          <ul style={{ width: '30px' }} className='d-flex mt-5'>
            <li style={{ textDecoration: 'none' }} className='m-2 fw-bolder'>food</li>
          </ul> */}
          <div style={{ width: '400px', height: '3px', backgroundColor: 'black' }}></div>
          <h2 className='text-center mt-3 ms-5 fw-bold'>FOLLOW ME</h2>
          <div style={{ width: '400px', height: '3px', backgroundColor: 'black' }}></div>
          <div className='d-flex flex-row mt-5 justify-content-around alighn-items-center'>
            <i style={{ fontSize: '30px' }} className="fa-brands fa-facebook-f"></i>
            <i style={{ fontSize: '30px' }} className="fa-brands fa-twitter"></i>
            <i style={{ fontSize: '30px' }} className="fa-brands fa-instagram"></i>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default MyAccount

