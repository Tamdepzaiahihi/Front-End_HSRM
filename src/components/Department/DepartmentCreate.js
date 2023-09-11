import React, { useState } from 'react';
import { createDepartment } from '../../app/ManageDepartmentAPI'; // Import your API function for creating a department
import { useNavigate } from 'react-router-dom';



const DepartmentCreate = () => {
  const [newDepartment, setNewDepartment] = useState({
    name: '',
    local: '', // Add the 'local' field
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDepartment({ ...newDepartment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdDepartment = await createDepartment(newDepartment);
    if (createdDepartment) {
      navigate('/listDepartments');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Create Department</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newDepartment.name}
            onChange={handleInputChange}
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="local" className="text-sm font-medium mb-1">
            Local:
          </label>
          <input
            type="text"
            id="local"
            name="local"
            value={newDepartment.local}
            onChange={handleInputChange}
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default DepartmentCreate;
