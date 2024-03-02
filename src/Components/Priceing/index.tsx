"use client";
import React, { useState } from "react";
function Pricing() {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="bg-[#f4f8fe]">
        <div className=" bg-[#f4f8fe] px-5 lg:px-0 ">
          <div className="flex justify-center pt-20">
            <button className=" border-2 border-[#366BFF]   rounded-full overflow-hidden   ">
              <button
                onClick={() => handleTabClick("monthly")}
                className={`   w-28 h-12  rounded-full overflow-hidden ${
                  activeTab === "monthly"
                    ? "bg-[#0d1d3a] text-white"
                    : "bg-transparent text-[#0d1d3a]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => handleTabClick("yearly")}
                className={`   w-28 h-12  rounded-full overflow-hidden ${
                  activeTab === "yearly"
                    ? "bg-[#0d1d3a] text-white"
                    : "bg-transparent text-[#0d1d3a]"
                }`}
              >
                Yearly
              </button>
            </button>
          </div>

          <div className="mt-4">
            {activeTab === "monthly" && (
              <div className="flex justify-center mt-20 flex-wrap gap-6  ">
                <div className="  flex flex-col items-center  w-full md:max-w-[380px] border rounded-md bg-white  h-fit  border-[#0d1d3a]  hover:border-[#366bff] pb-10">
                  <div className="gap-8 flex items-center mt-4">
                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-xl md:text-xl">
                      Basic
                    </h3>

                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-[#366bff] border-0 border-gray-200 sm:text-xl md:text-xl">
                      $0
                    </h3>
                  </div>

                  <h3 className="m-0 mt-8 text-lg  leading-tight tracking-tight font-medium font-axiforma text-black border-0 border-gray-200 ">
                    For individuals just getting started.
                  </h3>
                  <ul className="flex-1  mt-4 ml-3 leading-7 text-gray-900  border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      1 Project
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      1 Team Member
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Electronic and <br /> Mechanical BOM <br /> Manager
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Packaging and <br /> Accessories Manager
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Inventory Manager
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Gerber Viewer
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      3D Part Viewer
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Shareable Link to BOM <br /> and Assembly <br />{" "}
                      Instructions
                    </li>
                  </ul>
                  <div>
                    <button className="  font-axiforma mt-4  w-72 h-10 font-medium leading-none text-center text-white bg-[#366BFF] no-underline  rounded-md cursor-pointer  text-lg ">
                      Select Plan
                    </button>
                  </div>
                </div>

                <div className="  flex flex-col items-center  w-full md:max-w-[380px] border rounded-md bg-white  h-fit  border-[#0d1d3a]  hover:border-[#366bff] pb-10">
                  <div className="gap-8 flex items-center mt-4">
                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-xl md:text-xl">
                      Standard
                    </h3>

                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-[#366bff] border-0 border-gray-200 sm:text-xl md:text-xl">
                      $109/mo
                    </h3>
                  </div>

                  <h3 className="m-0 mt-8 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    For growing teams who want more.
                  </h3>
                  <h3 className="m-0 mt-3 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    Everything in Basic plus
                  </h3>
                  <ul className="flex-1 p-0 mt-4 ml-3 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 5 Projects
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 5 Team Members
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Fully-featured Admin <br /> Dashboard
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Automated Price <br /> Estimate Tool
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Vendor Management
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Export BOMs to XLS, CSV <br /> and PDF
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Order Module
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Event Timeline
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Dedicated Customer <br /> Support
                    </li>
                  </ul>
                  <div>
                    <button className="  font-axiforma mt-4  w-72 h-10 font-medium leading-none text-center text-white bg-[#366BFF] no-underline  rounded-md cursor-pointer  text-lg ">
                      Select Plan
                    </button>
                  </div>
                </div>

                <div className="  flex flex-col items-center  w-full md:max-w-[380px] border rounded-md bg-white  h-fit  border-[#0d1d3a]  hover:border-[#366bff] pb-10">
                  <div className="gap-8 flex items-center mt-4">
                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-xl md:text-xl">
                      Premium
                    </h3>

                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-[#366bff] border-0 border-gray-200 sm:text-xl md:text-xl">
                      $329/mo
                    </h3>
                  </div>

                  <h3 className="m-0 mt-8 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    For organizations with multiple projects.
                  </h3>
                  <h3 className="m-0 mt-3 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    Everything in Standard plus
                  </h3>
                  <ul className="flex-1 p-0 mt-4 ml-3 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 10 Projects
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 10 Team Members
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      10 BOMs for Electronics <br /> and Manufacturing
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Customer Branded Email
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      RMA System
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Early access to new features
                    </li>
                  </ul>
                  <div>
                    <button className="  font-axiforma mt-4  w-72 h-10 font-medium leading-none text-center text-white bg-[#366BFF] no-underline  rounded-md cursor-pointer  text-lg ">
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "yearly" && (
              <div className="flex justify-center mt-20 flex-wrap gap-6 ">
                <div className="  flex flex-col items-center  w-full md:max-w-[380px] border rounded-md bg-white  h-fit  border-[#0d1d3a]  hover:border-[#366bff] pb-10">
                  <div className="gap-8 flex items-center mt-4">
                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-xl md:text-xl">
                      Basic
                    </h3>

                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-[#366bff] border-0 border-gray-200 sm:text-xl md:text-xl">
                      $0
                    </h3>
                  </div>

                  <h3 className="m-0 mt-8 text-lg  leading-tight tracking-tight font-medium font-axiforma text-black border-0 border-gray-200 ">
                    For individuals just getting started.
                  </h3>
                  <ul className="flex-1  mt-4 ml-3 leading-7 text-gray-900  border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      1 Project
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      1 Team Member
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Electronic and <br /> Mechanical BOM <br /> Manager
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Packaging and <br /> Accessories Manager
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Inventory Manager
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Gerber Viewer
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      3D Part Viewer
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Shareable Link to BOM <br /> and Assembly <br />{" "}
                      Instructions
                    </li>
                  </ul>
                  <div>
                    <button className="  font-axiforma mt-4  w-72 h-10 font-medium leading-none text-center text-white bg-[#366BFF] no-underline  rounded-md cursor-pointer  text-lg ">
                      Select Plan
                    </button>
                  </div>
                </div>

                <div className="  flex flex-col items-center  w-full md:max-w-[380px] border rounded-md bg-white  h-fit  border-[#0d1d3a]  hover:border-[#366bff] pb-10">
                  <div className="gap-8 flex items-center mt-4">
                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-xl md:text-xl">
                      Standard
                    </h3>

                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-[#366bff] border-0 border-gray-200 sm:text-xl md:text-xl">
                      $99/mo
                    </h3>
                  </div>

                  <h3 className="m-0 mt-8 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    For growing teams who want more.
                  </h3>
                  <h3 className="m-0 mt-3 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    Everything in Basic plus
                  </h3>
                  <ul className="flex-1 p-0 mt-4 ml-3 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 5 Projects
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 5 Team Members
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Fully-featured Admin <br /> Dashboard
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Automated Price <br /> Estimate Tool
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Vendor Management
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Export BOMs to XLS, CSV <br /> and PDF
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Order Module
                    </li>
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Event Timeline
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Dedicated Customer <br /> Support
                    </li>
                  </ul>
                  <div>
                    <button className="  font-axiforma mt-4  w-72 h-10 font-medium leading-none text-center text-white bg-[#366BFF] no-underline  rounded-md cursor-pointer  text-lg ">
                      Select Plan
                    </button>
                  </div>
                </div>

                <div className="  flex flex-col items-center  w-full md:max-w-[380px] border rounded-md bg-white  h-fit  border-[#0d1d3a]  hover:border-[#366bff] pb-10">
                  <div className="gap-8 flex items-center mt-4">
                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-xl md:text-xl">
                      Premium
                    </h3>

                    <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-[#366bff] border-0 border-gray-200 sm:text-xl md:text-xl">
                      $299/mo
                    </h3>
                  </div>

                  <h3 className="m-0 mt-8 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    For organizations with multiple projects.
                  </h3>
                  <h3 className="m-0 mt-3 text-lg font-medium font-axiforma leading-tight tracking-tight text-black border-0 border-gray-200 ">
                    Everything in Standard plus
                  </h3>
                  <ul className="flex-1 p-0 mt-4 ml-3 leading-7 text-gray-900 border-0 border-gray-200">
                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 10 Projects
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Up to 10 Team Members
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      10 BOMs for Electronics <br /> and Manufacturing
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Customer Branded Email
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      RMA System
                    </li>

                    <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                      <svg
                        className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Early access to new features
                    </li>
                  </ul>
                  <div>
                    <button className="  font-axiforma mt-4  w-72 h-10 font-medium leading-none text-center text-white bg-[#366BFF] no-underline  rounded-md cursor-pointer  text-lg ">
                      Select Plan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative mt-20 ">
          <img
            src="/249038668029.jpg"
            alt="Error"
            className="w-full h-96 lg:h-80 object-cover  brightness-50"
          />
          <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full max-w-screen-2xl mx-auto px-6 lg:px-14 flex flex-col items-center justify-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl lg:text-4xl font-semibold">
                Schedule a live demo today!
              </h1>
            </div>
            <div className="mt-4">
              <button className="  font-axiforma mt-4  w-48 h-12 font-medium leading-none text-center text-white bg-[#366BFF]  hover:bg-transparent no-underline  border-2 border-[#366BFF] hover:border-white  rounded-md cursor-pointer  text-lg ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
