import React from 'react'
import HeroContent from './HeroContent'


function Hero(props) {
  return (
    <>
    <main className='flex flex-row'>
    <div className='font-int w-full h-[671px] bg-mv'>
<<<<<<< HEAD
       <div><p className=' relative font-bold text-[36px] leading-[72px] text-fy w-[960px] h-[72px] top-[37px] left-[239px]'>almila</p>
        <a className='relative text-[#777777] hover:text-slate-100 
        w-[138px] h-[18px] left-[761px] top-[35px] text-sm font-ınt font-bold' href="/">TÜRKÇE'YE GEÇ</a></div>
=======
        <p className=' relative font-bold text-[36px] leading-[72px] text-fy w-[960px] h-[72px] top-[37px] left-[239px]'>almila</p>
        <a className='relative text-[#777777] hover:text-slate-100 
        w-[138px] h-[18px] left-[761px] top-[35px] text-sm font-ınt font-bold' href="/">TÜRKÇE'YE GEÇ</a>
>>>>>>> f31f77f4ff151110af4e50202950b8fba0ae80c4
        <HeroContent />
    </div>
    <div className='flex w-[432px] h-[671px] bg-fy'></div>
    </main>  
    </>
  )
}

export default Hero
