import Image from 'next/image';
import React from 'react'

const OurCoreValues = () => {

    const corevalues = [
      {
        title: "Accessibility",
        content:
          "We’re breaking down barriers to ensure everyone can access financial tools.",
        img: "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354529/vuyxbm5q8usjcog8geji.svg",
      },
      {
        title: "Security",
        content:
          "Your trust is our priority. We use cutting-edge technology to keep your transactions safe.",
        img: "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354558/yfgsm74ggpqmjmmwq7ae.svg",
      },
      {
        title: "Innovation",
        content:
          "We’re constantly evolving to meet your needs and stay ahead of the curve",
        img: "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354510/cz7jjqg1ns2ej1fr8dfn.svg",
      },
      {
        title: "Customer-Centricity",
        content:
          "You’re at the heart of everything we do. We listen, learn, and adapt to serve you better.",
        img: "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354541/xdf551oaja2xw25y81xw.svg",
      },
    ];


  return (
    <div className="w-full h-full py-[79px] px-[16px]">
      <div className="container mx-auto w-full lg:w-[1200px] flex flex-col gap-4 justify-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {corevalues.map((value, index) => (
            <div
              className="w-full h-full bg-[#EEFBEE]  pt-[90px] px-[20px] md:px-[40px] pb-[50px] md:pb-[76px] rounded-[20px] flex flex-col gap-[74px] "
              key={index}
            >
              <div className="w-full flex items-center justify-center ">
                <Image src={value.img} width={300} height={300} />
              </div>
              <div className="space-y-[10px] w-full h-full flex flex-col justify-end">
                <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-semibold text-[#17191C] ">
                  {value.title}
                </h1>
                <p className="text-base md:text-[20px] text-[#3C4049] font-normal leading-[19px] md:leading-[32px] ">{value.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCoreValues