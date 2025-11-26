"use client";
import { useState, useEffect, useRef } from "react";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import MarqueeEffects from "@/components/home/MarqueeEffects";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  const [bgColor, setBgColor] = useState("bg-white");


  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);



useEffect(() => {
  // Scroll to section if URL contains hash
  if (typeof window !== "undefined") {
    const hash = window.location.hash;
    if (hash === "#features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
}, []);




  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, //threshold 0.5 
    };

    const observerCallback = (entries) => {
      let mostVisibleSection = null;
      let highestVisibility = 0;

      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio > highestVisibility
        ) {
          mostVisibleSection = entry.target;
          highestVisibility = entry.intersectionRatio;
        }
      });

      if (mostVisibleSection) {
        if (mostVisibleSection === featuresRef.current) {
          setBgColor("bg-primary");
        } else if (mostVisibleSection === howItWorksRef.current) {
          setBgColor("bg-primary");
        } else if (mostVisibleSection === testimonialsRef.current) {
          setBgColor("bg-[#EFEDFD]");
        }
      } else {
        setBgColor("bg-white"); // Default background
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe individual refs
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (howItWorksRef.current) observer.observe(howItWorksRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <div className={`transition-colors duration-700 ${bgColor}`}>
      <Hero />
      <MarqueeEffects />
      <div id="features" ref={featuresRef}>
        <Features />
      </div>
      <div ref={howItWorksRef}>
        <HowItWorks />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
