// import Image from 'next/image'
// import Link from 'next/link'

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-[#1E1E1E] p-4 flex flex-col">
//       <div className="flex items-center mb-8">
//         <Image src="/logo.svg" alt="Logo" width={40} height={40} className="mr-2" />
//         <div className="flex items-center text-sm">
//           <span className="bg-gray-700 rounded-full w-2 h-2 mr-1"></span>
//           <span className="text-gray-400">addr...21sw2</span>
//           <button className="ml-1 text-purple-500">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <nav className="flex-1">
//         <ul>
//           <li className="mb-4">
//             <Link href="#" className="flex items-center text-gray-300 hover:text-white">
//               <span className="mr-2">🎯</span> Deals
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center text-gray-300 hover:text-white">
//               <span className="mr-2">💰</span> Investments
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="flex justify-between text-gray-400"
//        style={{  background: '#212121' }}
//       >
//       <a href="#" className="text-gray-400 hover:text-white">
//             <Image
//               src="/images/ant-design_x-outlined.jpg"
//               alt="Twitter"
//               width={24}
//               height={24}
//             />
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white ">
//             <Image
//               src="/images/instagram-one.jpg"
//               alt="Instagram"
//               width={24}
//               height={24}
//             />
//           </a>
//           <a href="#" className="text-gray-400 hover:text-white">
//             <Image src="/images/mail.jpg" alt="Email" width={24} height={24} />
//           </a>
//       </div>
//     </aside>
//   )
// }

import Image from 'next/image';

const Sidebar = () => {
  return (
    <aside
      className="max-h-screen bg-gray-900 p-4 flex flex-col rounded-lg flex-shrink-0 mt-2 ml-4"
      style={{ width: '286px',height:'970px', background: '#141414', borderRadius: '12px' }}
    >
      <div className="flex items-center mb-10 ">
        {/* Logo */}
        <Image
          src="/images/Logo (2).jpg"
          alt="Logo"
          width={65}
          height={26}
          className="flex-shrink-0"
        />

        {/* Space between Logo and Cardano */}
        <div className="flex-shrink-0 w-4" />

        {/* Cardano Image with Rounded Border */}
        <div
          className="flex items-center justify-center"
          style={{
            width: '36px',
            height: '36px',
           
            overflow: 'hidden', // Ensure the image fits within the rounded border
          }}
        >
          <Image
            src="/images/formkit_cardano (1).jpg"
            alt="Cardano"
            width={36}
            height={36} // Make the height and width equal to match the container
            borderRadius={50}
            className="flex-shrink-0"
          />
        </div>

        {/* Space between Cardano and Address */}
        <div className="flex-shrink-0 w-4" />

        {/* Address and Image inside a Rectangle */}
        <div
          className="flex items-center px-2"
          style={{
            width: '127px',
            height: '36px',
            borderRadius: '9px',
            border: '1px solid #2B2B2B',
            background: '#252525',
          }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: 'Helvetica',
              fontSize: '13px',
              fontWeight: '400',
              lineHeight: '25px',
              letterSpacing: '0.13px',
            }}
          >
            addr..21sw2
          </span>
          <Image
            src="/images/Group 330.jpg"
            alt="Image"
            width={30}
            height={30}
            className="ml-2 flex-shrink-0"
          />
        </div>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center text-gray-300 hover:text-white">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Deals
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center text-white">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Investments
            </a>
          </li>
        </ul>
      </nav>

    <div
        className="flex justify-between bg-gray-700"
        style={{  background: '#212121' }}
      >
        <div className="flex justify-center space-x-4 ">
          <a href="#" className="text-gray-400 hover:text-white">
            <Image
              src="/images/ant-design_x-outlined.jpg"
              alt="Twitter"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-white ">
            <Image
              src="/images/instagram-one.jpg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Image src="/images/mail.jpg" alt="Email" width={24} height={24} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
