"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OurStory = () => {
  const [openBox, setOpenBox] = useState(null);

  const toggleBox = (boxName) => {
    setOpenBox(openBox === boxName ? null : boxName);
  };

  return (
    <div className="w-full h-full py-[79px] px-[16px]">
      <div className="container mx-auto w-full lg:w-[1200px] flex flex-col gap-4 justify-center">
        {/* Our Story Box */}
        <div className="relative w-full h-[443px] bg-[#EEFBEE] flex justify-between items-end p-[24px] md:p-[40px] rounded-[20px] overflow-hidden">
          <div>
            <h1 className="text-[40px] md:text-[50px] lg:text-[64px] font-bold">
              Our Story
            </h1>
            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#3C4049]">
              How It All Began
            </h3>
          </div>
          <button
            className="w-[42px] h-[42px] bg-[#1D871D] rounded-full text-white text-[24px] flex items-center justify-center"
            onClick={() => toggleBox("story")}
          >
            {openBox === "story" ? "×" : "+"}
          </button>
          <AnimatePresence>
            {openBox === "story" && (
              <motion.div
                initial={{ opacity: 0, y: -90 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, y: -90, transition: { duration: 0.2 } }}
                className="absolute flex items-center justify-center top-0 h-full left-0 right-0 bg-black/90 text-white px-10 md:px-20 rounded-lg shadow-md z-20"
              >
                <p className="text-base md:text-[18px] font-normal leading-[22px] md:leading-[32px]">
                  "PayQwicker was born out of a simple idea: financial
                  transactions shouldn’t be complicated. Frustrated by the
                  inefficiencies and barriers in traditional finance, our team
                  set out to create a platform that makes sending, receiving,
                  and managing money effortless for everyone—whether you’re an
                  individual, a small business, or a global enterprise. Today,
                  we’re proud to be a trusted partner for thousands of users who
                  value speed, security, and simplicity."
                </p>
                <button
                  className="absolute bottom-10 right-10 w-[42px] h-[42px] bg-white rounded-full text-black text-[24px] flex items-center justify-center"
                  onClick={() => setOpenBox(null)}
                >
                  ×
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Our Mission Box */}
          <div className="relative w-full h-[443px] md:h-[716px] bg-[#EFEDFD] flex justify-between items-end p-[24px] md:p-[40px] rounded-[20px] overflow-hidden">
            <div>
              <h1 className="text-[40px] md:text-[50px] lg:text-[64px] font-bold">
                Our Mission
              </h1>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#3C4049]">
                What Drives Us
              </h3>
            </div>
            <button
              className="w-[42px] h-[42px] bg-[#816CEF] rounded-full text-white text-[24px] flex items-center justify-center"
              onClick={() => toggleBox("mission")}
            >
              {openBox === "mission" ? "×" : "+"}
            </button>
            <AnimatePresence>
              {openBox === "mission" && (
                <motion.div
                  initial={{ opacity: 0, y: -90 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, y: -90, transition: { duration: 0.2 } }}
                  className="absolute flex items-center justify-center top-0 h-full left-0 right-0 bg-black/90 text-white px-10 md:px-20 rounded-lg shadow-md"
                >
                  <p className="text-base md:text-[18px] font-normal leading-[22px] md:leading-[32px]">
                    "Our mission is to redefine digital finance by providing a
                    seamless platform that empowers users to send, receive, and
                    manage money without hassle. We’re committed to breaking
                    down financial barriers and making financial freedom
                    accessible to all."
                  </p>
                  <button
                    className="absolute bottom-10 right-10 w-[42px] h-[42px] bg-white rounded-full text-black text-[24px] flex items-center justify-center"
                    onClick={() => setOpenBox(null)}
                  >
                    ×
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Our Vision Box */}
          <div className="relative w-full h-[443px] md:h-[716px] bg-[#FFF7EB] flex justify-between items-end p-[24px] md:p-[40px] rounded-[20px] overflow-hidden">
            <div>
              <h1 className="text-[40px] md:text-[50px] lg:text-[64px] font-bold">
                Our Vision
              </h1>
              <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#3C4049]">
                Where We’re Headed
              </h3>
            </div>
            <button
              className="w-[42px] h-[42px] bg-[#F0960F] rounded-full text-white text-[24px] flex items-center justify-center"
              onClick={() => toggleBox("vision")}
            >
              {openBox === "vision" ? "×" : "+"}
            </button>
            <AnimatePresence>
              {openBox === "vision" && (
                <motion.div
                  initial={{ opacity: 0, y: -90 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                  exit={{ opacity: 0, y: -90, transition: { duration: 0.2 } }}
                  className="absolute flex items-center justify-center top-0 h-full left-0 right-0 bg-black/90 text-white px-10 md:px-20 rounded-lg shadow-md"
                >
                  <p className="text-base md:text-[18px] font-normal leading-[22px] md:leading-[32px]">
                    "We envision a world where financial transactions are
                    seamless, secure, and accessible to everyone—no matter where
                    they are or what they do. PayQwicker is here to make that
                    vision a reality, one transaction at a time."
                  </p>
                  <button
                    className="absolute bottom-10 right-10 w-[42px] h-[42px] bg-white rounded-full text-black text-[24px] flex items-center justify-center"
                    onClick={() => setOpenBox(null)}
                  >
                    ×
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
