import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">Spreadsheet App</div>
        <div className="space-x-4 hidden md:block">
          <a href="#" className="hover:text-gray-300">Features</a>
          <a href="#" className="hover:text-gray-300">Pricing</a>
          <a href="#" className="hover:text-gray-300">Support</a>
        </div>
      </div>
      <div className="space-x-4">
        <button className="bg-transparent hover:bg-white hover:text-black text-white py-2 px-4 rounded">Sign In</button>
        <button className="bg-white text-black py-2 px-4 rounded">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
