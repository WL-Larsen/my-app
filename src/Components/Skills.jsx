import React from 'react'

function Skils() {
  return (
    <section className='dark:bg-[#2B2727]'>
      <div className='flex justify-center'>
        <p className='flex font-int text-[#4832D3] text-5xl leading-[58px] font-bold dark:text-fy '>Skills</p>
        <nav>
          <ul className='flex gap-4'>
            <img className='w-[120px] h-[120px] rounded-md' src="src/assets/java.jpg" />
            <a className="flex font-int text-[#777777] text-2xl font-medium items-center dark:text-white " href="/">JAVA SCRIPT</a>
          </ul>
          <ul className='flex gap-4'>
            <img className='w-[120px] h-[120px] rounded-md' src="src/assets/react.png" />
            <a className="flex font-int text-[#777777] text-2xl font-medium items-center dark:text-white " href="/">REACT</a>
          </ul>
          
        </nav>
      </div>
    </section>
   
  )
}

export default Skils
/* 
background: ;
font-family: Inter;
font-size: 48px;
font-weight: 700;
line-height: 58px;
letter-spacing: 0.01em;
text-align: left;
width: 128px
height: 58px */
