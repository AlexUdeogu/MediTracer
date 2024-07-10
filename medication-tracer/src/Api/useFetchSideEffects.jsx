// useFetchSideEffects.js
import { useQuery } from 'react-query';
import axios from 'axios';

/**
 * Fetches the side effects data for a given drug name from the FDA API.
 *
 * @param {string} drugName - The name of the drug to search for.
 * @returns {Promise<Object>} - A promise that resolves to the side effects data.
 */
const fetchSideEffects = async (drugName) => {
  // Construct the URL for the FDA API call
  const url = 'https://api.fda.gov/drug/event.json';
  // Construct the search parameters for the API call
  const params = {
    search: `patient.drug.medicinalproduct:"${drugName}"`, // search for the given drug name
    count: 'patient.reaction.reactionmeddrapt.exact', // count the number of side effects
  };
  // Make the API call using axios
  const response = await axios.get(url, { params });
  // Return the data from the API call
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
