import React from 'react';
import HeroContent from '../Layout/HeroContent.jsx';
import DarkMode from '../Layout/DarkMode.jsx';
import { useTranslate } from '../TranslationProvider.jsx';

function Hero() {
  const { toggleLanguage } = useTranslate();

  return (
    <main className='flex flex-col lg:flex-row w-full h-[671px]'>
      {/* Sol sütun */}
      <div className='flex flex-col justify-between items-center bg-mv w-full lg:w-[70%] h-full dark:bg-darkMv'>
        <div className='relative w-[100%] lg:w-[955px] h-[72px] lg:top-[37px] lg:left-[152px] space-y-4 lg:space-y-0 lg:flex lg:items-center'> 
          <p className='font-int font-bold text-[32px] leading-[72px] text-left text-fy'>almila</p>
          <a onClick={toggleLanguage} className='flex text-[#777777] hover:text-slate-100 w-[338px] h-[18px] text-sm font-bold' href="/">
            <p className='text-fy dark:text-[#BAB2E7]' onClick={() => c}>TÜRKÇE'YE GEÇ</p>
          </a>
        </div>
        <HeroContent />
      </div>

      {/* Sağ sütun */}
      <div className='flex items-center justify-center bg-fy dark:bg-darkFy w-full lg:w-[30%] h-full'>
        <div className='relative flex gap-[16px]'>
          <DarkMode />
        </div>
      </div>
    </main>  
  );
}

export default Hero;