"use client";

import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const MarqueeEffect = () => {
  return (
    <div className="bg-primary h-[55px] md:h-[90px] md:landscape:h-[80px] lg:h-[110px] flex items-center">
      <Marquee direction="left">
        <div className="flex gap-10">
          <h2 className="text-[24px] md:landscape:text-[40px] md:text-[40px] lg:text-[52px] font-semibold text-white">
            Instant Money transfer
          </h2>
          <Image
            src={"/Star 1.svg"}
            width={44}
            height={44}
            alt="star"
            className="w-[30px] md:w-[45px] "
          />
          <h2 className="text-[24px] md:landscape:text-[40px] md:text-[40px] lg:text-[52px]] font-semibold text-white">
            Pay bills with Ease
          </h2>
          <Image
            src={"/Star 1.svg"}
            width={44}
            height={44}
            alt="star"
            className="w-[30px] md:w-[45px] "
          />
          <h2 className="text-[24px] md:landscape:text-[40px] md:text-[40px] lg:text-[52px] font-semibold text-white">
            Seamless Wallet Management
          </h2>
          <Image
            src={"/Star 1.svg"}
            width={44}
            height={44}
            alt="star"
            className="mr-[41] w-[30px] md:w-[45px]"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeEffect;
