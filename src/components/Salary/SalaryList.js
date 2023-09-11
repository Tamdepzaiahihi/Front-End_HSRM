import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllSalaries, deleteSalary } from '../../app/SalaryAPI';



const SalaryList = () => {
  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    fetchSalaries();
  }, []);

  const fetchSalaries = async () => {
    const salaryList = await getAllSalaries();
    setSalaries(salaryList);
  };

  const handleDelete = async (salaryId) => {
    const isDeleted = await deleteSalary(salaryId);
    if (isDeleted) {
      fetchSalaries();
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Salary List</h2>
      <Link to="/addSalary" className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 inline-block">
        Create New Salary
      </Link>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Coefficient</th>
              <th className="px-4 py-2">Bonus</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Effective Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salary) => (
              <tr key={salary.id} className="border-b">
                <td className="px-4 py-2">{salary.id}</td>
                <td className="px-4 py-2">{salary.amount}</td>
                <td className="px-4 py-2">{salary.coefficient}</td>
                <td className="px-4 py-2">{salary.bonus}</td>
                <td className="px-4 py-2">{salary.total}</td>
                <td className="px-4 py-2">{salary.effectiveDate}</td>
                <td className="px-4 py-2">
                  <div className="flex">
                    <Link
                      to={`/editSalary/${salary.id}`}
                      className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(salary.id)}
                      className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryList;
