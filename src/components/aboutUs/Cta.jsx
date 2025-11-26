import Image from 'next/image';
import React from 'react'


const Cta = () => {
  return (
    <div className="w-full  h-full bg-[#EEFBEE] py-[79px] px-[16px] ">
      <div className="container mx-auto w-full lg:w-[1200px] text-center flex flex-col justify-center items-center gap-[10px] ">
        <Image
          src={
            "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354553/ws8vxjubk1khdxwy0gw5.png"
          }
          width={129}
          height={129}
        />
        <h1 className="w-[222px] md:w-[800px] lg:w-[1088px] text-[24px] md:text-[40px] lg:text-[64px] font-bold ">
          Be part of the PayQwicker family
        </h1>
        <p className="lg:w-[1002px] md:w-[750px] w-[358px] text-[14px] md:text-[20px] leading-[24px] md:leading-[32px] text-[#17191C] ">
          Ready to experience seamless financial transactions? Sign up today and
          join thousands of users who are already simplifying their finances
          with PayQwicker.
        </p>

        <button className="px-[16px] py-[8px] bg-primary text-white font-semibold rounded-full ">
          Get Started - its free
        </button>
      </div>
    </div>
  );
}

export default Cta