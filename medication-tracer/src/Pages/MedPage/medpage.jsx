import React, { useState } from 'react';
import './medpage.css';
import { Link } from "react-router-dom";


const Medpage = () => {
  const [rows, setRows] = useState(Array.from({ length: 10 }, (_, rowIndex) => rowIndex + 1));

  const deleteRow = (index) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };

  return (
    <div>
        <nav>
            <a href='#' className='logo'> Medi<span className='logo-half'>Tracer</span></a>
            <ul>
                <li><a href="#service">@JohnDoe123</a></li>
                <li><a href="#"> <botton type="submit" className="item-container" > JD </botton></a></li>
            </ul>
        </nav>
      <div className="mainpage">
        <div className="mainpage-title">
          <h1 className='mainpage-head'>Medications</h1>
          <p>Manage your reminders and view their health performance.</p>
        </div>
        {(rows.length > 0) && (
          <table className="med-table">
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((_, index) => (
                <tr key={index}>
                  <td>Row {index + 1}, Col 1</td>
                  <td>Row {index + 1}, Col 2</td>
                  <td>Row {index + 1}, Col 3</td>
                  <td>Row {index + 1}, Col 4</td>
                  <td>Row {index + 1}, Col 5</td>
                  <td>
                    <button onClick={() => deleteRow(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        )}
        <div className="item-container-button">
        <Link Link to="/main-app"><botton type="submit" className="item-container-main" >Add new reminder</botton></Link>
        </div>
      </div>
    </div>
  );
};

export default Medpage;
