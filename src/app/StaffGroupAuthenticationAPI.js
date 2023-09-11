import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1/basic_staff/auth';

// Login for basic staff group authentication
export const loginStaffGroup = async (credentialsDto) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentialsDto);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

// Register for basic staff group authentication
export const registerStaffGroup = async (registerDto) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, registerDto);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    return null;
  }
};

// Logout for basic staff group authentication
export const logoutStaffGroup = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/logout`);
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    return null;
  }
};

// Refresh token for basic staff group authentication
export const refreshStaffGroupToken = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/refresh`);
    return response.data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

// Change password for basic staff group authentication
export const changeStaffGroupPassword = async (credentialsDto) => {
  try {
    const response = await axios.put(`${BASE_URL}/change-password`, credentialsDto);
    return response.data;
  } catch (error) {
    console.error('Error changing password:', error);
    return null;
  }
};
