"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import animationData from "../../../public/Animation.json";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="w-full h-screen fixed inset-0 flex items-center justify-center bg-white z-50">
      {mounted && (
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ width: 200, height: 200 }}
        />
      )}
    </div>
  );
};

export default Preloader;
