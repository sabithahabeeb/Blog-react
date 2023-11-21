import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

function BlogCard() {
  const navigateURL = useNavigate()

  const navigate = ()=>{
    navigateURL('/blogdetails')
  }
  return (
    <>
    
            <Card onClick={navigate} style={{ width: '20rem' }} className='shabow mb-5  m-5 btn'>
         <Card.Img variant="top" src="https://images.woodenstreet.de/image/data/modular%20kitchen/22.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <p style={{color:'gray'}}>Time</p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Link to={'/blogdetails'}>View</Link> */}
          </Card.Body>
        </Card>
   
    </>
  )
}

export default BlogCard