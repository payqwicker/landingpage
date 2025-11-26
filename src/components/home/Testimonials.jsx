import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Testimonials = () => {
  const testimonials = [
    {
      message:
        "From buying data for my kids to paying utility bills, this app does it all. It’s like having a personal financial assistant in my pocket!",
      name: "Ayomide Adeoye",
      color: "bg-[#387DFF]",
    },
    {
      message:
        "I needed to send money to a friend urgently, and it went through in seconds! This app is perfect for anyone who values speed and reliability.",
      name: "Emeka Ikechukwu",
      color: "bg-[#816CEF]",
    },
    {
      message:
        "I love how simple and intuitive the app is! Sending money to my clients and paying bills used to take forever, but now it’s just a few taps. Highly recommend!",
      name: "Chiamaka Onoha",
      color: "bg-[#3C4049]",
    },
    {
      message:
        "This app has saved me so much time. I can top up airtime, pay bills, and send money to my suppliers all in one place. It’s fast, reliable, and super convenient.",
      name: "Taiwo Festus",
      color: "bg-[#4C5B88]",
    },
  ];

  return (
    <div className="w-full h-full py-[79px] px-[16px] ">
      <div className="container mx-auto flex flex-col justify-center items-center gap-8">
        <div className="w-full lg:w-[1200px] h-[224px] md:h-[491px] bg-[#EFEDFD] rounded-[20px] flex items-center p-[40px]">
          <div className="w-full md:w-[752px] h-full flex items-center">
            <h2 className="text-[32px] md:text-[72px] font-semibold md:leading-[70px]">
              Testimonials & <br /> Trust Signals
            </h2>
          </div>
        </div>

        <div className="grid gri-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-full lg:w-[580px] min-h-[200px] ${testimonial.color} rounded-[20px] px-[40px] py-[66px] text-white flex flex-col justify-between`}
            >
              <ImQuotesLeft className="text-[100px] mb-16 " />
              <p className="text-lg font-normal">{testimonial.message}</p>
              <h4 className="font-semibold text-xl mt-[20px] ">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
