
import React from 'react';

const InvestmentTable = () => {
  const hasData = false; // This would typically be determined by your data source

  return (
    <div className="h-full rounded-lg overflow-hidden shadow-lg">
      <table className="w-full text-sm text-left text-gray-300 border border-gray-700 rounded-lg">
        <thead className="text-xs uppercase bg-gray-800 text-gray-400 rounded-lg">
          <tr>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">ID</th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">DEAL NAME</th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">INDICATIVE AMOUNT</th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">INVESTMENT AMOUNT</th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">EFFECTIVE INVESTMENT DATE</th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">CREATED DATE</th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">STATUS</th>
            <th scope="col" className="px-6 py-3 whitespace-nowrap">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {hasData ? (
            // Render table rows here when data is available
            <tr className="border-b bg-gray-800 border-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">Example Deal</td>
              <td className="px-6 py-4 whitespace-nowrap">$10,000</td>
              <td className="px-6 py-4 whitespace-nowrap">$9,500</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-09-15</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-09-10</td>
              <td className="px-6 py-4 whitespace-nowrap">Active</td>
              <td className="px-6 py-4 whitespace-nowrap">View</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center">
                <div className="flex flex-col items-center justify-center py-12">
                  <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <p className="text-gray-500 text-xl">No data available!</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
