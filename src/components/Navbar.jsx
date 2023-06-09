"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

import LogoWhite from "../assets/img/eventer-logo-white.png";
import LogoBlack from "../assets/img/eventer-logo-black.png";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

const Navbar = ({ scrollHeight }) => {
  const [searchisOpen, setSearchIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.querySelector("body").classList.add("fixed");
    } else {
      document.querySelector("body").classList.remove("fixed");
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`mx-auto max-w-5xl px-4  h-24 flex items-center gap-x-7 ${
        scrollHeight ? "text-black " : "text-white"
      } max-md:px-5 max-md:h-16`}
    >
      <MobileMenuButton
        scrollHeight={scrollHeight}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      <MobileMenu isOpen={mobileMenuOpen} />
      <div className="logo-container w-16 h-auto max-md:w-10 ">
        <Image
          // width={48}
          // height={54}

          src={scrollHeight ? LogoBlack : LogoWhite}
          alt="logo"
          className="w-12 object-contain  "
        />
      </div>
      {!searchisOpen ? (
        <ul className="flex gap-x-5 uppercase max-md:hidden">
          <li className="hover:text-hover-red">
            <a href="#services">services</a>
          </li>
          <li className="hover:text-hover-red">
            <a href="#contact">contact</a>
          </li>
        </ul>
      ) : null}
      <div className="navbar flex w-full">
        <SearchBar searchisOpen={setSearchIsOpen} scrollHeight={scrollHeight} />
        <div className="login-tabs max-md:hidden">
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
        <div className="language px-3 max-md:hidden">
          <button className="uppercase fon">en</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
