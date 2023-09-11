import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1/manager/salaries';

// Get all salaries
export const getAllSalaries = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching salaries:', error);
    return [];
  }
};

// Get salary by ID
export const getSalaryById = async (salaryId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${salaryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching salary by ID:', error);
    return null;
  }
};

// Create a new salary
export const createSalary = async (salaryDto) => {
  try {
    const response = await axios.post(BASE_URL, salaryDto);
    return response.data;
  } catch (error) {
    console.error('Error creating salary:', error);
    return null;
  }
};

// Update salary by ID
export const updateSalary = async (salaryId, updatedSalary) => {
  try {
    const response = await axios.put(`${BASE_URL}/${salaryId}`, updatedSalary);
    return response.data;
  } catch (error) {
    console.error('Error updating salary:', error);
    return null;
  }
};

// Delete salary by ID
export const deleteSalary = async (salaryId) => {
  try {
    await axios.delete(`${BASE_URL}/${salaryId}`);
    return true;
  } catch (error) {
    console.error('Error deleting salary:', error);
    return false;
  }
};
