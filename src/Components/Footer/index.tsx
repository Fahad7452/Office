import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
function Footer() {
  return (
    <>
      <div className="p-8 px-6 lg:px-16 bg-[#f4f8fe]">
        <div className="flex justify-between  gap-4 flex-wrap">
          <div className="flex flex-col gap-5 flex-wrap">
            <div className="flex items-center gap-1">
              <img className="w-10 h-10" src="/WhatsApp Image 2024-03-01 at 12.01.42.jpeg" alt="Error" />
              <div className="text-black items-center text-lg flex flex-col  ">
              <h1 className=" text-xl font-extrabold  font-serif">OfficeHassle</h1>
              </div>
            </div>
            <p>
              Product Hubb is a revolutionary platform that makes manufacturing{" "}
              <br />
              easy.
            </p>
            <div className="flex gap-5">
              <FaFacebookF className="w-6 h-6 text-[#848484] hover:text-[#366bff]  " />
              <FaInstagram className="w-6 h-6 text-[#848484] hover:text-[#366bff]  " />
              <FaTwitter className="w-6 h-6 text-[#848484] hover:text-[#366bff]  " />
              <IoLogoYoutube className="w-6 h-6 text-[#848484] hover:text-[#366bff]  " />
            </div>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div className="flex flex-col gap-3">
              <h1 className=" text-xl font-bold  font-axiforma ">
                Inside Product <br /> Hubb
              </h1>
              <p className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]">
                Features
              </p>
              <p className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]">
                Pricing
              </p>
              <p className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]">
                Blog
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="  text-xl font-bold    font-axiforma ">
                Questions?
              </h1>
              <p className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]">
                Contact Us
              </p>
              <p className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]">
                Tutorials
              </p>
              <p className="text-[#25334d] font-axiforma text-lg   tracking-wide hover:text-[#366bff]">
                Schedule a <br /> Demo
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[2px]  rounded-2xl mt-10 bg-[#dadce0]"></div>
        <p className="mt-6">2022 Product Hubb. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
