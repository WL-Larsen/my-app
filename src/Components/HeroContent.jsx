import React from 'react';

/* 
yazı
background: #3730A3;----
//styleName: text-lg/leading-7/font-medium;-----
font-family: Inter;-----
font-size: 18px;---
font-weight: 500;-----
line-height: 28px;-----
letter-spacing: 0em;--------
text-align: left;--------
Githubwidth: 59px
height: 28px

ablem
brand / githubbac
kground: #3730A3;
width: 26px
height: 26.26px


 */ 

function HeroContent() {
  return (
    <section className='relative grid w-[955px] h-[375.89px] justify-between top-[148px] left-[239px] '>
      <div className ='grid w-[528.88px] h-[375.89px] gap-[36px]'>
        <p className=' text-left tracking-normal font-int font-bold text-[54px] leading-[59px] text-fy w-[528.88px] h-[118px] '>I am a Frontend<br></br>Developer...</p>
        <p className='text-white text-int text-2xl font-normal leading-7 tracking-normal text-left w-[528.88px] h-[58px]'>...who likes to craft solid and scalable frontend products with great user experiences.</p>
        <div className=' flex w-[278px] h-[52px] gap-[12px] '>
        
        <button className='grid border-1 border-solid border-btn bg-white w-[127px] h-[52px] py-3 pr-5 pl-3 rounded-md gap-[10px] text-btn font-int text-lg leading-7 font-medium text-left tracking-normal'>
       
          Github
          </button>
        <button className='grid border-1 border-solid border-btn bg-white w-[127px] h-[52px] py-3 pr-5 pl-3 rounded-md gap-[10px] text-btn font-int text-lg leading-7 font-medium text-left tracking-normal'>Linkedin</button>
        </div>
      </div>
    </section>
  )
}



export default HeroContent