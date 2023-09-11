import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1/manager/attendances';

// Get all attendances
export const getAllAttendances = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching attendances:', error);
    return [];
  }
};

// Get attendance by ID
export const getAttendanceById = async (attendanceId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${attendanceId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching attendance:', error);
    return null;
  }
};

// Create a new attendance
export const createAttendance = async (attendanceDto) => {
  try {
    const response = await axios.post(BASE_URL, attendanceDto);
    return response.data;
  } catch (error) {
    console.error('Error creating attendance:', error);
    return null;
  }
};

// Update attendance by ID
export const updateAttendance = async (attendanceId, updatedAttendance) => {
  try {
    const response = await axios.put(`${BASE_URL}/${attendanceId}`, updatedAttendance);
    return response.data;
  } catch (error) {
    console.error('Error updating attendance:', error);
    return null;
  }
};

// Delete attendance by ID
export const deleteAttendance = async (attendanceId) => {
  try {
    await axios.delete(`${BASE_URL}/${attendanceId}`);
    return true;
  } catch (error) {
    console.error('Error deleting attendance:', error);
    return false;
  }
};
