import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBlogAPI } from '../Services/allAPI';

function Write() {
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
        } else {
          console.log(result.response.data);
          console.log(result);
        }
      }


     
    }

  }
  return (
    <>
      <button onClick={handleShow} className='btn btn-success'>ADD </button>
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
    </>
  )
}

export default Write