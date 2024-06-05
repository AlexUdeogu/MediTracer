import React, { useState, useEffect } from 'react';
import './summary.css';

const Summary = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
    setReminders(storedReminders);
  }, []);

  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));
  };

  return (
    <div>
      {reminders.length > 0 && (
        <table className="med-table">
          <thead>
            <tr>
              <th className="nowrap">Prescription Name</th>
              <th className="nowrap">Dosage</th>
              <th className="nowrap">Prescription Time</th>
              <th className="nowrap">Daily Intake</th>
              <th className="nowrap">Starting From</th>
              <th className="nowrap">Ending On</th>
              <th className="nowrap">Description</th>
              <th className="nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder, index) => (
              <tr key={index}>
                <td className="nowrap">{reminder.prescriptionName}</td>
                <td className="nowrap">{reminder.dosage}</td>
                <td className="nowrap">{reminder.secondPrescriptionTime}</td>
                <td className="nowrap">{reminder.dailyIntake}</td>
                <td className="nowrap">{new Date(reminder.startDate).toLocaleDateString()}</td>
                <td className="nowrap">{new Date(reminder.endDate).toLocaleDateString()}</td>
                <td className="nowrap">{reminder.description}</td>
                <td>
                  <button onClick={() => deleteReminder(index)} className="item-container-delete">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Summary;
