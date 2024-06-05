import React, { useState } from 'react';
import './medpage.css';
import { Link } from "react-router-dom";
import Summary from '../Summary/summary.jsx';

const Medpage = () => {
  const [rows, setRows] = useState(Array.from({ length: 10 }, (_, rowIndex) => rowIndex + 1));

  const deleteRow = (index) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };

  const editRow = (index) => {
    // Add your edit logic here
    console.log(`Edit row ${index + 1}`);
  };

  return (
    <div className='body-page'>
      <nav>
        <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
        <ul>
         <li><a href="#service">@JohnDoe123</a></li>
         <li><Link to="/"><a href="#service">Log Out</a></Link></li>
          <li><a href="#"><button type="submit" className="item-container"> JD </button></a></li>
        </ul>
      </nav>
      <div className="mainpage">
        <div className="mainpage-title">
          <h1 className='mainpage-head'>Medications</h1>
          <p>Manage your reminders and view their health performance.</p>
        </div>


      <Summary />




        <div className="item-container-button">
          <Link to="/main-app">
            <button type="submit" className="item-container-main">Add new reminder</button>
          </Link>
        </div>
      </div>
      <div className="footer-space"></div>
    </div>
  );
};

export default Medpage;
