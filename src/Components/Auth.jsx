import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'

function Auth({ register }) {
    const isRegister = register ? true : false
    return (
        <div className='auth'>

            <div className='card shadow p-5 bg-transparent'>
                <h5 className='fw-bolder  mt-2 pb-3 text-light'>
                    {
                        isRegister ? 'Sign up to your Account' : 'Sign In to your Account'
                    }
                </h5>
                <Form className='w-100'>
                    {isRegister && <Form.Group className="mb-3">
                        <Form.Control type='text' placeholder="User Name" />
                    </Form.Group>}
                    <Form.Group className="mb-3">
                        <Form.Control type='email' placeholder="Enter Email Id" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='password' placeholder="Password" />
                    </Form.Group>
                    {isRegister && <Form.Group className="mb-3">
                        <Form.Control type='password' placeholder="Re Enter Password" />
                    </Form.Group>}
                    {isRegister ? <div>
                        <button  className='btn btn-light mb-3 '>Register</button>
                        <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                    </div> :
                        <div>
                            <button  className='btn btn-light mb-3'>Login</button>
                            <p>Already have Account? Click here to <Link to={'/register'}>Register</Link></p>
                        </div>}
                </Form>

            </div>
        </div>
    )
}

export default Auth