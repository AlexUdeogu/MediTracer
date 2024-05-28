import React from 'react';
import './auth-index.css'
import cutout from "../../assets/sitting-5.svg"
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (

    <div className='body'>

        <nav className='nav-2'>
            <Link to="/" className='logo-1'> Medi<span className='logo-half'>Tracer</span></Link>
            <ul>
                <li>Don't have an account?</li>
                <li><Link to="/sign-up"> <botton type="submit" className="item-container-1" > Sign Up </botton></Link></li>
            </ul>
        </nav>

      <div className="login-page-1">
        <div className="login-container-1">
          <form className="login-form-1">
            <h2 className="login-title-1">Log In</h2>



            <div className="login-form-group-1">
              <label htmlFor="email" className="login-form-label-1">Username or Email:</label>
              <input type="email" id="email" className="login-form-input-1" placeholder="Enter your username or email" />
            </div>



            <div className="login-form-group-1">
              <label htmlFor="password" className="login-form-label-1">Password:</label>
              <input type='password' id="password" className="login-form-input-1" placeholder="Enter your password" />
            </div>


            <button type="submit" className="login-form-button-1">Log In</button>
            <div className="forgotpassword">
              <a href='#'>Forgot Password?</a>
            </div>

            
          </form>
        </div>
        <div className="cutout-container-1">
        <img src={cutout} alt="Tools" className="cutout-img-1" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
