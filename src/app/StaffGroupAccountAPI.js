import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/v1/basic_staff/account';

// Get basic staff group account by name
export const getStaffGroupAccount = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}?name=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching basic staff group account:', error);
    return null;
  }
};

// Update basic staff group account
export const updateStaffGroupAccount = async (basicStaffGroupDto) => {
  try {
    const response = await axios.put(BASE_URL, basicStaffGroupDto);
    return response.data;
  } catch (error) {
    console.error('Error updating staff group account:', error);
    return null;
  }
};

// Update basic staff group account password
export const updateStaffGroupAccountPassword = async (updatePasswordDto) => {
  try {
    const response = await axios.put(`${BASE_URL}/password`, updatePasswordDto);
    return response.data;
  } catch (error) {
    console.error('Error updating basic staff group account password:', error);
    return null;
  }
};
