import React, { useState, useEffect } from 'react';
import './summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useFetchSideEffects,
  useFetchRecallReports,
  useFetchProductLabeling,
  useFetchNdcDirectory,
  useFetchDrugsAtFda
} from '../../Api/useFetchSideEffects.jsx';
import { motion } from 'framer-motion';

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

  const truncateArray = (arr, maxLength) => arr ? arr.slice(0, Math.ceil(maxLength / 3.5)) : [];

  return (
    <div className='med-summary'>
      <button className='close-btn' onClick={onDeleteReminder}>X</button>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="drug-info-container"
      >
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
      </motion.div>
      {loading && <p className="loading-text" style={{ color: '#1C3A3E' }}>Loading...</p>}
    </div>
  );
};

export default Summary;
