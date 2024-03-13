import React from 'react'
import { LuTwitter } from "react-icons/lu";
import { FaCodepen } from "react-icons/fa";
import { RiAtLine } from "react-icons/ri";
import { FiInstagram } from "react-icons/fi";
import { useTranslate } from '../TranslationProvider';

function Footer() {
  const {response} = useTranslate();
  return (
    <footer className='flex bg:white dark:bg-[#252128] justify-center py-6 lg:py-16'>
      <div className='flex flex-col justify-center  space-y-1 md:space-y-3 lg:space-y-6'>
        <h2 className='text-center text-[#4731D3] dark:text-[#8F88FF] font-bold text-xl md:text-3xl lg:text-5xl '>{response?.sendMe}</h2>
        <p className='text-center text-[#120B39] dark:text-white  text-xs md:text-base lg:text-xl w-44  md:w-72 lg:w-96 h-18 md:h-16 lg:h-16 pl-5 md:pl-0 lg:pl-5'>{response?.sendMeP}</p>
        <a className='text-center text-[#4731D3] dark:text-[#8F88FF] font-bold text-xs md:text-base lg:text-xl underline' href="">almilasucode@gmail.com</a>
        <nav className='flex justify-center space-x-1 md:space-x-2 lg:space-x-4'>
          <a href=""><LuTwitter  className='text-[#4731D3] dark:text-[#8F88FF] w-3 md:w-6 lg:w-9 h-3 md:h-6 lg:h-9'/></a>
          <a href=""><FaCodepen  className='text-[#4731D3] dark:text-[#8F88FF] w-3 md:w-6 lg:w-9 h-3 md:h-6 lg:h-9'/></a>
          <a href=""><RiAtLine  className='text-[#4731D3] dark:text-[#8F88FF] w-3 md:w-6 lg:w-9 h-3 md:h-6 lg:h-9'/></a>
          <a href=""><FiInstagram  className='text-[#4731D3] dark:text-[#8F88FF] w-3 md:w-6 lg:w-9 h-3 md:h-6 lg:h-9'/></a>
        </nav>
      </div>
            
    </footer>
  )
}

export default Footer;