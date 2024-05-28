import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker'; // Importing the TimePicker component
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css'; // Importing TimePicker styles
import { Link } from "react-router-dom";
import './Mainapp.css';

export const Mainapp = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [secondPrescriptionTime, setSecondPrescriptionTime] = useState('12:00'); // New state for the second prescription time

  return (
    <div>
        <nav>
            <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
            <ul>
                <li><a href="#service">@JohnDoe123</a></li>
                <li><a href="#"> <botton type="submit" className="item-container" > JD </botton></a></li>
            </ul>
        </nav>
      <div className="login-page">
        <div className="login-container">
          <form className="login-form">
            <h2 className="login-title">Reminder VI</h2>
            
            <div className="name-fields">
              <div className="login-form-group">
                <label htmlFor="prescription-name" className="login-form-label">Prescription Name:</label>
                <input className="login-form-input" id="prescription-name" placeholder="Paracetamol" />
              </div>
              <div className="login-form-group">
                <label htmlFor="dosage" className="login-form-label">Dosage:</label>
                <select className="login-form-input" id="dosage">
                  <option value="1">1 tablet</option>
                  <option value="2">2 tablets</option>
                  <option value="3">3 tablets</option>
                  <option value="4">4 tablets</option>
                  <option value="5">5 tablets</option>
                  <option value="6">6 tablets</option>
                  <option value="7">7 tablets</option>
                  <option value="8">8 tablets</option>
                  <option value="9">9 tablets</option>
                  <option value="10">10 tablets</option>
                </select>
              </div>
            </div>

            <div className="name-fields">
              <div className="login-form-group">
                <label htmlFor="second-prescription-time" className="login-form-label">Prescription Time:</label> {/* Changed label */}
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
                <label htmlFor="dosage" className="login-form-label">Dosage:</label>
                <select className="login-form-input" id="dosage">
                  <option value="1">1x Daily</option>
                  <option value="2">2x Daily</option>
                  <option value="3">3x Daily</option>
                  <option value="4">4x Daily</option>
                  <option value="5">5x Daily</option>
                  <option value="6">6x Daily</option>
                  <option value="7">7x Daily</option>
                  <option value="8">8x Daily</option>
                  <option value="9">9x Daily</option>
                  <option value="10">10x Daily</option>
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
              <textarea id="description" className="login-form-input-d" placeholder="Information about the medication" />
            </div>



            

            <button type="submit" className="login-form-button">Add reminder</button>
          </form>
        </div>
      </div>
    </div>
  );
};
