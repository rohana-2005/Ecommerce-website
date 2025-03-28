import React from 'react'
import './CSS/Login.css'
const Login = () => {
  return (
    <div className='login'>
      <h1>Sign Up</h1>
      <input placeholder='Your Name'></input>
      <input placeholder='Email Address'></input>
      <input placeholder='Password'></input>
      <button>Password</button>
    </div>
  )
}

export default Login
