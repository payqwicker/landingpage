"use client";
import { useEffect } from "react";

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6821be57c6305f190d4c28fc/1ir1sv1ig";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Optional: remove the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; 
};

export default TawkToWidget;
