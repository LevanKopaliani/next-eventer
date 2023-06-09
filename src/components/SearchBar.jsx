"use client";
import React, { useState, useRef } from "react";
import SearchImage from "@/assets/img/SearchImage";
import SearchImageX from "@/assets/img/SearchImageX";

const SearchBar = (props) => {
  const [serachActive, setSearchActive] = useState(false);
  const searchInput = useRef();

  const SearchButton = (
    <button
      className="w-5 h-5"
      onClick={() => {
        searchInput.current.focus();
        setSearchActive(true);
        props.searchisOpen(true);
        //// need to fix onblur action conflict
      }}
    >
      {serachActive ? (
        <SearchImageX fill={props.scrollHeight ? "#000" : "#fff"} />
      ) : (
        <SearchImage fill={props.scrollHeight ? "#000" : "#fff"} />
      )}
    </button>
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
          onBlur={() => {
            setSearchActive(false);
            props.searchisOpen(false);
          }}
          placeholder="SEARCH"
          className="bg-transparent outline-0 border-b"
        />

        {SearchButton}
      </div>
    </div>
  );
};

export default SearchBar;
