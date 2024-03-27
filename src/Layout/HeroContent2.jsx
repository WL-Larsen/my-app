import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslate } from "../TranslationProvider";

function HeroContent2() {
  const { response } = useTranslate();

  return (
    <section className="flex ">
      <div className="flex md:space-x-16 lg:space-x-32">
        <div className="flex flex-col space-y-6 lg:space-y-12 md:pt-4 lg:pt-16">
          <h2 className=" font-int font-bold text-fy text-xl md:text-3xl lg:text-5xl leading-5">
            {response?.title}<br/>{response?.title2}
          </h2>
          <p className="text-white text-int  font-normal leading-4 tracking-normal text-base md:text-xl lg:text-2xl">
            {response.titleP}<br/>{response.titleP1}
          </p>
          <div className=" flex w-[278px] h-[52px] gap-[12px] ">
            <button className=" grid border-1 border-solid bg-white w-[127px] h-[52px] py-3 pr-5 pl-3 rounded-md gap-[10px] dark:bg-[#252128] border border-white">
              <div className="flex gap-[10px] ">
                <IoLogoGithub className=" text-btn  place-content-center w-[26px] h-[26.26px] dark:text-white" />
                <p className="text-btn font-int text-lg leading-7 font-medium text-left tracking-normal  h-[26.26px] dark:text-white">
                  Github
                </p>
              </div>
            </button>

            <button className=" grid border-1 border-solid bg-white w-[127px] h-[52px] py-3 pr-5 pl-3 rounded-md gap-[10px] dark:bg-[#252128] border border-white">
              <div className="flex gap-[10px]">
                <FaLinkedinIn className=" text-btn  place-content-center w-[26px] h-[26.26px] dark:text-white " />
                <p className="text-btn font-int text-lg leading-7 font-medium text-left tracking-normal  h-[26.26px] dark:text-white">
                  Linkedin
                </p>
              </div>
            </button>
          </div>
        </div>
        <img src="../assets/hero.jpg" alt="" className="w-0 md:w-60 lg:w-96  h-0 md:h-60 lg:h-96 rounded-[18px] object-cover " />
      </div>
    </section>
  );
}

export default HeroContent2;
