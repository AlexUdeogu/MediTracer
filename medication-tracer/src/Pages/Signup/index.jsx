import React from 'react'
import { Link } from "react-router-dom";
import './signup.css';
import cutout from "../../assets/standing-16.svg"
const Signup = () => {
  return (
    <div>

        <nav>
            <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
            <ul>
                <li><a href="#service">Already have an account?</a></li>
                <li><Link to="/log-in"> <button type="submit" className="item-container" > Log In </button></Link></li>
            </ul>
        </nav>

      <div className="login-page">
        <div className="login-container">
          <form className="login-form">
            <h2 className="login-title">Sign Up</h2>
            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">First Name:</label>
              <input  className="login-form-input" placeholder="John" />
            </div>

            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">Last Name:</label>
              <input  className="login-form-input" placeholder="Doe" />
            </div>


            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">Username:</label>
              <input  className="login-form-input" placeholder="@JohnDoe1234" />
            </div>


            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">Email:</label>
              <input type="email" id="email" className="login-form-input" placeholder="johndoe@gmail.com" />
            </div>


            <div className="login-form-group">
              <label htmlFor="password" className="login-form-label">Password:</label>
              <input type='password' id="password" className="login-form-input" placeholder="Enter your password" />
            </div>



            <button type="submit" className="login-form-button">Sign Up</button>


          </form>
        </div>


        <div className="cutout-container">
        <img src={cutout} alt="Tools" className="cutout-img" />
        </div>
      </div>


    </div>
  )
}

export default Signup
