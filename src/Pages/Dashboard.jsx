import React from 'react'
import Head from '../Components/Head';
import Footer from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import { Row, Col } from 'react-bootstrap'

function Dashboard() {
  return (
    <>
      <Head />
      <div className='image mb-5 '></div>
      <Row className='d-flex flex-row mb-3'>
        <Col sm={12} md={6} lg={4} xl={3} >
          <BlogCard className='m-5 p-5' />
        </Col>
        <Col sm={12} md={6} lg={4} xl={3} >
          <BlogCard className='m-5 p-5' />
        </Col><Col sm={12} md={6} lg={4} xl={3} >
          <BlogCard className='m-5 p-5' />
        </Col><Col sm={12} md={6} lg={4} xl={3} >
          <BlogCard className='m-5 p-5' />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Dashboard

// <BlogCard  className='m-5 p-5' /><BlogCard  className='m-5 p-5' /><BlogCard  className='m-5 p-5' />