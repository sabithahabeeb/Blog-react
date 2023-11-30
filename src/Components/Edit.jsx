import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { BASE_URL } from '../Services/baseurl';



function Edit({ userBlog }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    const [blogDetails, setBlogDetails] = useState({
        title: userBlog.title, overview: userBlog.overview, category: userBlog.category, blogImage: userBlog.blogImage
    })
    const [preview, setPreview] = useState("")
    useEffect(() => {
        if (blogDetails.blogImage) {
            // setPreview(URL.createObjectURL(blogDetails.blogImage))
        }

    }, [blogDetails.blogImage])

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
                            <img className='img-fluid' height={'300px'} width={'300px'} src={preview ? preview : `${BASE_URL}/uploads/${userBlog.blogImage}`} alt="" />
                        </label>
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">

                            <Form.Control value={userBlog.title}
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
                            <Form.Control as="textarea" rows={3} value={userBlog.overview} />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">

                            <Form.Control
                                type="text" value={userBlog.category}
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
                    <Button variant="primary" >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit