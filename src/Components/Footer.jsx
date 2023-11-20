import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
 <div className='d-flex justify-content-center align-items-center bg-body-tertiary flex-column mt-5 border border-dark ' style={{ width: '100%', height: '300px', color: 'white' }}>
            <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
                <div className="website" style={{ width: '300px' }}>
                    <h4 style={{color:'black'}}> <img height={'30px'} width={'30px'} src="https://cdn.icon-icons.com/icons2/1571/PNG/512/483490-blogger-google-logo-media-network-social_107708.png" alt="" /> {' '}BLOGS</h4>
                    <p style={{color:'black'}}>Designed and built with blog app the love in the world by the Luminar  team with the help of our contributors.
                        Code licensed Luminar, docs CC BY 3.0.
                    </p>
                </div>
                <div className="links d-flex justify-content-center  flex-colum ">
                    <div >
                        <div>
                            <h4  style={{color:'black'}}>Links</h4>
                            <div>
                                <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
                                    Home
                                </Link>
                            </div>
                            <div><Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>Register</Link></div>
                            <div> <Link to={'/watching-history'} style={{ textDecoration: 'none', color: 'black' }}>Login</Link></div>
                        </div>
                    </div>
                </div>
                <div className="guide d-flex justify-content-center  flex-colum ">
                    <div >
                        <div>
                            <h4 style={{color:'black'}}>Guide</h4>
                            <div>
                                <Link to={'https://react-bootstrap.netlify.app/docs/getting-started/introduction/'} style={{ textDecoration: 'none', color: 'black' }}>
                                    Bootstrap
                                </Link>
                            </div>
                            <div><Link to={'https://fontawesome.com/'} style={{ textDecoration: 'none', color: 'black' }}>Font Awsome</Link></div>
                            <div> <Link to={'https://fonts.google.com/'} style={{ textDecoration: 'none', color: 'black' }}>Google Fonts</Link></div>
                        </div>
                    </div>
                </div>
                <div className="contact d-flex justify-content-center  flex-colum ">
                    <div >
                        <div>
                            <h4 style={{color:'black'}}>Contact Us</h4>
                            <div>
                                <input type="text" className='mb-3' placeholder='Enter Youre Email...' style={{ width: '200px', height: '40px', borderRadius: '10px' }} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center '>
                                <Link style={{ fontSize: '30px', color: 'black' }}><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link style={{ fontSize: '30px', color: 'black' }}><i className="fa-brands fa-twitter"></i></Link>
                                <Link style={{ fontSize: '30px', color: 'black' }}><i className="fa-brands fa-linkedin-in"></i></Link>
                                <Link style={{ fontSize: '30px', color: 'black' }}><i className="fa-brands fa-instagram"></i></Link>
                                <Link style={{ fontSize: '30px', color: 'black' }}> <i className="fa-brands fa-whatsapp"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div> <p style={{color:'black'}}>Copyright © 2023 Blog App. Built with Docusaurus.</p></div>
        </div>
    </>
  )
}

export default Footer