"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setScrollHeight(true);
      } else {
        setScrollHeight(false);
      }
    });
  }, []);

  return (
    <header
      className={`fixed  w-full transition-all ${
        scrollHeight ? "bg-white mt-0 nav-shadow" : "mt-1.5" //// shadow ?
      }`}
    >
      <Navbar scrollHeight={scrollHeight} />
    </header>
  );
};

export default Header;
