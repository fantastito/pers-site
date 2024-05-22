import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkStyle = "text-gray-700";

  return (
    <nav className="mb-8 p-4 border rounded-md border-gray-200 bg-grey-100">
      <ul className="flex justify-right space-x-4">
        <li>
          <NavLink to="/engineer" className={({ isActive }) => isActive ? activeLinkStyle + " text-gray-700 font-medium" : "text-blue-500 hover:text-blue-700 font-medium"}>
            Software engineer
          </NavLink>
        </li>
        <li>
          <NavLink to="/photography" className={({ isActive }) => isActive ? activeLinkStyle + " text-gray-700 font-medium" : "text-blue-500 hover:text-blue-700 font-medium"}>
            Photography
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
