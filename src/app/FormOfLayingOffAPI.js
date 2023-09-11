import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1/manager/formOfLayingOff';

// Get all forms of laying off
export const getAllFormOfLayingOff = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching forms of laying off:', error);
    return [];
  }
};

// Get form of laying off by ID
export const getFormOfLayingOffById = async (formOfLayingOffId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${formOfLayingOffId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching form of laying off:', error);
    return null;
  }
};

// Create a new form of laying off
export const createFormOfLayingOff = async (formOfLayingOffDto) => {
  try {
    const response = await axios.post(BASE_URL, formOfLayingOffDto);
    return response.data;
  } catch (error) {
    console.error('Error creating form of laying off:', error);
    return null;
  }
};

// Update form of laying off by ID
export const updateFormOfLayingOff = async (formOfLayingOffId, updatedFormOfLayingOff) => {
  try {
    const response = await axios.put(`${BASE_URL}/${formOfLayingOffId}`, updatedFormOfLayingOff);
    return response.data;
  } catch (error) {
    console.error('Error updating form of laying off:', error);
    return null;
  }
};

// Delete form of laying off by ID
export const deleteFormOfLayingOff = async (formOfLayingOffId) => {
  try {
    await axios.delete(`${BASE_URL}/${formOfLayingOffId}`);
    return true;
  } catch (error) {
    console.error('Error deleting form of laying off:', error);
    return false;
  }
};
