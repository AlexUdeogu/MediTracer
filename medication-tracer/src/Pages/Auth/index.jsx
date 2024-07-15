import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './auth-index.css';
import cutout from "../../assets/sitting-5.svg";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigate('/med-page');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='body'>
      <nav className='nav-2'>
        <Link to="/" className='logo-1'> Medi<span className='logo-half'>Guide</span></Link>
        <ul>
          <li><Link to="/sign-up"><botton type="button" className="item-container-1">Sign Up</botton></Link></li>
        </ul>
      </nav>

      <div className="login-page-1">
        <div className="login-container-1">
          <form className="login-form-1" onSubmit={handleLogin}>
            <h2 className="login-title-1">Log In</h2>

            <div className="login-form-group-1">
              <label htmlFor="username" className="login-form-label-1">Username:</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                className="login-form-input-1"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="login-form-group-1">
              <label htmlFor="password" className="login-form-label-1">Password:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                id="password"
                className="login-form-input-1"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-form-button-1">Log In</button>
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
