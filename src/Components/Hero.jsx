import React from "react";
import DarkMode from "../Layout/DarkMode.jsx";
import HeroContent from "../Layout/HeroContent.jsx";

function Hero() {
  return (
    <main className="h-screen mp flex bg-mv md:bg-sharp-gradient dark:bg-darkMv md:dark:bg-dark-sharp-gradient justify-center">
      <div className="space-y-8 md:space-y-10 lg:space-y-20">
        <div className="flex justify-between flex-grow">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl text-fy">
            huseyin
          </h1>
          <DarkMode />
        </div>
        <HeroContent />
      </div>
    </main>
  );
}

export default Hero;
