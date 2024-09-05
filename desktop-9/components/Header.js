import Image from 'next/image'; // Assuming you're using Next.js for image optimization

export default function Header() {
  return (
    <header className="mt-2 bg-[#1E1E1E] p-4 flex justify-between items-center ml-8 mr-8 h-[44px] rounded-[7px] bg-gradient-to-r from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)]">
      <div className="flex items-center">
        <Image 
          src="/images/right-user.png" // Update this path to the correct path of your image
          alt="Icon"
          width={22}
          height={22}
          className="flex-shrink-0"
        />
        <h1 className="text-xl font-bold ml-2">Become an investor</h1>
      </div>
      <button 
        className="bg-white text-black px-4 py-2 rounded transition-colors h-[32px] w-[140px] border border-black flex-shrink-0 flex items-center justify-center" 
        style={{ 
          fontFamily: 'Helvetica', 
          fontSize: '14px', 
          fontStyle: 'normal', 
          fontWeight: '400', 
          lineHeight: 'normal',
          whiteSpace: 'nowrap' // Ensures the text doesn't wrap
        }}
      >
        COMPLETE KYC
      </button>
    </header>
  );
}
