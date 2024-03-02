import React from "react";

function CustomerGet() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-20 py-8 lg:py-12 bg-[#f9f9f9] pt-20">
        <div className="w-full lg:w-[30%] mb-8 lg:mb-0 lg:mr-4">
          <h1 className="text-3xl lg:text-4xl text-[#221429] font-axiforma font-semibold mb-4">
            Get Customer Support
          </h1>
          <p className="text-sm lg:text-base text-[#221429] font-axiforma font-medium">
            We know how overwhelming navigating an MRP software and bringing a
            product to life can be, so were here to help. Product Hubb
            representatives can assist with any challenges you may face.
          </p>
        </div>
        <img
          className="w-48 lg:w-48 h-auto"
          src="/62cc31a18012a8fd612945ec_Contact Us-p-500.png"
          alt="Error"
        />
      </div>
    </>
  );
}

export default CustomerGet;
