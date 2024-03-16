import React from "react";
import HeroContent from "../Layout/HeroContent.jsx";
import DarkMode from "../Layout/DarkMode.jsx";
import { useTranslate } from "../TranslationProvider.jsx";

function Hero() {
  const { language, toggleLanguage } = useTranslate();
  console.log(language);

  return (
    <main className="flex bg-gradient-to-r from-mv from-70% to-fy to-30% dark:bg-gradient-to-r dark:from-darkMv dark:to-darkFy justify-center">
      <div className="flex">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-fy">
          huseyin
        </h1>
        <div className="flex gap-5 ">
          <button
            onClick={toggleLanguage}
            className="text-[#777777] hover:text-slate-100 
           text-xs md:text-xs lg:text-sm  font-bold"
          >
            {language === "tr" ? "CHANGE to ENGLISH" : "TÜRKÇE'YE GEÇ"}
          </button>
          <DarkMode className="top-0" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
