import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { useNavigate } from "react-router-dom";
import './Mainapp.css';

const Mainapp = ({ toggleMainApp, showMainApp, onAddReminder }) => {
  const navigate = useNavigate();
  const initialPrescriptionTimes = ['12:00'];
  const [prescriptionName, setPrescriptionName] = useState('');
  const [dosage, setDosage] = useState('1');
  const [dailyIntake, setDailyIntake] = useState('1');
  const [prescriptionTimes, setPrescriptionTimes] = useState(initialPrescriptionTimes); // Initial state with one time input

  const handleAddReminder = (e) => {
    e.preventDefault();
    const newReminder = {
      prescriptionName,
      dosage,
      dailyIntake,
      prescriptionTimes,
      startDate: new Date().toISOString(), // Example start date
      endDate: null, // Example end date
    };

    onAddReminder(newReminder);

    // Update local storage
    const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
    localStorage.setItem('reminders', JSON.stringify([...reminders, newReminder]));

    // Reset form fields
    setPrescriptionName('');
    setDosage('1');
    setDailyIntake('1');
    setPrescriptionTimes(initialPrescriptionTimes);

    toggleMainApp();
    navigate('/med-page');
  };

  const handleClose = () => {
    setPrescriptionName('');
    setDosage('1');
    setDailyIntake('1');
    setPrescriptionTimes(initialPrescriptionTimes);
    toggleMainApp();
  };

  const handleAddTime = () => {
    setPrescriptionTimes([...prescriptionTimes, '12:00']);
  };

  const handleTimeChange = (index, newTime) => {
    const updatedTimes = [...prescriptionTimes];
    updatedTimes[index] = newTime;
    setPrescriptionTimes(updatedTimes);
  };

  const handleDeleteTime = (index) => {
    if (prescriptionTimes.length > 1) {
      const updatedTimes = [...prescriptionTimes];
      updatedTimes.splice(index, 1);
      setPrescriptionTimes(updatedTimes);
    }
  };

  return (
    <div className={`mainapp-overlay ${showMainApp ? 'show' : ''}`}>
      <div className="mainapp-content">
        <div className="login-page">
          <div className="login-container">
            <form className="login-form" onSubmit={handleAddReminder}>
              <div className="title-top">
              <h2 className="login-title">Reminder</h2>
              <p className='login-description'>
                Add a reminder to make sure your don't miss your medication.
              </p>
              </div>

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
                      <option key={i + 1} value={i + 1}>{i + 1} tablet{ i > 0 && 's' }</option>
                    ))}
                  </select>
                </div>
              </div>

              {prescriptionTimes.map((time, index) => (
                <div className="login-form-group" key={index}>
                  <label className="login-form-label">Reminder Time:</label>
                  <TimePicker
                    value={time}
                    onChange={(newTime) => handleTimeChange(index, newTime)}
                    disableClock={true}
                    className="login-form-input-time"
                    clearIcon={null}
                    clockIcon={null}
                  />
                  {index > 0 && (
                    <button type="button" className='remove-time' onClick={() => handleDeleteTime(index)}>Remove</button>
                  )}
                </div>
              ))}

              <div className="button-container">
                <button type="submit" className="login-form-button">Add Reminder</button>
                <button type="button" className="add-time-button" onClick={handleAddTime}>Add Time Slot</button>
                <button type="button" className="close-button" onClick={handleClose}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainapp;
