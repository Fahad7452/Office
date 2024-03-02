"use client";
import React, { useState } from "react";
import TabButtons from "../TabButtons";
import Talent from "../Talent";

function Features() {
  const [activeTab, setActiveTab] = useState("Bussines");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="bg-[#F4F8FE] mt-36 px-5 lg:px-0 ">
        <h1 className="text-3xl font-bold text-gray-800 lg:text-3xl text-center pt-16">
          Features For Both Bussines And Talent Are Listed Below
        </h1>
        <div className="flex justify-center pt-20">
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

        {activeTab === "Bussines" && (
          <>
            {" "}
            <TabButtons />{" "}
          </>
        )}
        {activeTab === "Talent" && (
          <>
            {" "}
            <Talent />{" "}
          </>
        )}
      </div>
    </>
  );
}

export default Features;
