"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import SearchImg from "../assets/img/search.svg";
import SearchX from "../assets/img/searchx.svg";

const SearchBar = () => {
  const [serachActive, setSearchActive] = useState(false);

  const searchInput = useRef();

  const handleActiveSearch = () => {
    if (!serachActive) {
      searchInput.current.focus();
      setSearchActive(true);
    } else {
      setSearchActive(false);
    }
  };

  const SearchImage = serachActive ? (
    <Image alt="closesearch" src={SearchX} width={16} height={16} />
  ) : (
    <Image alt="seach" src={SearchImg} width={20} height={20} />
  );

  return (
    <div className="search-bar flex flex-1 w-full">
      <div className={`search-form flex  justify-end w-full mr-4 `}>
        <input
          style={{
            width: serachActive ? "100%" : "0px",
            transition: "all 0.5s ease",
          }}
          ref={searchInput}
          type="search"
          onBlur={handleActiveSearch}
          placeholder="SEARCH"
          className="bg-transparent outline-0 border-b"
        />
        <button className="w-5 h-5" onClick={handleActiveSearch}>
          {SearchImage}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
