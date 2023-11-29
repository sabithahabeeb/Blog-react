import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../Services/baseurl';

function BlogCard({blog}) {
  const date= ()=>{
    const showDate = new Date()
    const displayTodayDate = showDate.getDate()+'/'+showDate.getMonth()+'/'+showDate.getFullYear()
    return displayTodayDate
  }
  const navigateURL = useNavigate()

  const navigate = ()=>{
    navigateURL('/blogdetails')
  }
  return (
    <>
    
      <Link to={`/blogdetails/${blog._id}`} style={{textDecoration:'none'}}>
              <Card style={{ width: '20rem',height:'350px'}} className='shabow mb-5  m-5 btn'>
           <Card.Img variant="top" height={'300px'} src={blog?`${BASE_URL}/uploads/${blog.blogImage}`:null} />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <p style={{color:'gray'}}>{date()}</p>
              <Card.Text>
                {blog?.overview.slice(0,45)}...
              </Card.Text>
              {/* <Link to={'/blogdetails'}>View</Link> */}
            </Card.Body>
          </Card>
     
      </Link >
    </>
  )
}

export default BlogCard