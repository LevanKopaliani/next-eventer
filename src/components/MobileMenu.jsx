import React from "react";

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      style={{ left: isOpen ? "0" : "-100%" }}
      className="mobilemenu w-full h-screen mt-16 bg-slate-500 text-black fixed top-0 z-auto transition-all"
    ></div>
  );
};

export default MobileMenu;
