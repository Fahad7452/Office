"use client";
import React, { useState } from "react";
import BussinesForm from "../Bussines-form";
import TalentForm from "../Talent-form";
import { BsCheckLg } from "react-icons/bs";function Signup() {
  const [activeTab, setActiveTab] = useState("Bussines");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="flex justify-center pt-10">
        <button className="   shadow-xl   rounded-lg overflow-hidden   ">
          <button
            onClick={() => handleTabClick("Bussines")}
            className={`   w-28 h-12  rounded- overflow-hidden ${
              activeTab === "Bussines"
                ? "bg-[#0d1d3a] text-white"
                : "bg-white text-[#0d1d3a]"
            }`}
          >
            Bussines
          </button>
          <button
            onClick={() => handleTabClick("Talent")}
            className={`   w-28 h-12  rounded- overflow-hidden ${
              activeTab === "Talent"
                ? "bg-[#0d1d3a] text-white"
                : "bg-white text-[#0d1d3a]"
            }`}
          >
            Talent
          </button>
        </button>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 justify-around items-start xl:items-center mt-20 flex-wrap px-4 xl:px-0">

        <div className="flex flex-col gap-7 w-full lg:w-[40%]">
        <div className="flex items-center gap-1">
<img className="w-10 h-10" src="/office.png" alt="Error" />
          <div className="text-black items-center text-lg flex flex-col  ">
            <h1 className=" text-base font-extrabold  font-serif">OFFICE</h1>
            <h1 className="text-sm text-[#366bff] font-black">HASSLE</h1>
          </div>
          </div>
          <h1 className="text-xl text-[#0d1d3a] font-medium font-axiforma">
            {" "}
            With Product Hubb, you can:
          </h1>
          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
              Manage materials and components in one place
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
            Standardize your builds with proven processes from manufacturers
            </h1>
          </div>

          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
            Streamline your projects Bill of Materials for easier reference
            </h1>
          </div>


          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
            Manage, deploy and edit your quotes with a set of automated tools
            </h1>
          </div>


          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
            Oversee your raw materials/tooling and order more in only a few clicks
            </h1>
          </div>


          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
            Standardize your builds with proven processes from manufacturers
            </h1>
          </div>


          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
            Make better decisions by getting an overview of your sales and inventory levels
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <BsCheckLg className="text-green-500" />{" "}
            <h1 className="text-lg text-[#0d1d3a] font-medium font-axiforma">
            Share your project with vendors and other team members
            </h1>
          </div>
        </div>
<div className="w-full xl:w-[40%]">

      {activeTab === "Bussines" && ( <>  <BussinesForm/> </>)}
{activeTab === "Talent" && ( <> <TalentForm/>  </>)} 
</div>
      </div>
    </>
  );
}

export default Signup;
