import React, { useState, useEffect } from 'react';
import './medpage.css';
import { Link } from "react-router-dom";
import Summary from '../Summary/summary.jsx';
import Mainapp from '../Mainapp/Mainapp.jsx';

const Medpage = ({ toggleMainApp, showMainApp }) => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    setReminders(storedReminders);
  }, []);

  const addReminder = (newReminder) => {
    const updatedReminders = [...reminders, newReminder];
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));
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

        <Summary reminders={reminders} onDeleteReminder={deleteReminder} />

        <div className="item-container-button">
          <button type="button" className="item-container-main" onClick={toggleMainApp}>Add new reminder</button>
        </div>

      </div>
      <Mainapp toggleMainApp={toggleMainApp} showMainApp={showMainApp} onAddReminder={addReminder} />
      <div className="footer-space"></div>
    </div>
  );
};

export default Medpage;
