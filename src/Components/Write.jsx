import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBlogAPI, deleteblogAPI, userBLogAPI } from '../Services/allAPI';
import Head from './Head';
import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../Services/baseurl';
import Edit from './Edit';
import { shareDarkLightContext } from '../Context/ContextShare';



function Write() {
  const {isDarkMode, setIsDarkMode} = useContext(shareDarkLightContext)
  const [userBlogs, setUserBlogs] = useState([])
  const [token, setToken] = useState("")
  const [blogDetails, setBlogDetails] = useState({
    title: "", overview: "", category: "", blogImage: ""
  })
  const [preview, setPreview] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setBlogDetails({ title: "", overview: "", category: "", blogImage: "" })
    setPreview("")

  }
  const handleShow = () => setShow(true);
  console.log(blogDetails);
  useEffect(() => {
    if (blogDetails.blogImage) {
      setPreview(URL.createObjectURL(blogDetails.blogImage))
    }

  }, [blogDetails.blogImage])

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    } else {
      setToken("")
    }
  }, [])

  const handleADD = async (e) => {
    e.preventDefault()
    const { title, overview, category, blogImage } = blogDetails
    if (!title || !overview || !category || !blogImage) {
      toast.info("Please fill the form completely")
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("overview", overview)
      reqBody.append("category", category)
      reqBody.append("blogImage", blogImage)

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addBlogAPI(reqBody, reqHeader)
        if (result.status === 200) {
          console.log(result.data);
          handleClose()
          toast.success("blog added")

        } else {
          toast.warning(result.response.data);
          console.log(result);
        }
      }



    }

  }

  const getUserBlogs = async () => {

    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json", "Authorization": `Bearer ${token}`
      }
      const result = await userBLogAPI(reqHeader)
      if (result.status === 200) {
        setUserBlogs(result.data)
      } else {
        console.log(result);
        toast.warning(result.response.data)
      }
    }
  }
  useEffect(()=>{
    
getUserBlogs()
  },[handleADD])

  const handleDelete = async (id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `Bearer ${token}`
    }
    // api call
    const result = await deleteblogAPI(id,reqHeader)
    console.log(result);
    if(result.status===200){
      toast.success(`Blog Deleted`)
      getUserBlogs()
    }else{
      console.log(result);
      toast.error(result.response.data)
    }
  }
  return (
    <div className={isDarkMode?'dark-mode':'light-mode'}>
      <Head write/>

      <div className='d-flex flex-column justify-content-center alighn-items-center w-100 p-5'>
        <h1 className='fw-bold ms-3 mt-5'>Add Youre Blog</h1>
        <button onClick={handleShow} className='btn btn-success w-25'>ADD </button>
      </div>
      <Row>
        <Col lg={10} className='ms-5 mt-5 '>
          <div className='card shadow p-3 m-3 ms-5'>

            <h2 className='m-5'>MY BLOGs</h2>
            <table className=''>
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
               {userBlogs?.length>0? userBlogs.map((userBlog,index)=>(
                <tr className='list shadow '>
                  <td className='p-3'>{index+1}</td>
                  <td className='p-3'>{userBlog.title}</td>
                  <td className='p-3'><img width={'100px'} height={'100px'} className='img-fluid' src={userBlog?`${BASE_URL}/uploads/${userBlog.blogImage}`:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s"}
                   alt="" /></td>
                 <Edit userBlog={userBlog}/>
                  <td className='p-3'><button onClick={()=>handleDelete(userBlog._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
                </tr>
               )) : null
               }

              </tbody>

            </table>

          </div>
        </Col>
      </Row>

      <Modal style={{ width: '' }} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD BLOG</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <label>
              <input type="file" style={{ display: 'none' }} onChange={e => setBlogDetails({ ...blogDetails, blogImage: e.target.files[0] })} />
              <img className='img-fluid' height={'300px'} width={'300px'} src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s"} alt="" />
            </label>
            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">

              <Form.Control value={blogDetails.title} onChange={e => setBlogDetails({ ...blogDetails, title: e.target.value })}
                type="text"
                placeholder="Enter Title"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Overview</Form.Label>
              <Form.Control as="textarea" rows={3} value={blogDetails.overview} onChange={e => setBlogDetails({ ...blogDetails, overview: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">

              <Form.Control value={blogDetails.category} onChange={e => setBlogDetails({ ...blogDetails, category: e.target.value })}
                type="text"
                placeholder="Enter Category"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleADD}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right"
        autoClose={1000} theme="colored" />
      <Footer />
      <ToastContainer position="top-right"
        autoClose={1000} theme="colored" />
    </div>
  )
}

export default Write