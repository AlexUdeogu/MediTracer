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

const fetchRecallReports = async (drugName) => {
  const response = await axios.get(`https://api.fda.gov/drug/enforcement.json`, {
    params: {
      search: `product_description:"${drugName}"`,
      limit: 5,
    }
  });
  return response.data.results;
};

const fetchProductLabeling = async (drugName) => {
  const response = await axios.get(`https://api.fda.gov/drug/label.json`, {
    params: {
      search: `openfda.brand_name:"${drugName}"`,
      limit: 1,
    }
  });
  return response.data.results[0];
};

const fetchNdcDirectory = async (drugName) => {
  const response = await axios.get(`https://api.fda.gov/drug/ndc.json`, {
    params: {
      search: `brand_name:"${drugName}"`,
      limit: 1,
    }
  });
  return response.data.results[0];
};

const fetchDrugsAtFda = async (drugName) => {
  const response = await axios.get(`https://api.fda.gov/drug/drugsfda.json`, {
    params: {
      search: `products.brand_name:"${drugName}"`,
      limit: 1,
    }
  });
  return response.data.results[0];
};

const useFetchSideEffects = (drugName) => {
  return useQuery(['sideEffects', drugName], () => fetchSideEffects(drugName), {
    enabled: !!drugName
  });
};

const useFetchRecallReports = (drugName) => {
  return useQuery(['recallReports', drugName], () => fetchRecallReports(drugName), {
    enabled: !!drugName
  });
};

const useFetchProductLabeling = (drugName) => {
  return useQuery(['productLabeling', drugName], () => fetchProductLabeling(drugName), {
    enabled: !!drugName
  });
};

const useFetchNdcDirectory = (drugName) => {
  return useQuery(['ndcDirectory', drugName], () => fetchNdcDirectory(drugName), {
    enabled: !!drugName
  });
};

const useFetchDrugsAtFda = (drugName) => {
  return useQuery(['drugsAtFda', drugName], () => fetchDrugsAtFda(drugName), {
    enabled: !!drugName
  });
};

export {
  useFetchSideEffects,
  useFetchRecallReports,
  useFetchProductLabeling,
  useFetchNdcDirectory,
  useFetchDrugsAtFda
};
