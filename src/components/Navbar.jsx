import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

import LogoWhite from "../assets/img/eventer-logo-white.png";

const Navbar = () => {
  return (
    <nav className="mx-auto max-w-5xl text-white h-24 flex items-center gap-x-7">
      <Image src={LogoWhite} alt="logo" className="w-12 block" />
      <ul className="flex gap-x-5 uppercase">
        <li className="hover:text-hover-red">
          <a href="#services">services</a>
        </li>
        <li className="hover:text-hover-red">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="navbar flex w-full">
        <SearchBar />
        <div className="login-tabs">
          <ul className="flex">
            <li className="px-2 hover:text-hover-red">
              <a href="#login">Sign in</a>
            </li>
            <span>/</span>
            <li className="px-2 hover:text-hover-red">
              <a href="#signup">Sign up</a>
            </li>
          </ul>
        </div>
        <div className="language px-3">
          <button className="uppercase fon">en</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
