import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Write() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
<button onClick={handleShow} className='btn btn-success'>ADD </button>  
<Modal style={{width:''}} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD BLOG</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <label>
              <input type="file" style={{ display: 'none' }} o />
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s" alt="" />
            </label>
            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
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
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
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
          <Button variant="primary" onClick={handleClose}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Write