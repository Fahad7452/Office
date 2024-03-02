import React from "react";

function Make() {
  return (
    <>
      <div className="relative">
        <img
          src="/SL-093020-35920-16.jpg"
          alt="Error"
          className="w-full h-96 lg:h-64 object-cover brightness-50" // Adjust the brightness value as needed
        />
        <div className="absolute top-[20%]  md:top-[40%] left-1/2 transform -translate-x-1/2 text-white w-full max-w-screen-2xl mx-auto px-6 lg:px-14">
          <section className="flex flex-col md:flex-row items-center md:gap-20 justify-between">
            <div className="mb-4 md:w-1/2 text-center md:text-left">
              <h1 className=" text-3xl lg:text-4xl font-semibold">
                Make Manufacturing Easy
              </h1>
              <p className="text-base font-semibold">
                Subscribe to our newsletter for the latest updates on new
                features
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col md:flex-row items-center  gap-4">
                <input
                  type="text"
                  placeholder="Email"
                  className="px-4 py-3 w-full md:w-80 border border-white rounded bg-transparent focus:outline-none"
                />
                <button className=" bg-white  text-base hover:bg-blue-700  w-24 h-12 text-black  hover:text-white font-semibold rounded transition duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Make;
