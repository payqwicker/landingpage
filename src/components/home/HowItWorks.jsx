import Image from 'next/image';
import React from 'react'

const HowItWorks = () => {
  return (
    <div className="w-full h-full px-[16px] py-[46px] md:py-[79px]">
      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="w-full lg:w-[1200px] h-[224px] md:h-[491px] bg-primary px-[27px] py-[52px] md:px-[40px] md:py-[84px]  flex items-center rounded-[20px] ">
          <div className="w-full md:w-[752px] h-full flex items-center ">
            <h1 className="text-white font-semibold text-[32px] md:text-[72px] leading-[40px] md:leading-[84px] ">
              Money in Motion: How It Works
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-[1200px] h-[407px] flex flex-col md:flex-row bg-[#EEFBEE] rounded-[12px] md:rounded-[20px] overflow-hidden relative  ">
          <div className="w-full h-full flex md:items-end items-start">
            <div className="space-y-[7px] md:space-y-[12px] p-[20px] md:p-[40px] w-full md:w-[50%]  ">
              <h1 className="text-[20px] md:text-[32px] font-semibold  ">
                Sign Up & Verify Account
              </h1>
              <p className="text-xs md:text-base leading-[17px] md:leading-[28px]">
                Create your account in minutes with a simple, guided process.
                Quickly verify your identity using secure methods so you can
                start enjoying our services immediately, knowing your data is
                protected.
              </p>
            </div>

            <div className="w-full md:w-[50%] h-full absolute -right-[120px] top-[220px] md:top-[150px]  ">
              <Image
                src={
                  "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354747/gzuvkncxhexarwts19hg.png"
                }
                width={900}
                height={500}
                className="w-[1300px] md:w-[900px] "
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[1200px] flex flex-col md:flex-row gap-[20px] ">
          <div className="w-full md:w-[50%] h-[268px] md:h-[500px] lg:h-[443px] pt-[20px] md:pt-[40px] px-[20px] md:px-[40px] bg-[#FFF7EB]  rounded-[12px] md:rounded-[20px] overflow-hidden relative">
            <div className="space-y-[7px] md:space-y-[12px] ">
              <h1 className="text-[20px] md:text-[32px] font-semibold ">
                Add Funds Securely
              </h1>
              <p className="text-xs md:text-base leading-[17px] md:leading-[28px]">
                Easily load your wallet using trusted channels like bank
                transfers or payment tag. Our robust security protocols ensure
                that your funds are safely added.
              </p>
            </div>

            <div className="absolute  top-[110px] md:top-[300px] lg:top-[220px] ">
              <Image
                src={
                  "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354551/lovjfnxp207atjwl2hyq.png"
                }
                width={480}
                height={480}
              />
            </div>
          </div>

          <div className="w-full md:w-[50%] h-[320px] md:h-[500px] lg:h-[443px] pt-[40px] px-[20px] md:px-[40px] bg-[#F0F5FF] rounded-[12px] md:rounded-[20px] overflow-hidden relative">
            <div className="space-y-[7px] md:space-y-[12px]">
              <h1 className="text-[20px] md:text-[32px] font-semibold ">
                Send & Receive Money Instantly
              </h1>
              <p className="text-xs md:text-base leading-[17px] md:leading-[28px]">
                Experience the power of real-time transactions. Whether you're
                sending money to family, friends, or business contacts, enjoy
                immediate transfers that keep your financial life moving without
                delays.
              </p>
            </div>

            <div className="absolute top-[140px] md:top-[300px] lg:top-[220px] ">
              <Image
                src={
                  "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354570/uk2eie8ejolc5nzfaz6m.png"
                }
                width={617}
                height={617}
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[1200px] h-[443px] p-[20px] md:p-[40px] bg-[#EFEDFD] flex flex-col md:flex-row rounded-[12px] md:rounded-[20px] overflow-hidden relative ">
          <div className="space-y-[7px] md:space-y-[12px] w-full md:w-[50%] h-full flex flex-col  md:justify-end ">
            <h2 className="text-[20px] md:text-[32px] font-semibold">
              Pay Bills in Seconds
            </h2>
            <p className="text-xs md:text-base leading-[17px] md:leading-[28px]">
              Simplify your financial routine by paying utility bills,
              subscriptions, and more in just a few taps. Our platform
              streamlines your bill payments, making everyday transactions fast,
              secure, and hassle-free.
            </p>
          </div>

          <div className="absolute md:-right-[470px] lg:-right-72 -right-80  top-[120px] md:top-[10px] lg:top-[30px] ">
            <Image
              src={
                "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354570/btrw1xgdreodl5kuqlxi.png"
              }
              width={900}
              height={530}
              className="w-[900px] md:w-[950px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks