import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkStyle = "text-black underline";

  return (
    <nav className="mb-8 p-4 bg-white">
      <div className="flex justify-between items-center">
        <div className="text-black font-bold">
          Simon Budden
        </div>
        <ul className="flex space-x-4">
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
