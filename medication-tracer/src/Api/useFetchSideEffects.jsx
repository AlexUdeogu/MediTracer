// useFetchSideEffects.js
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSideEffects = async (drugName) => {
  const response = await axios.get(`https://api.fda.gov/drug/event.json`, {
    params: {
      search: `patient.drug.medicinalproduct:"${drugName}"`,
      count: 'patient.reaction.reactionmeddrapt.exact',
      
    }
  });
  return response.data.results;
};

const useFetchSideEffects = (drugName) => {
  return useQuery(['sideEffects', drugName], () => fetchSideEffects(drugName), {
    enabled: !!drugName
  });
};

export default useFetchSideEffects;
