
import Sidebar from '../components/Sidebar';

import InvestmentTable from '../components/InvestementTable';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {/* <Header className="bg-black" /> */}
        <div className="flex-1 p-6 bg-black"> {/* Set background color to black */}
          {/* Container to align the heading and set its style */}
          <div className="flex items-center mb-4">
            <h1
              className="text-white font-bold"
              style={{
                fontFamily: '"OffBit Trial"',
                fontSize: '20px',
                fontWeight: '700',
                width: '137px',
                height: '22px',
              }}
            >
              My investments
            </h1>
          </div>
          <InvestmentTable/>
        </div>
      </main>
    </div>
  );
}

