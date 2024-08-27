import React from 'react';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-6 w-full">+ New</button>
      <div className="space-y-4">
        <div className="p-2 hover:bg-gray-200 cursor-pointer">
          <p className="font-semibold">Sales Report 2023</p>
          <p className="text-sm text-gray-500">Last updated 2 days ago</p>
        </div>
        <div className="p-2 hover:bg-gray-200 cursor-pointer">
          <p className="font-semibold">Inventory Tracker</p>
          <p className="text-sm text-gray-500">Last updated 1 week ago</p>
        </div>
        <div className="p-2 hover:bg-gray-200 cursor-pointer">
          <p className="font-semibold">Budget Planner</p>
          <p className="text-sm text-gray-500">Last updated 3 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
