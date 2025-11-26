"use client"
import React, { useState } from "react";
import { accordionData } from "@/utils/Data";
import { IoAdd } from "react-icons/io5";
import { RiSubtractLine } from "react-icons/ri";



const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full py-[40px] md:py-[79px] px-[16px] md:px-[120px]">
      <div className="container mx-auto w-full  flex flex-col gap-4  justify-center">
        <div className="space-y-4  ">
          {accordionData.map((section, index) => (
            <div
              key={index}
              className="rounded-lg bg-[#F8F8F8] border-[1px] border-[#EDEFF2] px-[30px] py-[20px] overflow-hidden"
            >
              <button
                className="w-full text-left  font-semibold flex justify-between items-center transition ease-in-out duration-300"
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
                <span>
                  {openIndex === index ? <RiSubtractLine /> : <IoAdd />}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white rounded-[4px] mt-5 space-y-4 transition ease-in-out duration-500">
                  {section.content.map((item, subIndex) => (
                    <div key={subIndex} className=" bg-white space-y-3">
                      <h3 className="font-semibold text-[#1D871D] text-[18px] ">
                        {item.question}
                      </h3>
                      <p className="text-[#3C4049] font-normal ">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
