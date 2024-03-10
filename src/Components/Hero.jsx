import React from 'react'
import HeroContent from '../Layout/HeroContent.jsx'
import DarkMode from '../Layout/DarkMode.jsx'



function Hero(props) {
  return (
  
    <main className='flex w-full h-[671px]'>
      <div className='bg-mv w-[70%] h-[671px] dark:bg-darkMv'>
        <div className='flex justify-between relative w-[725px] h-[72px] top-[37px] left-[152px]'> 
          <p className='font-int font-bold text-[32px] leading-[72px] text-left  text-fy'>almila</p>
          <a className='relative flex text-[#777777] hover:text-slate-100 
          w-[138px] h-[18px] text-sm font-ınt font-bold' href="/"><p className='text-fy dark:text-[#BAB2E7]'>TÜRKÇE</p>'YE GEÇ</a>
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



