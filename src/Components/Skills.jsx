import React from 'react'

function Skils() {
  return (
    <section className='dark:bg-[#2B2727]  py-6 lg:py-16 '>
      <div className='flex gap-10 md:gap-16 lg:gap-28 justify-center'>
        <p className='flex text-[#4832D3] font-bold dark:text-fy  md:text-3xl md:leading-10 lg:text-5xl lg:leading-[58px]'>Skills</p>
       
        <nav className='grid md:grid-cols-2 flex-col items-center justify-center gap-y-4  md:gap-y-8 md:gap-x-16  lg:gap-y-10 lg:gap-x-28 '>
          <ul className='flex gap-1 md:gap-3 lg:gap-4'>
            <img className='drop-shadow-lg w-[40px] md:w-[80px] lg:w-[120px] h-[40px] md:h-[80px] lg:h-[120px] rounded-md' src="src/assets/java.jpg" />
            <a className="flex font-int text-[#777777]  font-medium items-center dark:text-white lg:text-2xl " href="/">JAVA SCRIPT</a>
          </ul>

          <ul className='flex gap-1 md:gap-3 lg:gap-4'>
            <img className=' drop-shadow-lg w-[40px] md:w-[80px] lg:w-[120px] h-[40px] md:h-[80px] lg:h-[120px] rounded-md' src="src/assets/react.png" />
            <a className="flex font-int text-[#777777]  font-medium items-center dark:text-white lg:text-2xl " href="/">REACT</a>
          </ul>

          <ul className='flex gap-1 md:gap-3 lg:gap-4'>
            <img className='drop-shadow-lg w-[40px] md:w-[80px] lg:w-[120px] h-[40px] md:h-[80px] lg:h-[120px] rounded-md bg-[#764ABC]' src="src/assets/redux.png" />
            <a className="flex font-int text-[#777777]  font-medium items-center dark:text-white lg:text-2xl " href="/">REDUX</a>
          </ul>

          <ul className='flex gap-1 md:gap-3 lg:gap-4'>
            <img className='drop-shadow-lg w-[40px] md:w-[80px] lg:w-[120px] h-[40px] md:h-[80px] lg:h-[120px] rounded-md bg-[#764ABC]' src="src/assets/node.jpg" />
            <a className="flex font-int text-[#777777]  font-medium items-center dark:text-white lg:text-2xl " href="/">NODE</a>
          </ul> 

          <ul className='flex gap-1 md:gap-3 lg:gap-4'>
            <img className='drop-shadow-lg w-[40px] md:w-[80px] lg:w-[120px] h-[40px] md:h-[80px] lg:h-[120px] rounded-md bg-[#764ABC]' src="src/assets/vsCode.png" />
            <a className="flex font-int text-[#777777]  font-medium items-center dark:text-white lg:text-2xl " href="/">VS CODE</a>
          </ul>

          <ul className='flex gap-1 md:gap-3 lg:gap-4'>
            <img className='drop-shadow-lg w-[40px] md:w-[80px] lg:w-[120px] h-[40px] md:h-[80px] lg:h-[120px] rounded-md bg-[#764ABC]' src="src/assets/figma.jpg" />
            <a className="flex font-int text-[#777777]  font-medium items-center dark:text-white lg:text-2xl " href="/">REDUX</a>
          </ul>

        </nav>
      </div>
    </section>
   
  )
}

export default Skils
