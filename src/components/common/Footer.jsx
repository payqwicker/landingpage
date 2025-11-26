import React from "react";
import MarqueeEffect from "../home/MarqueeEffects";
import ButtonOutlined from "../ui/buttons/ButtonOutlined";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Link from "next/link";


const Footer = () => {
  return (
    <div className="w-full  bg-primary overflow-hidden ">
      <MarqueeEffect />
      <div className="pt-[30px] pb-[60px] w-full h-full flex flex-col justify-center items-center bg-primary lg:px-[120px] px-[16px] py-[20px] md:py-[79px] gap-[60px] md:gap-[111px] ">
        <div className="w-full lg:w-[1200px] h-[790px] md:h-[632px] bg-[#EEFBEE] rounded-[10px]  md:rounded-[20px] flex  flex-col md:flex-row justify-between gap-[40px] md:gap-0 px-[30px] pt-[39px] md:pt-0 lg:px-[100px] relative overflow-hidden">
          <div className="w-full md:w-[50%] h-full flex flex-col gap-[14px] md:gap-[20px] justify-center ">
            <ButtonOutlined title="Coming Soon!" />
            <h1 className="text-[32px] md:text-[40px] lg:text-[60px] font-bold text-primary  lg:leading-[70px]">
              Download Our PayQwicker App
            </h1>

            <div className="flex gap-[15px] text-white ">
              <button className="w-[156px] text-[10px] md:text-base px-[16px] py-[8px] bg-primary flex items-center justify-center gap-[10px] rounded-[8px] font-semibold ">
                <Image
                  src={"/logos_google-play-icon.svg"}
                  width={21}
                  height={21}
                />
                Google Play
              </button>
              <button className="w-[156px] text-[10px] md:text-base px-[16px] py-[8px] bg-primary flex items-center justify-center gap-[10px] rounded-[8px] font-semibold ">
                <FaApple className=" text-[21px] " />
                Apple Store
              </button>
            </div>
          </div>

          <div className="w-full md:absolute flex justify-end  md:top-[120px] lg:right-0 md:right-10  lg:mr-28 ">
            <Image
              src={
                "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354556/ixmuvrgrc4srokyi8h4l.png"
              }
              width={331}
              height={718}
            />
          </div>
        </div>

        <div className="w-full lg:w-[1200px] flex flex-col gap-10 md:flex-row items-start md:items-center justify-between px-18 ">
          <Link href={"/faq"}>
            <h1 className="text-[50px] md:text-[64px] font-bold text-white leading-[66px] md:leading-[84px] ">
              Questions <br /> <span className="text-white/30">FAQs</span>
            </h1>
          </Link>

          <Link href="mailto:support@payqwicker.com">
            <h1 className="text-[50px] md:text-[64px] font-bold text-white leading-[66px] md:leading-[84px] ">
              Contact <br /> <span className="text-white/30">Us</span>
            </h1>
          </Link>
        </div>

        <div className="w-full lg:w-[1200px] flex flex-col gap-5 ">
          <div className="w-full flex flex-col md:flex-row gap-[56px] md:gap-0 justify-between">
            <div className="w-full flex gap-[32px] ">
              <Image src={"/logoWhite.svg"} width={144} height={23} />
              <ul className="flex  gap-[32px] text-[#ABB0BA] ">
                <Link href="/#features" className="cursor-pointer">
                  Features
                </Link>
                <Link href="/about" className="cursor-pointer">
                  About Us
                </Link>
              </ul>
            </div>

            <div className="w-full flex gap-[12px] justify-start  md:justify-end text-[#ABB0BA] text-[24px] ">
              <Link
                href={"https://www.facebook.com/profile.php?id=61559648152846"}
              >
                <FaFacebook />
              </Link>
              <Link href={"https://www.instagram.com/payqwicker"}>
                <FaInstagram />
              </Link>
              <Link href={"https://x.com/payqwicker"}>
                <FaXTwitter />
              </Link>
              <Link href="mailto:support@payqwicker.com">
                <IoMail />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[1200px] text-[#ABB0BA] pt-[20px] border-t-[1px] border-[#3C4049] ">
            <p className="text-[14px] md:text-[18px] leading-[24px] md:leading-[28px] ">
              PayQwicker is an easy-to-use, secure, and innovative fintech
              platform for managing daily finances, facilitating seamless
              transactions, and driving financial inclusion nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
