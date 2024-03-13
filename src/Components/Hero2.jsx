import React from 'react'
import HeroContent from '../Layout/HeroContent.jsx'
import DarkMode from '../Layout/DarkMode.jsx'



function Hero2(props) {
  return (
  
    <main className='flex '>
      <div className='flex w-[70%] bg-mv dark:bg-darkMv space-x-96 py-6 lg:py-16 ' >
        <div className='flex justify-center'> 
          <p className=' font-int font-bold text-[32px] text-fy'>almila</p>
          <a className='flex text-[#777777] hover:text-slate-100 text-sm  font-bold' href="/"><p className='text-fy dark:text-[#BAB2E7]'>TÜRKÇE</p>'YE GEÇ</a>
        </div>
      </div>
      <div></div>
    </main>  
  )
}

export default Hero2