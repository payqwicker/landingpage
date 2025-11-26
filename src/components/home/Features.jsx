import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-full h-full px-[16px] py-[46px] md:py-[79px]  ">
      <div className="container mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="w-full  lg:w-[1200px] h-full md:h-[419px] bg-primary px-[27px] py-[52px] md:px-[40px] md:py-[84px]  flex items-center rounded-[20px] ">
          <div className="w-[752px] h-full ">
            <h1 className="text-white font-semibold text-[32px] md:text-[72px] leading-[40px] md:leading-[84px] ">
              Unlock our services with 4 snappy features!
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-[1200px] flex flex-col md:flex-row gap-[20px] ">
          <div
            className="w-full md:w-[50%] h-[434px] md:h-[600px] lg:h-[716px] bg-[#EEFBEE] rounded-[20px] p-[20px] md:p-[40px] relative 
          overflow-hidden"
          >
            {/* Heading */}
            <div className="space-y-[7px] md:space-y-[12px] ">
              <h1 className="text-[20px] md:text-[32px] font-semibold">
                Instant Money Transfers
              </h1>
              <p className="text-xs md:text-base leading-[17px] md:leading-[28px] ">
                Send and receive money instantly, anytime, anywhere. Say goodbye
                to banking headaches and unnecessary fees. Experience a smooth,
                intuitive way to handle transactions.
              </p>
            </div>

            {/* Image Container */}
            <div className=" w-full absolute bottom-0 left-5 md:left-10">
              <Image
                src={
                  "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354746/avnmnwknsrbxahm4p0wf.png"
                }
                width={450}
                height={300}
                alt="Man with smartphone"
                className="w-[300px] lg:w-[500px] "
              />
            </div>
          </div>

          <div className="w-full md:w-[50%] h-[434px] md:h-[600px] lg:h-[716px]  bg-[#EFEDFD] rounded-[20px] p-[20px] md:p-[40px] relative ">
            <div className="space-y-[7px] md:space-y-[12px]">
              <h1 className="text-[20px] md:text-[32px] font-semibold">
                Bill Payments Made Easy
              </h1>
              <p className="text-xs md:text-base leading-[17px] md:leading-[28px] ">
                Pay utility bills, subscriptions, and more in just a few taps.
                Unlike traditional banks, PayQwicker ensures near-instant
                transfers so you’re never left waiting.
              </p>
            </div>

            <div className="w-full absolute left-5 md:left-10 bottom-0 ">
              <Image
                src={
                  "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354738/om2hoxlovk7ny8n9buuz.png"
                }
                width={450}
                height={300}
                alt="Man with smartphone"
                className="w-[300px] lg:w-[500px] "
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[1200px] h-full flex flex-col md:flex-row gap-[20px] ">
          <div className="w-full md:w-[50%] h-[270px] md:h-[430px] lg:h-[400px] bg-[#F0F5FF] p-[20px] md:p-[40px] rounded-[20px] relative overflow-hidden">
            <div className="space-y-[7px] md:space-y-[12px]">
              <h1 className="text-[20px] md:text-[32px] font-semibold ">
                Seamless Account Funding
              </h1>
              <p className="text-xs md:text-base leading-[17px] md:leading-[28px]">
                View balances, track transactions, and manage funds in
                real-time. Enjoy a one-stop platform for all your payments,
                transfers, and financial controls.
              </p>
            </div>

            <div className="absolute -right-[100px] -bottom-14 z-50">
              <Image
                src={
                  "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354736/jkxwoxinhpjsj53wmtfu.png"
                }
                width={600}
                height={56}
                alt="Customer care image"
                className="w-[500px] md:w-[600px] "
              />
            </div>
          </div>

          <div className="w-full md:w-[50%] h-[350px] md:h-[430px] lg:h-[400px] bg-[#FFF7EB] p-[20px] md:p-[40px] rounded-[20px] relative overflow-hidden">
            <div className="space-y-[7px] md:space-y-[12px]">
              <h1 className="text-[20px] md:text-[32px] font-semibold ">
                24/7 Customer Support
              </h1>
              <p className="text-xs md:text-base leading-[17px] md:leading-[28px]">
                Day or night, our expert support team is here 24/7. Just a click
                away to keep your PayQwicker experience seamless.
              </p>
            </div>

            <div className="w-full absolute bottom-0  md:-right-24  flex justify-center items-end">
              <Image
                src={
                  "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354739/exktanrmqzsp1gb7ww2y.png"
                }
                width={500}
                height={56}
                alt="Customer care image"
                className="w-[400px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
