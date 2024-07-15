import React, { useState, useEffect } from 'react';
import './medpage.css';
import { Link } from 'react-router-dom';
import Summary from '../Summary/summary.jsx';
import Mainapp from '../Mainapp/Mainapp.jsx';

const Medpage = ({ toggleMainApp, showMainApp }) => {
  const [reminders, setReminders] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    setReminders(storedReminders);

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const addReminder = (newReminder) => {
    const updatedReminders = [newReminder, ...reminders]; // Prepend new reminder
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));
  };

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));
  };

  const handleCloseSummary = (index) => {
    deleteReminder(index);
  };

  return (
    <div className='body-page'>
      <nav className='nav-10'>
        <a href='#' className='logo'> Medi<span className='logo-half'>Guide</span></a>
        <ul>
          <li><a href="#service">{user ? user.username : 'JohnDoe123'}</a></li>
          <li><Link to="/"><a href="#service">Log Out</a></Link></li>
        </ul>
      </nav>
      <div className="mainpage">
        <div className="mainpage-title">
          <h1 className='mainpage-head'>Medications</h1>
          <p>Manage your Medications and stay informed about them.</p>
          <button type="button" className="item-container-main" onClick={toggleMainApp}> Add Medication </button>
        </div>
      </div>

      <div className="summary-grid">
        {reminders.map((reminder, index) => (
          <Summary
            key={index}
            reminder={reminder}
            onDeleteReminder={() => handleCloseSummary(index)}
          />
        ))}
      </div>

      <Mainapp toggleMainApp={toggleMainApp} showMainApp={showMainApp} onAddReminder={addReminder} />
    </div>
  );
};

export default Medpage;
