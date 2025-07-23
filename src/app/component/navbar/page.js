"use client";
import Image from "next/image";
import React from "react";
import search from "../../assets/navbar/search.png";
import logo from "../../assets/logo/logo.png";
import { useMyContext } from "@/app/context/page";
const Navbar = () => {
  const { state } = useMyContext();
  return (
    <div>
      <div>
        <div className="flex justify-between items-center bg-blue-600 px-5 h-25 text-white  text-[18px] ">
          <div className="flex gap-2 items-center cursor-pointer">
            <div>
              <Image src={logo} height={50} width={50} alt="logo" />
            </div>
            <h1 className="text-[25px]">CivicDataSpace</h1>
          </div>
          <div className="flex gap-6 items-center cursor-pointer">
            <Image src={search} alt="Search" width={20} height={20} />
            <div
              className={`${
                state.clicked === "All Data" ? "text-orange-300" : "text-white"
              }`}
            >
              All Data
            </div>
            <div>Sectors</div>
            <div>Use Cases</div>
            <div>Publishers</div>
            <div>About Us</div>
            <button className="bg-green-200 text-black px-1 py-1 font-medium rounded">
              LOGIN/SIGNUP
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="h-8 bg-orange-400 px-5 ">
          {`Home > ${state.clicked}`}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
