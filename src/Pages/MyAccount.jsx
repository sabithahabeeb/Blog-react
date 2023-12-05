import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Head from '../Components/Head'
import Form from 'react-bootstrap/Form';
import Footer from '../Components/Footer';
import { BASE_URL } from '../Services/baseurl';
import { editUserAPI } from '../Services/allAPI';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const navigateURL= useNavigate()
  const [open, setOpen] = useState(false);
  const [useProfile, setUseProfile] = useState({
    profile: "", username: "", email: "", password: "", aboutme: "", facebook: "", instegram: "", twitter: ""
  })
  const [existingImage, setExistingImage] = useState("")
  const [preview, setPreview] = useState("")
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("existingUser"))
    setUseProfile({
      ...useProfile, profile: "", username: user.username, email: user.email, password: user.password, aboutme: user.aboutme, facebook: user.facebook, instegram: user.instegram, twitter: user.twitter
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

  const handleProfileUpdate = async(e)=>{
    e.preventDefault()
    const {profile,username,email,password,aboutme,facebook,instegram,twitter} = useProfile
    if(!username || !aboutme || !facebook || !instegram){
      alert("Please fill the form completely")
    }else{
      const  reqBody = new FormData()
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("aboutme",aboutme)
      reqBody.append("facebook",facebook)
      reqBody.append("instegram",instegram)
      reqBody.append("twitter",twitter)
      preview?reqBody.append("profileImage",profile):reqBody.append("profileImage",existingImage)
      const token = sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {
          "Content-Type": "multipart/form-data","Authorization": `Bearer ${token}`
        }
        // api call
        const result = await editUserAPI(reqBody,reqHeader)
        if(result.status===200){
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          navigateURL('/dashboard')
          alert("updated succesfully")
          
        }else{
          console.log(result);
          console.log(result.response.data);
        }
      }else{
        const reqHeader = {
          "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        const result = await editUserAPI(reqBody,reqHeader)
        if(result.status===200){
          sessionStorage.setItem("existingUser",JSON.stringify(result.data))
          navigateURL('/dashboard')
          alert("updated succesfully")
        }else{
          console.log(result);
          console.log(result.response.data);

        }
      }
    }

  }

  return (
    <>
      <Head account />
      <Row className='d-flex flex-row justify-content-center align-items-center'>
        <Col lg={5} className='mt-5 ms-5 me-5 pe-4'>
          <h1 style={{ color: 'orange', fontWeight: '400' }} className='mb-5 mt-5 fw-bold'>Update Youre Account</h1>
          <div className='d-flex flex-column card shadow w-100 ms-3 p-3' >
            <h3 style={{ fontFamily: 'serif' }} className='mb-3 '>Profile Picture</h3>
            <label>
              <input type="file" style={{ display: 'none' }} onChange={e => setUseProfile({ ...useProfile, profile: e.target.files[0] })} />
              {existingImage !== "" ?
                <img width={'150px'} className='fluid mt-5 ms-5' src={preview ? preview : `${BASE_URL}/uploads/${existingImage}`} alt="upload profile" /> :
                <img width={'200px'} className='fluid mt-5 ms-5' src={preview ? preview : `"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s"`} alt="upload profile" />}
            </label>
            <Form className='mt-5'>
              <Form.Group className="mb-3" >
                <Form.Label className='fw-bold'>User Name</Form.Label>
                <Form.Control type="text" placeholder='Enter User Name'  value={useProfile.username} onChange={e=>setUseProfile({...useProfile,username:e.target.value})}/>
              </Form.Group>
              
                <div id="example-collapse-text">
                  <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold'>About Me</Form.Label>
                    <Form.Control type="text"  value={useProfile.aboutme} onChange={e=>setUseProfile({...useProfile,aboutme:e.target.value})}/>
                  </Form.Group>
                  <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold'>Facebook Link</Form.Label>
                    <Form.Control type="text" value={useProfile.facebook} onChange={e=>setUseProfile({...useProfile,facebook:e.target.value})}/>
                  </Form.Group>
                  <Form.Group className="mb-3" >
                    <Form.Label className='fw-bold'>Instegram Link</Form.Label>
                    <Form.Control type="text" value={useProfile.instegram} onChange={e=>setUseProfile({...useProfile,instegram:e.target.value})}/>
                  </Form.Group>
                  
                  <div className='d-flex justify-content-center alighn-items-center mt-5'><button onClick={handleProfileUpdate} className='btn btn-success w-50'>Update</button></div>

                </div>
           


            </Form>

          </div>
        </Col>
        <Col lg={1}></Col>
        
      </Row>
      <Footer />
    </>
  )
}

export default MyAccount

