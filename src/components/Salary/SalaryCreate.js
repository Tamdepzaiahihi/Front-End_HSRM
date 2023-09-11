import React, { useState } from 'react';
import { createSalary } from '../../app/SalaryAPI';
import { useNavigate } from 'react-router-dom';



const SalaryCreate = () => {
  const [newSalary, setNewSalary] = useState({
    amount: 0,
    coefficient: 0,
    bonus: 0,
    effectiveDate: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSalary({ ...newSalary, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdSalary = await createSalary(newSalary);
    if (createdSalary) {
      navigate('/listSalary'); // Update this line to use the navigate function without push
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Create Salary</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={newSalary.amount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Coefficient</label>
          <input
            type="number"
            name="coefficient"
            value={newSalary.coefficient}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Bonus</label>
          <input
            type="number"
            name="bonus"
            value={newSalary.bonus}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Effective Date</label>
          <input
            type="date"
            name="effectiveDate"
            value={newSalary.effectiveDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
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

export default SalaryCreate;
