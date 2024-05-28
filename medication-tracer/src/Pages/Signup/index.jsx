import React from 'react';
import { Link } from "react-router-dom";
import './signup.css';
import cutout from "../../assets/standing-16.svg";

const Signup = () => {
  return (
    <div>
      <div > 
      <nav className='nav-3'>
        <Link to="/" className='logo-0'> Medi<span className='logo-half'>Tracer</span></Link>
        <ul>
          <li>Already have an account?</li>
          <li><Link to="/log-in"> <botton type="submit" className="item-container-2-0"> Log In </botton></Link></li>
        </ul>
      </nav>

      <div className="login-page-0">
        <div className="login-container-0">
          <form className="login-form-0">
            <h2 className="login-title-0">Sign Up</h2>
            <div className="login-form-group-0">
              <label htmlFor="email" className="login-form-label-0">First Name:</label>
              <input className="login-form-input-0" placeholder="John" />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="email" className="login-form-label-0">Last Name:</label>
              <input className="login-form-input-0" placeholder="Doe" />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="email" className="login-form-label-0">Username:</label>
              <input className="login-form-input-0" placeholder="@JohnDoe1234" />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="email" className="login-form-label-0">Email:</label>
              <input type="email" id="email" className="login-form-input-0" placeholder="johndoe@gmail.com" />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="password" className="login-form-label-0">Password:</label>
              <input type='password' id="password" className="login-form-input-0" placeholder="Enter your password" />
            </div>

            <button type="submit" className="login-form-button-0">Sign Up</button>

          </form>
        </div>

        <div className="cutout-container-0">
          <img src={cutout} alt="Tools" className="cutout-img-0" />
        </div>
      </div>
    </div>
      </div>
  );
};

export default Signup;
