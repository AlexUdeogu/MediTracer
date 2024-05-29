import React, { useState } from 'react';
import './medpage.css';
import { Link } from "react-router-dom";

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
          <li><a href="#"><botton type="submit" className="item-container"> JD </botton></a></li>
        </ul>
      </nav>
      <div className="mainpage">
        <div className="mainpage-title">
          <h1 className='mainpage-head'>Medications</h1>
          <p>Manage your reminders and view their health performance.</p>
        </div>
        {rows.length > 0 && (
          <table className="med-table">
            <thead>
              <tr>
                <th className="nowrap">Prescription Name</th>
                <th className="nowrap">Dosage</th>
                <th className="nowrap">Prescription Time</th>
                <th className="nowrap">Daily Intake</th>
                <th className="nowrap">Ending On</th>
                <th className="nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((_, index) => (
                <tr key={index}>
                  <td className="nowrap">Row {index + 1}, Col 1</td>
                  <td className="nowrap">Row {index + 1}, Col 2</td>
                  <td className="nowrap">Row {index + 1}, Col 3</td>
                  <td className="nowrap">Row {index + 1}, Col 4</td>
                  <td className="nowrap">Row {index + 1}, Col 5</td>
                  <td>
                    <button onClick={() => editRow(index)} className="item-container-main">Edit</button>
                    <button onClick={() => deleteRow(index)} className="item-container-delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
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
