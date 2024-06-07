import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker'; // Importing the TimePicker component
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css'; // Importing TimePicker styles
import { Link, useNavigate } from "react-router-dom";
import './Mainapp.css';

export const Mainapp = ({ toggleMainApp, showMainApp, onAddReminder }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [secondPrescriptionTime, setSecondPrescriptionTime] = useState('12:00'); // New state for the second prescription time
  const [prescriptionName, setPrescriptionName] = useState('');
  const [dosage, setDosage] = useState('1');
  const [dailyIntake, setDailyIntake] = useState('1');
  const [description, setDescription] = useState('');

  const handleAddReminder = (e) => {
    e.preventDefault();
    const newReminder = {
      prescriptionName,
      dosage,
      secondPrescriptionTime,
      dailyIntake,
      startDate,
      endDate,
      description,
    };

    // Add the new reminder using the onAddReminder function passed from Medpage
    onAddReminder(newReminder);

    // Reset the state values to clear the text boxes
    setPrescriptionName('');
    setDosage('1');
    setSecondPrescriptionTime('12:00');
    setDailyIntake('1');
    setStartDate(new Date());
    setEndDate(new Date());
    setDescription('');

    toggleMainApp(); // Hide the Mainapp overlay
    navigate('/med-page'); // Navigate to the medpage
  };

  return (
    <div className={`mainapp-overlay ${showMainApp ? 'show' : ''}`}>
      <div className="mainapp-content">
        <div className="login-page">
          <div className="login-container">
            <button className="close-button" onClick={toggleMainApp}>X</button>
            <form className="login-form" onSubmit={handleAddReminder}>
              <h2 className="login-title">Reminder</h2>
              
              <div className="name-fields">
                <div className="login-form-group">
                  <label htmlFor="prescription-name" className="login-form-label">Prescription Name:</label>
                  <input
                    className="login-form-input"
                    id="prescription-name"
                    placeholder="Paracetamol"
                    value={prescriptionName}
                    onChange={(e) => setPrescriptionName(e.target.value)}
                    required
                  />
                </div>
                <div className="login-form-group">
                  <label htmlFor="dosage" className="login-form-label">Dosage:</label>
                  <select
                    className="login-form-input"
                    id="dosage"
                    value={dosage}
                    onChange={(e) => setDosage(e.target.value)}
                  >
                    {[...Array(10).keys()].map(i => (
                      <option key={i+1} value={i+1}>{i+1} tablet{ i > 0 && 's' }</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="name-fields">
                <div className="login-form-group">
                  <label htmlFor="second-prescription-time" className="login-form-label">Prescription Time:</label>
                  <TimePicker
                    onChange={setSecondPrescriptionTime}
                    value={secondPrescriptionTime}
                    disableClock={true} // Disables the clock to allow manual time input
                    className="login-form-input-date"
                    clearIcon={null} // Hides the clear icon
                    clockIcon={null} // Hides the clock icon
                  />
                </div>
                <div className="login-form-group">
                  <label htmlFor="daily-intake" className="login-form-label">Daily Intake:</label>
                  <select
                    className="login-form-input"
                    id="daily-intake"
                    value={dailyIntake}
                    onChange={(e) => setDailyIntake(e.target.value)}
                  >
                    {[...Array(10).keys()].map(i => (
                      <option key={i+1} value={i+1}>{i+1}x Daily</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="user-fields">
                <div className="login-form-group">
                  <label htmlFor="starting-from" className="login-form-label">Starting From:</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="login-form-input-date"
                    dateFormat="dd-MM-yyyy"
                  />
                </div>
                <div className="login-form-group">
                  <label htmlFor="ending-on" className="login-form-label">Ending On:</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="login-form-input-date"
                    dateFormat="dd-MM-yyyy"
                  />
                </div>
              </div>

              <div className="login-form-group">
                <label htmlFor="description" className="login-form-label">Description:</label>
                <textarea
                  id="description"
                  className="login-form-input-d"
                  placeholder="Information about the medication"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button type="submit" className="login-form-button">Add reminder</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainapp;
