import React from 'react';
import './summary.css';
import useFetchSideEffects from '../../Api/useFetchSideEffects.jsx';



const Summary = ({ reminders, onDeleteReminder }) => {
  return (
    <div className='med-summary'>
      {reminders.length > 0 && (
        <table className="med-table">
          <thead>
            <tr>
              <th className="nowrap">Prescription Name</th>
              <th className="nowrap">Adverse Effects</th>
              <th className="nowrap">Dosage</th>
              <th className="nowrap">Prescription Time</th>
              <th className="nowrap">Daily Intake</th>
              <th className="nowrap">Action</th>
            </tr>
          </thead>
          <tbody  style={{ backgroundColor: '#f8f8f8' }}>
            {reminders.map((reminder, index) => {
              const { data: sideEffects, isLoading, isError } = useFetchSideEffects(reminder.prescriptionName, 3); // Fetch top 3 side effects
              return (
                <tr key={index} >
                  <td className="nowrap" >{reminder.prescriptionName}</td>
                  <td className="nowrap">
                    {isLoading ? 'Loading...' : isError ? 'Error retrive side effects' : (
                      <ul style={{ fontSize: '14px' }} >
                        {sideEffects?.slice(0, 3).map((effect, idx) => (
                          <p key={idx}>{effect.term}</p>
                        ))}
                        {sideEffects?.length === 0 && 'No side effects found'}
                      </ul>
                    )}
                  </td>
                  <td className="nowrap">{reminder.dosage}</td>
                  <td className="nowrap">{reminder.prescriptionTimes.join(', ')}</td>
                  <td className="nowrap">{reminder.dailyIntake}</td>
                  <td>
                    <button onClick={() => onDeleteReminder(index)} className="item-container-delete">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Summary;
