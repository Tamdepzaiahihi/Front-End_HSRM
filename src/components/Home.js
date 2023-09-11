import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
    <h2 className="text-3xl font-semibold mb-4">Welcome to HSRM App</h2>
    <div className="space-x-4">
      <Link to="/register">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Register
        </button>
      </Link>
      <Link to="/login">
        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Home