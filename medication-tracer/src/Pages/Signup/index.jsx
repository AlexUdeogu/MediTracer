import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import cutout from "../../assets/standing-16.svg";

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, username, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/log-in');
  };

  return (
    <div>
      <nav className='nav-3'>
        <Link to="/" className='logo-0'> Medi<span className='logo-half'>Guide</span></Link>
        <ul>
          <li><Link to="/log-in"><botton type="submit" className="item-container-2-0">Log In</botton></Link></li>
        </ul>
      </nav>

      <div className="login-page-0">
        <div className="login-container-0">
          <form className="login-form-0" onSubmit={handleSignUp}>
            <h2 className="login-title-0">Sign Up</h2>
            <div className="login-form-group-0">
              <label htmlFor="first-name" className="login-form-label-0">First Name:</label>
              <input
                className="login-form-input-0"
                id="first-name"
                placeholder="Chidi"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="last-name" className="login-form-label-0">Last Name:</label>
              <input
                className="login-form-input-0"
                id="last-name"
                placeholder="Debo"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="username" className="login-form-label-0">Username:</label>
              <input
                className="login-form-input-0"
                id="username"
                placeholder="ChidiDeboSinto"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="email" className="login-form-label-0">Email:</label>
              <input
                type="email"
                id="email"
                className="login-form-input-0"
                placeholder="DeboSinto999@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-form-group-0">
              <label htmlFor="password" className="login-form-label-0">Password:</label>
              <input
                type='password'
                id="password"
                className="login-form-input-0"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-form-button-0">Sign Up</button>
          </form>
        </div>

        <div className="cutout-container-0">
          <img src={cutout} alt="Tools" className="cutout-img-0" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
