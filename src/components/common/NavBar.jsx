"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ButtonSolid from "../ui/buttons/ButtonSolid";
import { useRouter } from "next/navigation";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = () => {
    router.push("https://app.payqwicker.com");
  };

    const handleNavigation = (e) => {
      e.preventDefault(); // Prevent default link behavior

      if (router.pathname !== "/") {
        router.push("/#features"); // Navigate to home first, then scroll
      } else {
        document
          .getElementById("features")
          ?.scrollIntoView({ behavior: "smooth" });
      }

      setIsOpen(false);
    };

  return (
    <div className="w-full flex items-center justify-center py-6 absolute z-50 top-0">
      <div className="w-full max-w-[696px] mx-4 h-[64px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-between px-[24px]">
        {/* Logo */}
        <Link href={"/"}>
          <div>
            <Image
              src=
                "https://res.cloudinary.com/dol3qacrp/image/upload/v1748354758/obxtiiybt4yqdumu3fuu.svg"
              
              width={144}
              height={23}
              alt="Logo"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden border-x-[1px] border-gray-50 border-opacity-30 px-5 md:flex space-x-[24px] text-white font-normal">
          <Link
            href=""
            onClick={handleNavigation}
            className="text-white cursor-pointer"
          >
            Features
          </Link>
          <Link href={"/about"} className="cursor-pointer">
            About us
          </Link>
          <Link href={"/faq"} className="cursor-pointer">
            FAQ
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-[20px]">
          <Link
            href={"https://app.payqwicker.com/auth/login"}
            className="font-semibold text-white cursor-pointer"
          >
            Sign In
          </Link>
          <ButtonSolid title="Get Started" handler={navigate} />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <IoClose size={28} /> : <IoIosMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[95px] w-full max-w-[696px] bg-white/20 backdrop-blur-md rounded-lg flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            Features
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary"
          >
            About us
          </Link>
          <Link
            href="/faq"
            onClick={() => setIsOpen(false)}
            className="text-white"
          >
            FAQ
          </Link>
          <Link
            href={"https://payqwickerweb.vercel.app/auth/login"}
            onClick={() => setIsOpen(false)}
            className="font-semibold text-white"
          >
            Sign In
          </Link>
          <ButtonSolid title="Get Started" handler={navigate} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
