import React from 'react';
import './summary.css';

const Summary = ({ reminders, onDeleteReminder }) => {
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
              <th className="nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder, index) => (
              <tr key={index}>
                <td className="nowrap">{reminder.prescriptionName}</td>
                <td className="nowrap">{reminder.dosage}</td>
                <td className="nowrap">{reminder.prescriptionTimes.join(', ')}</td>
                <td className="nowrap">{reminder.dailyIntake}</td>
                <td>
                  <button onClick={() => onDeleteReminder(index)} className="item-container-delete">Delete</button>
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
