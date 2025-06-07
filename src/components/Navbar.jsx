import React from 'react'
import logo from "../images/logos/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="nav flex px-20 items-center justify-between h-20 bg-black shadow-md">
        <img src={logo} className="w-60 object-contain" alt="Logo" />

        <div className="links flex items-center space-x-6 text-gray-300 font-large">
          <Link className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer">Home</Link>
          <Link className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer">About</Link>
          <Link className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer">Services</Link>
          <Link className="hover:text-indigo-400 transition-colors duration-300 cursor-pointer">Contact</Link>
          <button 
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("isLoggedIn");
              window.location.reload();
            }} 
            className="bg-red-600 hover:bg-red-700 transition-colors duration-300 px-5 py-2 rounded text-white font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
