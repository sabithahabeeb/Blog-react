import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
function Home() {
  return (
   <>
      <div className='containers'>
        <div className='buttons'>
          <h1 >WELCOME</h1>
          <Link to={'/login'} className='btn btn-warning'>Get Start</Link>
        </div>
      
      </div>



     <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <div className='d-flex flex-row justify-content-center align-items-center  p-2 shadow w-75 '>
          <img className='m-5 p-5' height={'400px'} src="https://www.helpmenaomi.com/wp-content/uploads/2023/08/Turn-Your-Blog-into-a-Book-You-Can-Publish-Featured-Image.webp" alt="" />
          <div style={{fontSize:'20px'}}>
            <h4 className='fw-bolder text-success'>Blog Written</h4>
            <p>An easy way to write an outline for your blog post is to follow a similar structure to an essay. Your blog post starts with an introduction, which is then followed by body sections and then finally, the conclusion. </p>
          
          </div>
        </div>
     </div>


     <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <div className='d-flex flex-row justify-content-center align-items-center  p-2 shadow w-75 '>
        <div style={{fontSize:'20px'}}>
            <h4 className='fw-bolder text-success'>Succesful Blog</h4>
            <p>Creating a successful blog takes focus, purpose and planning, and it also requires enough flexibility to edit that plan as needed. There shouldn't be any fluff. Everything, even if it's on the “light” side, should be worthwhile for your audience – everything should have a benefit.</p>
          
          </div>
          <img className='m-5 p-5' height={'400px'} src="https://www.elmastudio.de/wp-content/uploads/2019/10/tips-for-writing-engaging-blog-posts.jpg" alt="" />
         
        </div>
     </div>




      
      <div className='border '>
        <h1 className='p-2 m-5' style={{color:'crimson',textAlign:'center',fontWeight:'700'}}>Customer Service Reviews</h1>
        <div className='d-flex w-100 flex-row align-items-center justify-content-between m-3 p-3'>
          <div className="message  d-flex flex-column align-items-center justify-content-between border shadow p-3 m-2">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://as1.ftcdn.net/v2/jpg/00/86/50/90/1000_F_86509002_0c2J71EBWrPOAYATDgVVSGbpXZQZzcKq.jpg" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
          <div className="message  d-flex flex-column align-items-center justify-content-between  border shadow m-2 p-3">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://as1.ftcdn.net/v2/jpg/02/85/35/12/1000_F_285351282_qoH7nhi5lgKLzWAkJScnVejfQy66FGJw.jpg" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span  className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
          <div className="message  d-flex flex-column align-items-center justify-content-between  border shadow m-2 p-3">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://previews.123rf.com/images/oleksiispesyvtsev/oleksiispesyvtsev1910/oleksiispesyvtsev191000278/133013013-portrait-of-a-cute-two-year-old-toddler-girl-in-pink-balancing-on-rocks-in-the-park.jpg?fj=1" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star"></span>
              <span style={{ color: 'orange' }} className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
          <div className="message  d-flex flex-column align-items-center justify-content-between  border shadow m-2 p-3">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://as2.ftcdn.net/v2/jpg/01/15/79/77/500_F_115797755_kyaWoVqXcdmkXlNSGB0cuSvMy6oXAnuk.jpg" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span  className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
        </div>
    </div>
    <Footer/>
   </>

  )
}

export default Home