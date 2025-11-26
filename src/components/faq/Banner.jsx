import React from 'react'

const Banner = () => {
  return (
    <div className="relative w-full h-[462px] bg-primary overflow-hidden pb-20 ">
      <div className="container mx-auto w-full md:w-[1100px] h-full flex flex-col justify-center items-center gap-[10px] pt-40 px-[16px]">
        <h4 className="text-[#85E585] font-bold ">FAQ</h4>
        <h1 className='text-[40px] md:text-[72px] text-white font-bold text-center md:leading-[84px] '>Got Questions? <br /> We’ve Got Answers</h1>
      </div>
    </div>
  );
}

export default Banner