import React from 'react';
import './summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useFetchSideEffects,
  useFetchRecallReports,
  useFetchProductLabeling,
  useFetchNdcDirectory,
  useFetchDrugsAtFda
} from '../../Api/useFetchSideEffects.jsx';

const Summary = ({ reminder, onDeleteReminder }) => {
  const drugName = reminder.prescriptionName;
  const reminderTime = reminder.prescriptionTimes.join(', ');

  const { data: sideEffects } = useFetchSideEffects(drugName);
  const { data: recallReports } = useFetchRecallReports(drugName);
  const { data: productLabeling } = useFetchProductLabeling(drugName);
  const { data: ndcDirectory } = useFetchNdcDirectory(drugName);
  const { data: drugsAtFda } = useFetchDrugsAtFda(drugName);

  // Helper function to truncate arrays
  const truncateArray = (arr, maxLength) => arr ? arr.slice(0, Math.ceil(maxLength / 2.5)) : [];

  return (
    <div className='med-summary'>
      <button className='close-btn' onClick={onDeleteReminder}>X</button>
      <div className="drug-info-container">
        <div className="drug-title">
          <h1 className='drug'>{drugName}</h1>
        </div>
        <div className="drug-info">
          <p><span className='info-title'>Reminder Time:</span> {reminderTime}</p>
          <p><span className='info-title'>Dosage:</span> {productLabeling?.dosage_and_administration || 'Information not available'}</p>
          <p><span className='info-title'>Adverse Effects:</span> {sideEffects ? truncateArray(sideEffects.map(effect => effect.term), sideEffects.length).join(', ') : 'Information not available'}</p>
          <p><span className='info-title'>Product labeling:</span> {productLabeling?.indications_and_usage || 'Information not available'}</p>
          <p><span className='info-title'>Recall enforcement reports:</span> {recallReports ? truncateArray(recallReports.map(report => report.reason_for_recall), recallReports.length).join(', ') : 'Information not available'}</p>
          <p><span className='info-title'>NDC Directory:</span> {ndcDirectory?.product_ndc || 'Information not available'}</p>
          <p><span className='info-title'>Drugs@FDA:</span> {drugsAtFda?.application_number || 'Information not available'}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
