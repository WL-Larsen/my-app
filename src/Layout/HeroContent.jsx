import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslate } from "../TranslationProvider";

function HeroContent() {
  const { response } = useTranslate();

  return (
    <section className="flex relative  w-[955px] h-[375.89px] justify-between top-[76px] left-[152px] ">
      <div className="relative grid w-[528.88px] h-[375.89px]  top-[46px]">
        <p className=" text-left tracking-normal font-int font-bold text-[54px] leading-[59px] text-fy w-[528.88px] h-[118px] ">
          {response?.title}
        </p>
        <p className="text-white text-int text-2xl font-normal leading-7 tracking-normal text-left w-[528.88px] h-[58px]">
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
      <img
        src="../assets/hero.jpg"
        className="relative w-[350px] h-[375.89px] rounded-[18px] right-[30px] object-cover"
      />
    </section>
  );
}

export default HeroContent;
