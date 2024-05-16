import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkStyle = "text-red-500";

  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <NavLink to="/cv" className={({ isActive }) => isActive ? activeLinkStyle + " text-blue-500 font-medium" : "text-blue-500 hover:text-blue-700 font-medium"}>
            Software engineer
          </NavLink>
        </li>
        <li>
          <NavLink to="/photography" className={({ isActive }) => isActive ? activeLinkStyle + " text-blue-500 font-medium" : "text-blue-500 hover:text-blue-700 font-medium"}>
            Photography
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
