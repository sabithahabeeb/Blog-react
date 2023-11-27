import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ register }) {
    const navigate = useNavigate()
    const [userData, setUSerData] = useState({
        username: "", email: "", password: ""
    })
    const isRegister = register ? true : false

    const handleRegister = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        if (!username || !email || !password) {
            toast.info("Please fill the form completely")
        } else {
            const result = await registerAPI(userData)
            console.log(result);
            if (result.status === 200) {
                toast.success(`${result.data.username} has registered succesfully..`)
                setUSerData({
                    username: "", email: "", password: ""
                })
                navigate('/login')

            } else {
                toast.warning(result.response.data);
                setUSerData({
                    username: "", email: "", password: ""
                })
                navigate('/login')
                console.log(result);
               
            }
        }

    }
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
                        <Form.Control type='text' placeholder="User Name" value={userData.username} onChange={e => setUSerData({ ...userData, username: e.target.value })} />
                    </Form.Group>}
                    <Form.Group className="mb-3">
                        <Form.Control type='email' placeholder="Enter Email Id" value={userData.email} onChange={e => setUSerData({ ...userData, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='password' placeholder="Password" value={userData.password} onChange={e => setUSerData({ ...userData, password: e.target.value })} />
                    </Form.Group>
                    {/* {isRegister && <Form.Group className="mb-3">
                        <Form.Control type='password' placeholder="Re Enter Password" />
                    </Form.Group>} */}
                    {isRegister ? <div>
                        <button onClick={handleRegister} className='btn btn-light mb-3 '>Register</button>
                        <p>Already have Account? Click here to <Link to={'/login'}>Login</Link></p>
                    </div> :
                        <div>
                            <button className='btn btn-light mb-3'>Login</button>
                            <p>Already have Account? Click here to <Link to={'/register'}>Register</Link></p>
                        </div>}
                </Form>

            </div>
            <ToastContainer position="top-right"
                autoClose={1000} theme="colored" />
        </div>
    )
}

export default Auth