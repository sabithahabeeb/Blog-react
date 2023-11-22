import React from 'react'
import Head from '../Components/Head'
import Footer from '../Components/Footer'

function Write() {
  return (
    <>
      <Head />
      <div  className='d-flex flex-column justify-content-center align-items-center mt-5 ms-5 '>
      <img width={'50%'} height={'50px'} className='img-fluid' src="https://images.woodenstreet.de/image/data/modular%20kitchen/22.jpg" alt="" />
        <label className=''>
             <input type="file" style={{ display: 'none' }} o />
          <i style={{cursor:'pointer'}}className="fa-solid fa-plus border p-2 rounded mt-3"></i>
        </label>
     
        {/* <p>tell youre story.....</p> */}
      </div>
      <div>

      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Write