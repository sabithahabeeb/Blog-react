import React, { useEffect, useState } from 'react'
import Head from '../Components/Head';
import Footer from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import { Row, Col } from 'react-bootstrap'
import { allBlogAPI } from '../Services/allAPI';

function Dashboard() {
  const [allBlogs, setAllBlogs] = useState([])
  const getAllBlogs = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json", "Authorization": `Bearer ${token}`
      }
      const result = await allBlogAPI(reqHeader)
      if (result.status === 200) {
        setAllBlogs(result.data)
      } else {
        console.log(result);
      }

    }

  }
  // console.log(allBlogs);
  useEffect(() => {
    getAllBlogs()
  }, [])
  return (
    <>
      <Head />
      <div className='image mb-5 '></div>
      <Row className='d-flex flex-row mb-3'>
       {allBlogs?.length>0?allBlogs?.map(blog=>(
        <Col sm={12} md={6} lg={4} xl={3} >
          <BlogCard blog={blog} className='m-5 p-5' />
        </Col>
       )):null
        }

      </Row>
      <Footer />
    </>
  )
}

export default Dashboard

// <BlogCard  className='m-5 p-5' /><BlogCard  className='m-5 p-5' /><BlogCard  className='m-5 p-5' />