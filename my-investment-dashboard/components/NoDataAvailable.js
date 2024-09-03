// const NoDataAvailable = () => {
//     return (
//       <div className="flex flex-col items-center justify-center h-64">
//         <svg className="w-16 h-16 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//         </svg>
//         <p className="text-gray-500 text-xl">No data available!</p>
//       </div>
//     );
//   };
  
//   export default NoDataAvailable;

const NoDataAvailable = () => {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <img 
          src="/images/Group_14582977__1_-removebg-preview.png" 

          alt="No Data Available" 
          className="w-16 h-16 mb-4"
        />
        <p className="text-gray-500 text-xl">No data available!</p>
      </div>
    );
  };
  
  export default NoDataAvailable;
  