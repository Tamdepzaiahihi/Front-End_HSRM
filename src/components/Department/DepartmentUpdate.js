import React, { useState, useEffect } from 'react';
import { updateDepartment, getDepartmentById } from '../../app/ManageDepartmentAPI'; // Import your API functions
import { useParams, useNavigate } from 'react-router-dom';



const DepartmentUpdate = () => {
  const { id } = useParams();
  const [department, setDepartment] = useState({
    name: '',
    local: '', // Add the 'local' field
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartment();
  }, [id]);

  const fetchDepartment = async () => {
    const departmentData = await getDepartmentById(id);
    if (departmentData) {
      setDepartment(departmentData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedDepartment = await updateDepartment(id, department);
    if (updatedDepartment) {
      navigate('/listDepartments');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Update Department</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={department.name}
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
            value={department.local}
            onChange={handleInputChange}
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
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

export default DepartmentUpdate;
