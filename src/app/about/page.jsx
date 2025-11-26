import React from "react";
import Cta from "@/components/aboutUs/Cta";
import Hero from "@/components/aboutUs/Hero";
import OurCoreValues from "@/components/aboutUs/OurCoreValues";
import OurStory from "@/components/aboutUs/OurStory";

const About = () => {
  return (
    <>
      <Hero />
      <OurStory />
      <OurCoreValues />
      <Cta />
    </>
  );
};

export default About;
