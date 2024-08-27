import React from 'react';

function MainContent() {
  return (
    <div className="flex-1 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sales Report 2023</h1>
        <div className="space-x-4">
          <button className="bg-gray-200 text-black px-4 py-2 rounded">Share</button>
          <button className="bg-gray-200 text-black px-4 py-2 rounded">Download</button>
        </div>
      </div>
      <div className="mt-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Month</th>
              <th className="py-2">Sales</th>
              <th className="py-2">Profit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">January</td>
              <td className="py-2">$120,000</td>
              <td className="py-2">$30,000</td>
            </tr>
            <tr>
              <td className="py-2">February</td>
              <td className="py-2">$150,000</td>
              <td className="py-2">$40,000</td>
            </tr>
            <tr>
              <td className="py-2">March</td>
              <td className="py-2">$180,000</td>
              <td className="py-2">$45,000</td>
            </tr>
            <tr>
              <td className="py-2">April</td>
              <td className="py-2">$200,000</td>
              <td className="py-2">$50,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="bg-gray-200 text-black px-4 py-2 rounded">Edit</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </div>
  );
}

export default MainContent;
