import React, { useContext, useEffect, useState } from 'react'
import Head from '../Components/Head';
import Footer from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import { Row, Col } from 'react-bootstrap'
import { allBlogAPI } from '../Services/allAPI';
import { shareBLogDetailsContext } from '../Context/ContextShare';

function Dashboard() {
  
  const {blogDetails,setBlogDetails} = useContext(shareBLogDetailsContext)
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
        setBlogDetails(result.data)
      } else {
        console.log(result);
      }

    }

  }
  
  // console.log(blogDetails);
  // console.log(allBlogs);
  useEffect(() => {
    getAllBlogs()
  }, [])
  return (
    <>
      <Head />
      <div className='image mb-5 pt-5'></div>
      <div className="d-flex justify-content-center align-items-center  w-75 rounded ms-5">
          <input   type="text" className='form-control w-50' placeholder='Search blog by category' />
          <i style={{ marginLeft: '-40px' }} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
      <Row className='d-flex flex-row mb-3 mt-5'>
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