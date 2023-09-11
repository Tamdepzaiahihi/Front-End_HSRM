import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllDepartments, deleteDepartment } from '../../app/ManageDepartmentAPI'; 



const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const departmentList = await getAllDepartments();
    setDepartments(departmentList);
  };

  const handleDelete = async (departmentId) => {
    const isDeleted = await deleteDepartment(departmentId);
    if (isDeleted) {
      fetchDepartments();
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Department List</h2>
      <Link
        to="/addDepartment"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mb-4 inline-block"
      >
        Create New Department
      </Link>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Local</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.name}</td>
              <td>{department.local}</td> {/* Display the 'local' field */}
              <td>
                <Link
                  to={`/editDepartment/${department.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(department.id)}
                  className="text-red-500 ml-4 hover:underline"
                >
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

export default DepartmentList;
