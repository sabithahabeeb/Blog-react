import React, { useContext, useEffect, useState } from 'react'
import Head from '../Components/Head';
import Footer from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import { Row, Col } from 'react-bootstrap'
import { allBlogAPI } from '../Services/allAPI';
import { shareBLogDetailsContext } from '../Context/ContextShare';

function Dashboard() {
  const [searchKey,setSearchKey] = useState("")
  
  const {blogDetails,setBlogDetails} = useContext(shareBLogDetailsContext)
  const [allBlogs, setAllBlogs] = useState([])
  const getAllBlogs = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json", "Authorization": `Bearer ${token}`
      }
      const result = await allBlogAPI(searchKey,reqHeader)
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
  }, [searchKey])
  return (
    <>
      <Head />
      <div className='image mb-5 pt-5'></div>
      <div className="d-flex justify-content-center align-items-center  w-75 rounded ms-5">
          <input   type="text" className='form-control w-50' placeholder='Search blog by category' value={searchKey} onChange={e=>setSearchKey(e.target.value)} />
          <i style={{ marginLeft: '-40px' }} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
        </div>
      <Row className='d-flex flex-row mb-3 mt-5'>
       {allBlogs?.length>0?allBlogs?.map(blog=>(
        <Col sm={12} md={6} lg={4} xl={3} >
          <BlogCard blog={blog} className='m-5 p-5' />
        </Col>
       )):<p style={{color:'red'}} className='text-center fw-bold fs-4 '>Not matching Item</p>
        }

      </Row>
      <Footer />
    </>
  )
}

export default Dashboard

// <BlogCard  className='m-5 p-5' /><BlogCard  className='m-5 p-5' /><BlogCard  className='m-5 p-5' />