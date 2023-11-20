import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
      <div className='buttons'>
        <h1 >BLOGs</h1>
        <Link to={'/register'} className='btn btn-warning'>Get Start</Link>
      </div>
    </div>
  )
}

export default Home