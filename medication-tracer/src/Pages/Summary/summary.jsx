import React, { useState, useEffect, useMemo } from 'react';
import './summary.css';
import { motion } from 'framer-motion';
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

  // Memoized fetch functions
  const sideEffectsFetch = useFetchSideEffects(drugName);
  const recallReportsFetch = useFetchRecallReports(drugName);
  const productLabelingFetch = useFetchProductLabeling(drugName);
  const ndcDirectoryFetch = useFetchNdcDirectory(drugName);
  const drugsAtFdaFetch = useFetchDrugsAtFda(drugName);

  const sideEffects = sideEffectsFetch.data;
  const recallReports = recallReportsFetch.data;
  const productLabeling = productLabelingFetch.data;
  const ndcDirectory = ndcDirectoryFetch.data;
  const drugsAtFda = drugsAtFdaFetch.data;

  const sideEffectsLoading = sideEffectsFetch.isLoading;
  const recallReportsLoading = recallReportsFetch.isLoading;
  const productLabelingLoading = productLabelingFetch.isLoading;
  const ndcDirectoryLoading = ndcDirectoryFetch.isLoading;
  const drugsAtFdaLoading = drugsAtFdaFetch.isLoading;

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
          {loading ? (
            <p className="loading-text" style={{ color: '#1C3A3E' }}>Loading...</p>
          ) : (
            <>
              <p><span className='info-title'>Reminder Time:</span> {reminderTime || 'Null'}</p>
              <p><span className='info-title'>Dosage:</span> {productLabeling?.dosage_and_administration || 'Information not available'}</p>
              <p><span className='info-title'>Adverse Effects:</span> {sideEffects ? truncateArray(sideEffects.map(effect => effect.term), sideEffects.length).join(', ') : 'Information not available'}</p>
              <p><span className='info-title'>Product labeling:</span> {productLabeling?.indications_and_usage || 'Information not available'}</p>
              <p><span className='info-title'>Recall enforcement reports:</span> {recallReports ? truncateArray(recallReports.map(report => report.reason_for_recall), recallReports.length).join(', ') : 'Information not available'}</p>
              <p><span className='info-title'>NDC Directory:</span> {ndcDirectory?.product_ndc || 'Information not available'}</p>
              <p><span className='info-title'>Drugs@FDA:</span> {drugsAtFda?.application_number || 'Information not available'}</p>
            </>
          )}
          <p className='footer-text-2'> FDA data provided.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Summary;
