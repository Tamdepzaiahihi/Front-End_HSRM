import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = ({ onAdd }) => {
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [severancePacket, setSeverancePacket] = useState('');

  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const newForm = {
      id,
      date,
      reason,
      severancePacket,
    };

   
    // Call your create API function here, e.g., onAdd(newForm)
  };
  const handleCancel = () => {
    navigate('/ListForm');
  };  

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Add Form</h2>
      <form onSubmit={handleAdd}>
        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700 font-bold mb-2">
            ID
          </label>
          <input
            type="number"
            id="id"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block text-gray-700 font-bold mb-2">
            Reason
          </label>
          <input
            type="text"
            id="reason"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="severancePacket" className="block text-gray-700 font-bold mb-2">
            Severance Packet
          </label>
          <input
            type="text"
            id="severancePacket"
            name="severancePacket"
            value={severancePacket}
            onChange={(e) => setSeverancePacket(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="space-x-4">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            Save Changes
          </button>
          <button type="button" onClick={handleCancel} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
