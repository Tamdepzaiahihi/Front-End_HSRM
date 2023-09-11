import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1/basic_staff/view';

// Get salary by ID
export const getSalaryById = async (salaryId) => {
  try {
    const response = await axios.get(`${BASE_URL}/salary/${salaryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching salary:', error);
    return null;
  }
};

// Get attendance by ID
export const getAttendanceById = async (attendanceId) => {
  try {
    const response = await axios.get(`${BASE_URL}/attendance/${attendanceId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching attendance:', error);
    return null;
  }
};

// Get position by ID
export const getPositionById = async (positionId) => {
  try {
    const response = await axios.get(`${BASE_URL}/position/${positionId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching position:', error);
    return null;
  }
};

// Get department by ID
export const getDepartmentById = async (departmentId) => {
  try {
    const response = await axios.get(`${BASE_URL}/department/${departmentId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching department:', error);
    return null;
  }
};
