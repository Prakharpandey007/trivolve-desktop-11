

'use client'

export default function DealVolume() {
  return (
    <div className="relative w-[1060px] h-[240px] flex-shrink-0 rounded-[12px] bg-gradient-to-r from-[rgba(0,24,254,0.4)] via-[rgba(158,18,161,0.38)] to-[rgba(255,0,0,0.36)] p-6">
      <div className="absolute top-0 left-0 p-6 z-10">
        <div className="text-white font-helvetica text-[20px] leading-normal tracking-[0.2px] mb-4">
          Cumulative Deal Investment
        </div>
        <div className="flex items-baseline text-white">
          <div className="font-[OffBit Trial] text-[48px] font-bold leading-normal w-[92px] h-[53px]">
            1.2M
          </div>
          <div className="pl-8 font-[OffBit Trial] text-[24px] font-bold leading-normal w-[59px] h-[26px]">
            USDM
          </div>
        </div>
      </div>
    </div>
  )
}
