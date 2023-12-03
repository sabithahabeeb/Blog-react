import React, { useContext, useEffect, useState } from 'react'
import Head from '../Components/Head'
import Footer from '../Components/Footer'
import { Col, Row } from 'react-bootstrap'
import { shareBLogDetailsContext } from '../Context/ContextShare'
import { useParams } from 'react-router-dom'
import { viewBlogAPI } from '../Services/allAPI'

function DetailsBlog() {
    // const {blogDetails,setBlogDetails} = useContext(shareBLogDetailsContext)
    const [blogDetailsID,setBlogDetailsID] = useState([])
    const {id} = useParams()
    
   
    useEffect(()=>{
        // const selectedBlog = blogDetails?.find(blog=>blog._id==_id)
        // setBlogDetailsID(selectedBlog)

    },[])

    const getABlog = async (id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
          "Content-Type": "application/json", "Authorization": `Bearer ${token}`
        }
        // api call
        const result = await viewBlogAPI(id,reqHeader)
        if(result.status===200){
         setBlogDetailsID(result.data)
        }else{
        //   console.log(result);
        //   toast.error(result.response.data)
        }
      }
      console.log(blogDetailsID);
      useEffect(()=>{
        getABlog()
      },[])
    return (
        <>
            <Head />
            <Row className='d-flex flex-row justify-content-center align-items-center'>
                <Col lg={7} className='mt-5 ms-5 me-5 pe-4'>
                    <img width={'100%'} height={'500px'} src="https://images.woodenstreet.de/image/data/modular%20kitchen/22.jpg" alt="" />
                    <h1 style={{ width: '900px' }} className='fw-bold text-center mt-5 ms-10'>My new kitchen Work</h1>
                    <div style={{ color: 'gray', width: '900px' }} className='d-flex flex-row justify-content-between alighn-items-between  mt-4'>
                        <p>Author : Michele</p>
                        <p>Mon May 14 2023</p>
                    </div>
                    <div style={{ width: '900px' }} className='mt-4'>
                        <span className='fw-bolder text-lg'>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet aliquam pariatur et neque harum dolorum dicta ad facilis? Dignissimos delectus ullam quaerat distinctio alias repudiandae nihil vero possimus et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet aliquam pariatur et neque harum dolorum dicta ad facilis? Dignissimos delectus ullam quaerat distinctio alias repudiandae nihil vero possimus et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet aliquam pariatur et neque harum dolorum dicta ad facilis? Dignissimos delectus ullam quaerat distinctio alias repudiandae nihil vero possimus et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet aliquam pariatur et neque harum dolorum dicta ad facilis? Dignissimos delectus ullam quaerat distinctio alias repudiandae nihil vero possimus et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet aliquam pariatur et neque harum dolorum dicta ad facilis? Dignissimos delectus ullam quaerat distinctio alias repudiandae nihil vero possimus et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet aliquam pariatur et neque harum dolorum dicta ad facilis? Dignissimos delectus ullam quaerat distinctio alias repudiandae nihil vero possimus et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eveniet aliquam pariatur et neque harum dolorum dicta ad facilis? Dignissimos delectus ullam quaerat distinctio alias repudiandae nihil vero possimus et?
                    </div>
                </Col>
                
            </Row>
            <Footer />
        </>
    )
}

export default DetailsBlog