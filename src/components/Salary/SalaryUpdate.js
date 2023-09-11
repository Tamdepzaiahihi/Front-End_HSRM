import React, { useState, useEffect } from 'react';
import { updateSalary, getSalaryById } from '../../app/SalaryAPI';
import { useParams, useNavigate } from 'react-router-dom';



const SalaryUpdate = () => {
  const { id } = useParams();
  const [salary, setSalary] = useState({
    amount: 0,
    coefficient: 0,
    bonus: 0,
    effectiveDate: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchSalary();
  }, [id]);

  const fetchSalary = async () => {
    const salaryData = await getSalaryById(id);
    if (salaryData) {
      setSalary(salaryData);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSalary({ ...salary, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedSalary = await updateSalary(id, salary);
    if (updatedSalary) {
      navigate.push('/listSalary');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Update Salary</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="amount" className="text-sm font-medium mb-1">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={salary.amount}
            onChange={handleInputChange}
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="coefficient" className="text-sm font-medium mb-1">
            Coefficient:
          </label>
          <input
            type="number"
            id="coefficient"
            name="coefficient"
            value={salary.coefficient}
            onChange={handleInputChange}
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bonus" className="text-sm font-medium mb-1">
            Bonus:
          </label>
          <input
            type="number"
            id="bonus"
            name="bonus"
            value={salary.bonus}
            onChange={handleInputChange}
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="effectiveDate" className="text-sm font-medium mb-1">
            Effective Date:
          </label>
          <input
            type="date"
            id="effectiveDate"
            name="effectiveDate"
            value={salary.effectiveDate}
            onChange={handleInputChange}
            className="py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Update
        </button>
      </form>
    </div>
  );
};

export default SalaryUpdate;
