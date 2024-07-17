import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainapp.css';

const Mainapp = ({ toggleMainApp, showMainApp, onAddReminder }) => {
  const navigate = useNavigate();
  const initialPrescriptionTimes = [];
  const [prescriptionName, setPrescriptionName] = useState('');
  const [prescriptionTimes, setPrescriptionTimes] = useState(initialPrescriptionTimes);

  const handleAddReminder = (e) => {
    e.preventDefault();
    const newReminder = {
      prescriptionName,
      prescriptionTimes,
      startDate: new Date().toISOString(),
      endDate: null,
    };

    onAddReminder(newReminder);

    localStorage.setItem('prescriptionName', prescriptionName);
    localStorage.setItem('reminderTimes', JSON.stringify(prescriptionTimes));

    setPrescriptionName('');
    setPrescriptionTimes(initialPrescriptionTimes);

    toggleMainApp();
    navigate('/med-page');
  };

  const handleClose = () => {
    setPrescriptionName('');
    setPrescriptionTimes(initialPrescriptionTimes);
    toggleMainApp();
  };

  const handleAddTime = () => {
    setPrescriptionTimes([...prescriptionTimes, '']);
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
                <h2 className="login-title">Medication</h2>
                <p className="login-description">
                Input a drug and get information from trusted sources.
                </p>
              </div>

              <div className="name-fields">
                <div className="login-form-group">
                  <label htmlFor="prescription-name" className="login-form-label">Medication Name:</label>
                  <input
                    className="login-form-input"
                    id="prescription-name"
                    placeholder="Paracetamol"
                    value={prescriptionName}
                    onChange={(e) => setPrescriptionName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {prescriptionTimes.map((time, index) => (
                <div className="login-form-group" key={index}>
                  <label className="login-form-label">Reminder Time:</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => handleTimeChange(index, e.target.value)}
                    className="login-form-input-time"
                    required
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      className="remove-time"
                      onClick={() => handleDeleteTime(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              <div className="button-container">
                <button type="submit" className="login-form-button">Add Medication</button>
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
