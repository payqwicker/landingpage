"use client"
import React from "react";
import ButtonSolid from "../ui/buttons/ButtonSolid";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Hero = () => {
const router = useRouter()

  const navigate = () => {
    router.push("https://app.payqwicker.com/");
  }


  return (
    <div className="relative w-full h-full flex lg:h-screen bg-primary overflow-hidden">
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
      <div className="container w-full  lg:mx-auto h-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:pt-40 pt-[160px] lg:pb-[500px]   ">
        <div className=" relative w-full lg:w-1/2 z-10 flex  h-full container md:portrait:mx-auto">
          <div className="flex flex-col gap-[16px] lg:mt-10 lg:text-left text-center ">
            <h1 className="text-[44px] md:text-[72px] lg:text-[60px] md:leading-[80px] leading-[58px] font-semibold text-white ">
              Send, Recieve & Manage Money Effortlessly
            </h1>
            <p className="w-full px-5 md:px-28 lg:px-0 lg:w-[640px] text-base md:text-[20px] font-normal text-white leading-[26px] md:leading-[30px] ">
              Fast, secure, and seamless financial transactions—no delays, no{" "}
              hidden fees.
            </p>

            <div className="w-full lg:w-[192px] text-center flex items-center justify-center">
              <ButtonSolid title="Get Started for free" handler={navigate} />
            </div>

            {/*Partners section*/}
            <div className="hidden md:flex  justify-center lg:block mt-[97px] space-y-[16px] ">
              <div>
                <h1 className="text-[24px] font-semibold text-white ">
                  Our partners
                </h1>
                <div className="w-[355px] h-[100px] bg-[#EEFBEE] mt-[20px] flex items-center justify-center gap-[40px] rounded-3xl">
                  <Image src={"/Dojah Logo 1.svg"} width={100} height={49} />
                  <Image src={"/Paga Logo 1.svg"} width={130} height={49} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Rigt side image*/}

        <div className="lg:absolute  lg:-right-32 bottom-0 ml-10 md:ml-0 lg:mt-[180px] md:mt-[150px] ">
          <Image
            src={"/Man holding iPhone 15 Pro mockup (Mockuuups Studio).png"}
            width={500}
            height={300}
            alt="Man holding iPhone 15 Pro mockup"
            className="w-[100%] md:w-[70%] md:landscape:w-[70%] lg:landscape:w-[700px]  lg:w-[700px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
