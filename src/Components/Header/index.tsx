import React from "react";

function Header() {
  return (
    <>
    <div className="w-full mt-20 flex flex-col  lg:flex-row px-5 lg:px-16 ">
    <div className="lg:w-1/2 lg:pr-8">
        <h2 className="text-3xl xl:text-4xl font-bold text-gray-800 font-axiforma  mb-6 lg:mb-14">
            Fostering Success Together: Solution For Businesses And Individuals Alike
        </h2>
        <p className="text-sm lg:text-lg text-gray-800 font-medium  w-full lg:w-[75%] font-axiforma  mb-6 lg:mb-14">
            Office Hassle extends AI-Powered System to  both businesses  and individuals.
        </p>
        <div className="flex justify-start">
            <button className="text-white bg-[#366bff] py-2 px-5 shadow-xl text-lg font-semibold  rounded-md">
                Pre Register
            </button>
        </div>
    </div>
    <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img src="/Image 01-03-2024 at 10.59 PM.jpg " alt="error" className=" rounded-md  w-full shadow-2xl h-auto" />
    </div>
</div>

    </>
  );
}

export default Header;
