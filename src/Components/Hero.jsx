import React from 'react'
import HeroContent from './HeroContent'
import Toggle from '../Layout/Toggle.jsx'


function Hero(props) {
  return (
  
    <main className='flex w-full h-[671px]'>
      <div className='bg-mv'>
        <div className='flex relative w-[960px] h-[72px] top-[37px] left-[200px]'> 
          <p className='font-int text-[32px] font-bold text-[32px] leading-[72px] text-left  text-fy'>almila</p>
          <a className='relative grid text-[#777777] hover:text-slate-100 
          w-[138px] h-[18px] left-[550px]  text-sm font-ınt font-bold' href="/">TÜRKÇE'YE GEÇ</a>
        </div>
        <HeroContent />
      </div>
      <div className='grid flex w-[532px] h-[671px] bg-fy'>
        <div className='relative flex w-[167px] h-[24px] gap-[16px] top-[32px]'>
          <Toggle />
          <p>DARK MODE</p>
        </div>
      </div>
    </main>  
  )
}

export default Hero
/* width: Hug ()
height: Hug ()
top: 32px
left: 1026px
gap: 16px */
