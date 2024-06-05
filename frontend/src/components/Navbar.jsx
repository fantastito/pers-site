import React,  { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkStyle = "text-black underline";

  return (
    <nav className="mb-8 p-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="text-black font-bold">
          <NavLink to="/">
            Simon Budden
          </NavLink>
        </div>
        <div className="flex sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-black hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`flex-col sm:flex sm:flex-row sm:space-x-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <li>
            <NavLink to="/engineer" className={({ isActive }) => isActive ? activeLinkStyle + " font-medium" : "text-black hover:text-gray-700 font-medium"}>
              Software engineer
            </NavLink>
          </li>
          <li>
            <NavLink to="/photography" className={({ isActive }) => isActive ? activeLinkStyle + " font-medium" : "text-black hover:text-gray-700 font-medium"}>
              Photography
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
