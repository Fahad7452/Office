"use client";

import { HiArrowRightCircle } from "react-icons/hi2";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function Carosel() {
  return (
    <>
      <div className="bg-[#f4f8fe] px-6 lg:px-16">
        <h1 className=" font-serif font-semibold text-xs pt-12 text-[#0d1d3a]">
          Trusted by Manufacturing Professionals
        </h1>

        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden mt-16 gap-10  md:gap-0 ">
              <img
                className="h-auto xl:h-[520px] w-full md:w-80 object-cover rounded-tl-2xl md:rounded-tl-none md:rounded-bl-2xl"
                src="/62c5d147df5f0749152abb08_Untitled design (7)-p-800.jpeg"
                alt="Error"
              />

              <div className="flex flex-col lg:w-[70%]  xl:w-[50%] ">
                <div className="flex  gap-4 px-6 lg:px-32">
                  <img
                    className="h-12 md:h-20 mt-10"
                    src="/621e13be2549e15940981b3f_quote-icon.png"
                    alt="Error"
                  />
                  <div className="flex flex-col justify-between h-auto xl:h-[520px] ">
                    <div className="mt-10">
                      <i className="font-axiforma text-lg md:text-[27px]">
                        Before, it was always a challenge for business owners
                        like me to communicate my ideas and share my ambitions
                        with other team members. With Product Hubb, its as easy
                        as importing a file
                      </i>
                      <br />
                      <i className="font-axiforma  text-base md:text-lg  text-[#2968ff]">
                        Jay Ramani, Small Business Owner
                      </i>
                    </div>
                    <div className="flex items-center gap-2">
                      <button>
                        <HiArrowLeftCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                      <button>
                        <HiArrowRightCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden mt-16 gap-10  md:gap-0 ">
              <img
                className="h-auto xl:h-[520px] w-full md:w-80 object-cover rounded-tl-2xl md:rounded-tl-none md:rounded-bl-2xl"
                src="/62c5cd96ef490593e42c2eaf_Untitled design (6)-p-800.jpeg"
                alt="Error"
              />

              <div className="flex flex-col lg:w-[70%]  xl:w-[50%] ">
                <div className="flex  gap-4 px-6 lg:px-32">
                  <img
                    className="h-12 md:h-20 mt-10"
                    src="/621e13be2549e15940981b3f_quote-icon.png"
                    alt="Error"
                  />
                  <div className="flex flex-col justify-between h-auto xl:h-[520px] ">
                    <div className="mt-10">
                      <i className="font-axiforma text-lg md:text-[27px]">
                        We know creating a new product can be overwhelming, but
                        Product Hubb walks you through the production process
                        step by step. With Product Hubb, you dont have to worry
                        about whats next.
                      </i>
                      <br />
                      <i className="font-axiforma  text-base md:text-lg  text-[#2968ff]">
                        Sean Breen, Project Manager
                      </i>
                    </div>
                    <div className="flex items-center gap-2">
                      <button>
                        <HiArrowLeftCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                      <button>
                        <HiArrowRightCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden mt-16 gap-10  md:gap-0 ">
              <img
                className="h-auto xl:h-[520px] w-full md:w-80 object-cover rounded-tl-2xl md:rounded-tl-none md:rounded-bl-2xl"
                src="/62c5ca74baf86e3b382fd5eb_Untitled design (5)-p-800.jpeg"
                alt="Error"
              />

              <div className="flex flex-col lg:w-[70%]  xl:w-[50%] ">
                <div className="flex  gap-4 px-6 lg:px-32">
                  <img
                    className="h-12 md:h-20 mt-10"
                    src="/621e13be2549e15940981b3f_quote-icon.png"
                    alt="Error"
                  />
                  <div className="flex flex-col justify-between h-auto xl:h-[520px] ">
                    <div className="mt-10">
                      <i className="font-axiforma text-lg md:text-[27px]">
                        We know some of the best work happens outside of the
                        office. You can update your project from the factory
                        floor or on a flight, and access powerful tools on the
                        go
                      </i>
                      <br />
                      <i className="font-axiforma  text-base md:text-lg  text-[#2968ff]">
                        Francis Ington, Mechanical Engineer
                      </i>
                    </div>
                    <div className="flex items-center gap-2">
                      <button>
                        <HiArrowLeftCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                      <button>
                        <HiArrowRightCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden mt-16 gap-10  md:gap-0 ">
              <img
                className="h-auto xl:h-[520px] w-full md:w-80 object-cover rounded-tl-2xl md:rounded-tl-none md:rounded-bl-2xl"
                src="/62c5c83d777923b7c510d040_Untitled design (4)-p-800.jpeg"
                alt="Error"
              />

              <div className="flex flex-col lg:w-[70%]  xl:w-[50%] ">
                <div className="flex  gap-4 px-6 lg:px-32">
                  <img
                    className="h-12 md:h-20 mt-10"
                    src="/621e13be2549e15940981b3f_quote-icon.png"
                    alt="Error"
                  />
                  <div className="flex flex-col justify-between h-auto xl:h-[520px] ">
                    <div className="mt-10">
                      <i className="font-axiforma text-lg md:text-[27px]">
                        Product Hubb keeps track of all the complicated
                        logistics important files and necessary instructions, so
                        you can worry about what matters most: bringing ideas to
                        life
                      </i>
                      <br />
                      <i className="font-axiforma  text-base md:text-lg  text-[#2968ff]">
                        Francis Ington, Mechanical Engineer
                      </i>
                    </div>
                    <div className="flex items-center gap-2">
                      <button>
                        <HiArrowLeftCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                      <button>
                        <HiArrowRightCircle className="w-10 text-[#2968ff] h-10" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Carosel;
