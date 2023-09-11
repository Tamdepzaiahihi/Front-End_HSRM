import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1/manager/departments';

// Get all departments
export const getAllDepartments = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    return [];
  }
};

// Get department by ID
export const getDepartmentById = async (departmentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${departmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching department:', error);
    return null;
  }
};

// Create a new department
export const createDepartment = async (departmentDto) => {
  try {
    const response = await axios.post(BASE_URL, departmentDto);
    return response.data;
  } catch (error) {
    console.error('Error creating department:', error);
    return null;
  }
};

// Update department by ID
export const updateDepartment = async (departmentId, updatedDepartment) => {
  try {
    const response = await axios.put(`${BASE_URL}/${departmentId}`, updatedDepartment);
    return response.data;
  } catch (error) {
    console.error('Error updating department:', error);
    return null;
  }
};

// Delete department by ID
export const deleteDepartment = async (departmentId) => {
  try {
    await axios.delete(`${BASE_URL}/${departmentId}`);
    return true;
  } catch (error) {
    console.error('Error deleting department:', error);
    return false;
  }
};
