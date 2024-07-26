import React, { useState, useEffect } from 'react';
import './summary.css';
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

  const [loading, setLoading] = useState(true);

  const { data: sideEffects, isLoading: sideEffectsLoading } = useFetchSideEffects(drugName);
  const { data: recallReports, isLoading: recallReportsLoading } = useFetchRecallReports(drugName);
  const { data: productLabeling, isLoading: productLabelingLoading } = useFetchProductLabeling(drugName);
  const { data: ndcDirectory, isLoading: ndcDirectoryLoading } = useFetchNdcDirectory(drugName);
  const { data: drugsAtFda, isLoading: drugsAtFdaLoading } = useFetchDrugsAtFda(drugName);

  useEffect(() => {
    if (!sideEffectsLoading && !recallReportsLoading && !productLabelingLoading && !ndcDirectoryLoading && !drugsAtFdaLoading) {
      setLoading(false);
    }
  }, [sideEffectsLoading, recallReportsLoading, productLabelingLoading, ndcDirectoryLoading, drugsAtFdaLoading]);

  const truncateArray = (arr, maxLength) => arr ? arr.slice(0, Math.ceil(maxLength / 4)) : [];

  return (
    <div className='med-summary'>
      <button className='close-btn' onClick={onDeleteReminder}>X</button>
        <div className="drug-title">
          <h1 className='drug'>{drugName}</h1>
        </div>
        <div className="drug-info">
          <p><span className='info-title'>Reminder Time:</span> {reminderTime || 'Time not set' }</p>
          <p><span className='info-title'>Dosage:</span> {productLabeling?.dosage_and_administration || 'Information not available'}</p>
          <p><span className='info-title'>Adverse Effects:</span> {sideEffects ? truncateArray(sideEffects.map(effect => effect.term), sideEffects.length).join(', ') : 'Information not available'}</p>
          <p><span className='info-title'>Product labeling:</span> {productLabeling?.indications_and_usage || 'Information not available'}</p>
          <p><span className='info-title'>Recall enforcement reports:</span> {recallReports ? truncateArray(recallReports.map(report => report.reason_for_recall), recallReports.length).join(', ') : 'Information not available'}</p>
          <p><span className='info-title'>NDC Directory:</span> {ndcDirectory?.product_ndc || 'Information not available'}</p>
          <p><span className='info-title'>Drugs@FDA:</span> {drugsAtFda?.application_number || 'Information not available'}</p>
          <p className='footer-text-2'> FDA data provided.</p>

        </div>
    </div>
  );
};

export default Summary;
