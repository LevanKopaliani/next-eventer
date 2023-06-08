"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import SearchImg from "../assets/img/search.svg";
import SearchX from "../assets/img/searchx.svg";

const SearchBar = () => {
  const [serachActive, setSearchActive] = useState(false);
  const searchInput = useRef();

  const SearchImage = serachActive ? (
    <Image src={SearchX} width={18} height={18} />
  ) : (
    <Image src={SearchImg} width={20} height={20} />
  );

  return (
    <div className="search-bar flex flex-1 w-full">
      <div
        className={`search-form flex  justify-end w-full mr-4 ${
          serachActive ? "border-b" : ""
        }`}
      >
        <input
          ref={searchInput}
          type="search"
          onBlur={() => setSearchActive(false)}
          placeholder="SEARCH"
          className={`bg-transparent outline-0 ${
            serachActive ? "w-full" : "w-0"
          }`}
        />
        <button
          className="w-5 h-5"
          onClick={() => setSearchActive(!serachActive)}
        >
          {SearchImage}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
