import React, { useState, useEffect } from 'react';
import { getAllAttendances, deleteAttendance } from '../../app/ManageAttendanceAPI'; // Import your API functions
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation

const AttendanceList = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    fetchAttendances();
  }, []);

  const fetchAttendances = async () => {
    const attendanceList = await getAllAttendances();
    setAttendances(attendanceList);
  };

  const handleDelete = async (attendanceId) => {
    const isDeleted = await deleteAttendance(attendanceId);
    if (isDeleted) {
      fetchAttendances();
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance List</h2>
      <Link to="/createAttendance" className="mb-4 text-blue-500 hover:underline">
        Create New Attendance
      </Link>
      <table className="min-w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {attendances.map((attendance) => (
            <tr key={attendance.id}>
              <td className="py-2 px-4">{attendance.id}</td>
              <td className="py-2 px-4">{attendance.date}</td>
              <td className="py-2 px-4">{attendance.status ? 'Present' : 'Absent'}</td>
              <td className="py-2 px-4">
                <Link to={`/updateAttendance/${attendance.id}`} className="text-blue-500 hover:underline mr-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(attendance.id)} className="text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
