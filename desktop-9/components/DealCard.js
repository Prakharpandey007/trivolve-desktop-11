'use client'

import Image from 'next/image'
import cardanoIcon from '../public/images/formkit_cardano.png'
import targetReturnIcon from '../public/images/target.png';
import ticketSaleIcon from '../public/images/speed.jpg';
import distributionIcon from '../public/images/full-screen-one.jpg';
import maxCapacityIcon from '../public/images/speed.jpg';

export default function DealCard() {
  return (
    <div className="w-[844px] h-[282px] flex-shrink-0 rounded-[12px] border border-[rgba(21,21,21,0.16)] bg-gradient-to-r from-black via-[rgba(47,47,47,0.28)] to-[rgba(47,47,47,0.28)] p-6 mt-4 mx-auto relative">
      
      {/* Left side content */}
      <div className="ml-6 mt-6">
        <h3 className="text-[#FFF] font-[OffBit Trial] text-[24px] font-bold leading-normal">
          RWA Lending Deal
        </h3>
        <p className="text-[#949494] font-helvetica text-[16px] font-normal leading-[19px] tracking-[0.16px] mt-4 w-[360px]">
          A portfolio aiming to achieve stable yet strong investment returns through fast-growing alternative space in Asia
        </p>
      </div>

      {/* CARDANO and OPEN buttons */}
      <div className="ml-6 mt-4 flex space-x-4">
        {/* Cardano Button */}
        <div className="flex items-center bg-[#542767] border border-[#78306A] rounded-[6px] w-[100px] h-[29px] p-1 cursor-pointer hover:bg-[#66317f] transition-colors">
          <Image src={cardanoIcon} alt="Cardano Icon" width={18} height={18} />
          <span className="text-[#FF95F4] font-['IBM Plex Mono'] text-[14px] font-medium uppercase tracking-[0.14px] ml-2">
            Cardano
          </span>
        </div>
        {/* Open Button */}
        <div className="flex items-center bg-transparent border border-pink-500 rounded-[6px] w-[69px] h-[29px] p-1 cursor-pointer hover:bg-pink-500 hover:text-white transition-colors">
          <span className="text-[#FF95F4] font-['IBM Plex Mono'] text-[14px] font-medium uppercase tracking-[0.14px] mx-auto">
            Open
          </span>
        </div>
      </div>

      {/* Stats section */}
      <div className="absolute top-6 right-6 grid grid-cols-2 gap-x-8 gap-y-4 text-right">
        {/* Target Return */}
        <div className="flex items-start justify-end space-x-2">
          <Image src={targetReturnIcon} alt="Target Return Icon" width={20} height={20} className="flex-shrink-0" />
          <div>
            <p className="text-[#949494] font-helvetica text-[14px] font-normal leading-normal">
              Target Return (p.a.)
            </p>
            <p className="text-white font-helvetica text-[16px] font-normal">
              9% - 11%
            </p>
          </div>
        </div>

        {/* Minimum Ticket Sale */}
        <div className="flex items-start justify-end space-x-2">
          <Image src={ticketSaleIcon} alt="Minimum Ticket Sale Icon" width={20} height={20} className="flex-shrink-0" />
          <div>
            <p className="text-[#949494] font-helvetica text-[14px] font-normal leading-normal">
              Minimum Ticket Sale
            </p>
            <p className="text-white font-helvetica text-[16px] font-normal">
              100,000 USDM
            </p>
          </div>
        </div>

        {/* Distribution */}
        <div className="flex items-start justify-end space-x-2">
          <Image src={distributionIcon} alt="Distribution Icon" width={20} height={20} className="flex-shrink-0 bg-[#949494]" />
          <div>
            <p className="text-[#949494] font-helvetica text-[14px] font-normal leading-normal">
              Distribution
            </p>
            <p className="text-white font-helvetica text-[16px] font-normal">
              Quarterly
            </p>
          </div>
        </div>

        {/* Maximum Capacity */}
        <div className="flex items-start justify-end space-x-2">
          <Image src={maxCapacityIcon} alt="Maximum Capacity Icon" width={20} height={20} className="flex-shrink-0" />
          <div>
            <p className="text-[#949494] font-helvetica text-[14px] font-normal leading-normal">
              Maximum Capacity
            </p>
            <p className="text-white font-helvetica text-[16px] font-normal">
              50,000,000 USDM
            </p>
          </div>
        </div>
      </div>

      {/* View More full-width button */}
      <div className="absolute bottom-0 left-0 w-[844px] h-[51px] bg-[#191919] border-t border-[#272727] rounded-b-[12px] flex items-center justify-center">
        <span className="text-white font-helvetica text-[14px] font-normal">
          VIEW MORE
        </span>
        <span className="text-white font-helvetica text-[14px] font-normal ml-2">
          →
        </span>
      </div>
    </div>
  )
}
