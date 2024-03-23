import React from "react";
import HeroContent from "../Layout/HeroContent.jsx";
import DarkMode from "../Layout/DarkMode.jsx";
import { useTranslate } from "../TranslationProvider.jsx";
import HeroContent2 from "../Layout/HeroContent2.jsx";

function Hero() {
  const { language, toggleLanguage } = useTranslate();
  console.log(language);

  return (
    <main className="flex bg-gradient-to-r from-mv from-50% to-fy  dark:bg-gradient-to-r dark:from-darkMv dark:from-50% dark:to-darkFy justify-center py-6 lg:py-16">
      <div className="space-y-10">
        <div className="flex gap-24 md:gap-80 lg:gap-[470px]">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-fy">
            huseyin
          </h1>
          <div className="flex gap-2 md:gap-8  lg:gap-14 items-start">
            <button
              onClick={toggleLanguage}
              className="text-[#fac5c5] hover:text-slate-100 
           text-[8px] md:text-xs lg:text-sm  font-bold"
            >
              {language === "tr" ? "CHANGE to ENGLISH" : "TÜRKÇE'YE GEÇ"}
            </button>
            <DarkMode />
          </div>
        </div>
        <HeroContent2 />
      </div>
    </main>
  );
}

export default Hero;
