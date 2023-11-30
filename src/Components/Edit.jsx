import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { BASE_URL } from '../Services/baseurl';
import { editBlogAPI } from '../Services/allAPI';



function Edit({ userBlog }) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setBlogDetails({ id: userBlog._id, title: userBlog.title, overview: userBlog.overview, category: userBlog.category, blogImage: "" })
        setPreview("")
    }

    const handleShow = () => setShow(true);
    const [blogDetails, setBlogDetails] = useState({
        id: userBlog._id, title: userBlog.title, overview: userBlog.overview, category: userBlog.category, blogImage: ""
    })
    const [preview, setPreview] = useState("")
    useEffect(() => {
        if (blogDetails.blogImage) {
            setPreview(URL.createObjectURL(blogDetails.blogImage))
        }

    }, [blogDetails.blogImage])

    const handleUpdate = async () => {
        const {id, title, overview, category, blogImage } = blogDetails
        if (!title || !overview || !category) {
            toast.info("Please fill the form completely")
        } else {
            const reqBody = new FormData()
            reqBody.append("title", title)
            reqBody.append("overview", overview)
            reqBody.append("category", category)
            preview ? reqBody.append("blogImage", blogImage) : reqBody.append("blogImage", userBlog.blogImage)
            const token = sessionStorage.getItem("token")
            if (preview) {
                const reqHeader = {
                    "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}`
                }
                //   api call
                const result = await editBlogAPI(id,reqBody,reqHeader)
                if(result.status===200){
                    handleClose()
                }else{
                    console.log(result);
                    toast.error(result.response.data)
                }
            } else {
                const reqHeader = {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`
                }
                const result = await editBlogAPI(id,reqBody,reqHeader)
                if(result.status===200){
                    handleClose()
                }else{
                    console.log(result);
                    toast.warning(result.response.data)
                }
            }


        }
    }

    return (
        <>
            <td onClick={handleShow} className='p-3'><button className="btn"><i className="fa-solid fa-pen-to-square "></i></button></td>

            <Modal style={{ width: '' }} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Youre BLOG</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <label>
                            <input type="file" style={{ display: 'none' }} onChange={e => setBlogDetails({ ...blogDetails, blogImage: e.target.files[0] })} />
                            <img className='img-fluid' height={'300px'} width={'300px'} src={preview ? preview : `${BASE_URL}/uploads/${userBlog.blogImage}`} alt="blog image" />
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

                            <Form.Control
                                type="text" value={blogDetails.category} onChange={e => setBlogDetails({ ...blogDetails, category: e.target.value })}
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
                    <Button variant="primary" onClick={handleUpdate} >
                        UPDATE
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit