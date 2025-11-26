import React from "react";
import Image from "next/image";


const Hero = () => {
 
  return (
    <div className="relative w-full h-full bg-primary overflow-hidden pb-20 ">
      {/* Overlay with box/grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.10) 0.3px, transparent 0.15px),
            linear-gradient(180deg, rgba(255,255,255,0.10) 0.3px, transparent 0.15px)
          `,
          backgroundSize: "250px 250px",
        }}
      />

      {/*Left side content*/}
      <div className="container mx-auto w-full md:w-[1100px] h-full flex flex-col justify-center items-center gap-[20px] pt-40 px-[16px] text-white ">
        <h4 className="font-bold">About Us</h4>
        <h1 className="text-[40px] md:text-[50px] lg:text-[72px] font-bold text-center leading-[48px] md:leading-[84px] ">
          Simplifying Financial Freedom for Everyone
        </h1>
        <p className="text-[16px] md:text-[20px] text-center leading-[32px] ">
          At PayQwicker, we believe managing money should be simple, secure, and
          accessible to all. Join us in redefining how the world handles
          transactions."
        </p>
        <Image
          src={
            "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354559/bqzib9ma675vchgx6dpp.png"
          }
          width={911}
          height={395}
          className="z-50"
        />
      </div>
    </div>
  );
};

export default Hero;
