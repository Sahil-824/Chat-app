import React from 'react'
import assets from "../../assets/assets"
import "./Login.css"
const Login = () => {
  return (
    <div className='login'>
        <img src={assets.logo_big} alt="" className='logo' />
        <form action="" className='signup-form'>
              <h2>Sign-up</h2>
              <input type="text" placeholder="Enter name"className="input" required />
              <input type="email" placeholder="abc@gmail.com"className="input" required />
              <input type="password" className="input" required />
              <div className='check'>
                <input type="checkbox"  required/>
                <p>I agree all terms and conditions</p>
              </div>
              <button type='submit'>Signup</button>
              <div className='togle'>
                <p>Already have an account ? <span>Sign-in</span></p>
              </div>
        </form>
    </div>
  )
}

export default Login