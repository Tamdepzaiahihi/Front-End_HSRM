import React from 'react';

function UserList() {
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    // Add more user data here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">
                <div className='flex justify-center items-center'>
                <button className="bg-green-500 text-white px-2 py-1 ml-2 rounded">
                  View
                </button>
                <button className="bg-blue-500 text-white px-2 py-1 ml-2 rounded">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 ml-2 rounded">
                  Delete
                </button>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
