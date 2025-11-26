"use client";
import React, { useEffect, useState } from "react";
import Home from "../app/home/page";

const HomePage = ()  => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Preloader />;
  // }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default HomePage
