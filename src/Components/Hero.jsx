import React from 'react'
import HeroContent from '../Layout/HeroContent.jsx'
import DarkMode from '../Layout/DarkMode.jsx'
import { useTranslate } from '../TranslationProvider.jsx'



function Hero() {
  const {toggleLanguage } = useTranslate()


  return (
  
    <main className='flex w-full '>
      <div className='flex flex-col  items-center bg-mv w-[70%] h-[671px] dark:bg-darkMv'>
        <div className='flex  relative w-[455px] md:w-[755px] lg:w-[955px] h-[72px] top-[37px] left-20 md:left-24 lg:left-[152px] space-x-36 md:space-x-[400px] lg:space-x-[540px]'> 
          <p className=' flex items-center font-int font-bold text-xl md:text-2xl lg:text-3xl text-left  text-fy'>almila</p>
          <a onClick={toggleLanguage} className='flex  text-[#777777] hover:text-slate-100 
           text-xs md:text-xs lg:text-sm  font-bold' href="/"><p className='text-fy dark:text-[#BAB2E7]' >TÜRKÇE</p>'YE GEÇ</a>
        </div>
        <HeroContent />
      </div>
      <div className='grid w-[532px] h-[671px] bg-fy dark:bg-darkFy'>
        <div className='relative flex w-[175px] h-[24px] gap-[16px] top-[35px] left-[10px]'>
          <DarkMode />
          
        </div>
      </div>
    </main>  
  )
}

export default Hero



