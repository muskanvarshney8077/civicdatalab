import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/logo.png";
import facebook from "../../assets/footer/facebook.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";
import github from "../../assets/footer/github.png";
import madeby from "../../assets/footer/madeby.png";
const Footer = () => {
  return (
    <div className=" bg-blue-600 px-5 h-40 text-white  flex justify-between items-center">
      <div className="flex flex-col gap-5 justify-between items-start h-30 cursor-pointer">
        <div className="flex gap-10 justify-start items-center ">
          <div>
            <Image src={logo} width={50} height={50} alt="logo" />
          </div>
          <div className="text-2xl">CivicDataSpace</div>
        </div>
        <div className="flex gap-5 text-[12px]">
          <div>ABOUT US</div>
          <div>SITEMAP</div>
          <div>CONTACT US</div>
        </div>
      </div>

      <div className="h-30 flex flex-col justify-between items-end cursor-pointer">
        <div className="text-orange-500 text-[18px] ">Follow Us</div>
        <div className="flex gap-5">
          <div>
            <Image src={github} height={30} width={30} alt="contact" />
          </div>
          <div>
            <Image src={instagram} height={30} width={30} alt="contact" />
          </div>
          <div>
            <Image src={facebook} height={30} width={30} alt="contact" />
          </div>
          <div>
            <Image src={twitter} height={30} width={30} alt="contact" />
          </div>
        </div>
        <div className="flex justify-end items-center gap-3">
          <div className="text-[12px]">made by</div>
          <div>
            <Image src={madeby} height={20} width={20} alt="madeby" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
