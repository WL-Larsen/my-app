import React from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";



function HeroContent() {
  return (
    <section className=' flex relative  w-[955px] h-[375.89px] justify-between top-[148px] left-[200px] '>
      <div className ='grid w-[528.88px] h-[375.89px]  top-[46px]'>
        <p className=' text-left tracking-normal font-int font-bold text-[54px] leading-[59px] text-fy w-[528.88px] h-[118px] '>I am a Frontend<br></br>Developer...</p>
        <p className='text-white text-int text-2xl font-normal leading-7 tracking-normal text-left w-[528.88px] h-[58px]'>...who likes to craft solid and scalable frontend products with great user experiences.</p>

        <div className=' flex w-[278px] h-[52px] gap-[12px] '>
        <button className=' grid border-1 border-solid border-btn bg-white w-[127px] h-[52px] py-3 pr-5 pl-3 rounded-md gap-[10px] dark:bg-[#252128] border border-white'>
          <div className='flex gap-[10px] '>
            <IoLogoGithub className=' text-btn  place-content-center w-[26px] h-[26.26px] dark:text-white'/>
            <p className='text-btn font-int text-lg leading-7 font-medium text-left tracking-normal  h-[26.26px] dark:text-white'>Github</p>
          </div>
        </button>

        <button className=' grid border-1 border-solid border-btn bg-white w-[127px] h-[52px] py-3 pr-5 pl-3 rounded-md gap-[10px] dark:bg-[#252128] border border-white'>
          <div className='flex gap-[10px]'>
            <FaLinkedinIn  className=' text-btn  place-content-center w-[26px] h-[26.26px] dark:text-white '/>
            <p className='text-btn font-int text-lg leading-7 font-medium text-left tracking-normal  h-[26.26px] dark:text-white'>Linkedin</p>
          </div>
        </button>
        </div>
      </div>
      <img src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QP4xqSAhUnCFVyBsy2Za~LdFNdyR4jcCLe6sdYqTJbaxcZXPhGUbKoJAFgMwqP17~6b3-QEyax8lcvekaH6FsYFYK-hTJuMy4r9URYM54YXPhQV3VF6pAMC7ebIcBlI-3q51C0LyNBN57-8sXfTu0UxBi7XW-qgb8GWtqikhNq79n-hYf6nCU7u63CvwCq1e0Y~dbJjIQz~3f-E2fBqfwmYJadrkaEKPwR7fhKgeG4lITYdikeT9M3hQcaJkfVBZjWtswuVBNsqKyvTP3yoKlLIVtNp3-nfAO3yFU7CexJeXTDIAnOcRi--KzCf0pmK1lGlPNRBxixHj6s1PZMIuCQ__" className='w-[350px] h-[375.89px] rounded-[18px]' />
    </section>
  )
}

export default HeroContent