"use client";
import React from "react";

const MobileMenuButton = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollHeight,
}) => {
  const menuColor = scrollHeight ? "bg-slate-700" : "bg-white";

  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="w-5 h-5 flex flex-col gap-1 transition-transform md:hidden"
    >
      <span
        className={`block rounded h-0.5 ${menuColor} transition-all `}
        style={{ width: mobileMenuOpen ? "20px" : "15px" }}
      ></span>
      <span
        className={`block rounded h-0.5 ${menuColor} transition-all `}
        style={{ width: mobileMenuOpen ? "15px" : "20px" }}
      ></span>
      <span
        className={`block rounded h-0.5 ${menuColor} transition-all `}
        style={{ width: mobileMenuOpen ? "20px" : "15px" }}
      ></span>
      <span
        className={`block rounded h-0.5 ${menuColor} transition-all `}
        style={{ width: mobileMenuOpen ? "15px" : "20px" }}
      ></span>
    </button>
  );
};

export default MobileMenuButton;
