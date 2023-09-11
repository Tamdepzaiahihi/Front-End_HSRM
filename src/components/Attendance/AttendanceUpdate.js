import React, { useState, useEffect } from 'react';
import { updateAttendance, getAttendanceById } from '../../app/ManageAttendanceAPI'; // Import your API functions
import { useParams, useNavigate } from 'react-router-dom'; // If you're using React Router for navigation

const AttendanceUpdate = () => {
  const { id } = useParams();
  const [attendance, setAttendance] = useState({
    date: '',
    status: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAttendance();
  }, [id]);

  const fetchAttendance = async () => {
    const attendanceData = await getAttendanceById(id);
    if (attendanceData) {
      setAttendance(attendanceData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setAttendance({ ...attendance, [name]: type === 'checkbox' ? e.target.checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedAttendance = await updateAttendance(id, attendance);
    if (updatedAttendance) {
      navigate('/listAttendance'); // Redirect to the attendance list after updating a record
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Attendance</h2>
      <form onSubmit={handleSubmit}>
        {/* Date input */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={attendance.date}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Status (Present/Absent) checkbox */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Status</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="status"
              checked={attendance.status}
              onChange={handleInputChange}
              className="form-checkbox text-blue-500 focus:ring focus:ring-blue-200"
            />
            <span className="ml-2">Present</span>
          </label>
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default AttendanceUpdate;
