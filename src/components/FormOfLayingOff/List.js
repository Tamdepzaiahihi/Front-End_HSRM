import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllFormOfLayingOff, deleteFormOfLayingOff } from '../../app/FormOfLayingOffAPI';

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      const data = await getAllFormOfLayingOff();
      setForms(data);
    };
    fetchForms();
  }, []);

  const handleDelete = async (formId) => {
    const isDeleted = await deleteFormOfLayingOff(formId);
    if (isDeleted) {
      // Refresh the form list
      const data = await getAllFormOfLayingOff();
      setForms(data);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Form List</h2>
      <Link to="/addForm" className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 inline-block">
        Create New Form
      </Link>
      <ul>
        {forms.map((form) => (
          <li key={form.id} className="mb-4 p-4 border rounded-md">
            <div className="mb-2">
              <strong>ID:</strong> {form.id}
            </div>
            <div className="mb-2">
              <strong>Date:</strong> {form.date}
            </div>
            <div className="mb-2">
              <strong>Reason:</strong> {form.reason}
            </div>
            <div className="mb-2">
              <strong>Severance Packet:</strong> {form.severancePacket}
            </div>
            <div>
              <Link
                to={`/update/${form.id}`}
                className="bg-green-500 text-white py-1 px-2 rounded-md mr-2 hover:bg-green-600"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(form.id)}
                className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
