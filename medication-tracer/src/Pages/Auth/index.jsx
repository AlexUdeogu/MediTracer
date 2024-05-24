import React from 'react';
import './index.css';
import cutout from "../../assets/sitting-5.svg"
import Bars from "../../Components/Navbar/index"

const LoginPage = () => {
  return (
    <div>
      <Bars />
      <div className="login-page">
        <div className="login-container">
          <form className="login-form">
            <h2 className="login-title">Log In</h2>



            <div className="login-form-group">
              <label htmlFor="email" className="login-form-label">Username or Email:</label>
              <input type="email" id="email" className="login-form-input" placeholder="Enter your username or email" />
            </div>



            <div className="login-form-group">
              <label htmlFor="password" className="login-form-label">Password:</label>
              <input type='password' id="password" className="login-form-input" placeholder="Enter your password" />
            </div>


            <button type="submit" className="login-form-button">Log In</button>
            <div className="forgotpassword">
              <a href='#'>Forgot Password?</a>
            </div>

            
          </form>
        </div>
        <div className="cutout-container">
        <img src={cutout} alt="Tools" className="cutout-img" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
