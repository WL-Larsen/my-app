import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslate } from "../TranslationProvider";

function HeroContent2() {
  const { response } = useTranslate();

  return (
    <section className="flex ">
      <div className="flex">
        <div className="">
          <h2 className=" font-int font-bold text-fy text-5xl">
            {response?.title}
          </h2>
          <p className="text-white text-int  font-normal leading-7 tracking-normal text-2xl">
            {response.titleP}
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
        <img src="" alt="" />
      </div>
    </section>
  );
}

export default HeroContent2;
