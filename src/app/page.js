import Image from "next/image";
import React from "react";
import MainBannerImg from "../assets/img/mainbanner.png";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mainbanner h-auto w-full">
        <Image
          src={MainBannerImg}
          className=" bg-cover bg-no-repeat bg-center w-full"
        />
      </div>
    </main>
  );
}
