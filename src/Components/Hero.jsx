import React from 'react'
import HeroContent from './HeroContent'
import DarkMode from '../Layout/DarkMode.jsx'



function Hero(props) {
  console.log("mode", localStorage.theme) 
  return (
  
    <main className='flex w-full h-[671px]'>
      <div className='bg-mv w-[70%] h-[671px] dark:bg-darkMv'>
        <div className='flex relative w-[960px] h-[72px] top-[37px] left-[152px]'> 
          <p className='font-int text-[32px] font-bold text-[32px] leading-[72px] text-left  text-fy'>almila</p>
          <a className='relative flex text-[#777777] hover:text-slate-100 
          w-[138px] h-[18px] left-[524px]  text-sm font-ınt font-bold' href="/"><p className='text-fy dark:text-[#BAB2E7]'>TÜRKÇE</p>'YE GEÇ</a>
        </div>
        <HeroContent />
      </div>
      <div className='grid flex w-[532px] h-[671px] bg-fy dark:bg-darkFy'>
        <div className='relative flex w-[175px] h-[24px] gap-[16px] top-[35px] left-[10px]'>
          <DarkMode />
          
        </div>
      </div>
    </main>  
  )
}

export default Hero



