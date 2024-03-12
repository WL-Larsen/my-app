import React from 'react'

function Project() {
  return (
    <section className='flex justify-center bg-fy dark:bg-darkFy py-6 lg:py-16'>
       <div className='flex-col space-y-6 md:space-y-10 lg:space-y-12'>
            <h1 className='flex text-mv dark:text-fy font-bold text-xl md:text-4xl md:leading-10 lg:text-5xl lg:leading-[58px] '>Projects</h1>
            <div className='flex flex-col md:flex-row  bg-white dark:bg-[#2B2727] md:space-x-4 lg:space-x-12 drop-shadow-lg rounded-lg'>
                <img className="flex rounded-md md:rounded-none md:rounded-s-md lg:rounded-s-lg w-[220px] md:w-[280px] lg:w-[360px] h-[220px] md:h-[260px] lg:h-[360px]" src="src/assets/projects_1.png" alt="" />
                <div className='flex-col pl-1 space-y-2 md:space-y-2 lg:space-y-6 pt-4 md:pt-2 lg:pt-10 md:pr-6 lg:pr-10'>
                    <h2 className='text-mv dark:text-[#C1BAED] font-bold text-base md:text-lg lg:text-3xl'>Workintech</h2>
                    <p className='text-[#383838] dark:text-white font-normal text-xs md:text-sm lg:text-base w-[220px] md:w-[320px] lg:w-[480px]'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className='space-x-2 md:space-x-5'>
                        <button className='text-white text-xs md:text-sm bg-mv dark:bg-Pbtn rounded-[23px] w-[48px] md:w-[68px] h-[21px] md:h-[31px] '>react</button>
                        <button className='text-white text-xs md:text-sm bg-mv dark:bg-Pbtn rounded-[23px] w-[48px] md:w-[68px] h-[21px] md:h-[31px] '>redux</button>
                        <button className='text-white text-xs md:text-sm bg-mv dark:bg-Pbtn rounded-[23px] w-[48px] md:w-[68px] h-[21px] md:h-[31px] '>vercel</button>
                    </div>
                    <div className='space-x-5'>
                        <a className="tetx-[#120B39] dark:text-fy font-medium text-xs md:text-sm lg:text-[16px] underline" href="\">View Site</a>
                        <a className="tetx-[#120B39] dark:text-fy font-medium text-xs md:text-sm lg:text-[16px] underline" href="\">Github</a>
                    </div>
                    
                </div>
            </div>
            <div className='flex flex-col md:flex-row  bg-white dark:bg-[#2B2727] md:space-x-4 lg:space-x-12 drop-shadow-lg rounded-lg'>
                <img className="flex rounded-md md:rounded-none md:rounded-s-md lg:rounded-s-lg w-[220px] md:w-[280px] lg:w-[360px] h-[220px] md:h-[280px] lg:h-[360px]" src="src/assets/projects-2.png" alt="" />
                <div className='flex-col pl-1 space-y-2 md:space-y-2 lg:space-y-6 pt-4 md:pt-2 lg:pt-10 md:pr-6 lg:pr-10'>
                    <h2 className='text-mv dark:text-[#C1BAED] font-bold text-base md:text-lg lg:text-3xl'>Journey</h2>
                    <p className='text-[#383838] dark:text-white font-normal text-xs md:text-sm lg:text-base w-[220px] md:w-[320px] lg:w-[480px]'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                    <div className='space-x-2 md:space-x-5'>
                        <button className='text-white text-xs md:text-sm bg-mv dark:bg-Pbtn rounded-[23px] w-[48px] md:w-[68px] h-[21px] md:h-[31px] '>react</button>
                        <button className='text-white text-xs md:text-sm bg-mv dark:bg-Pbtn rounded-[23px] w-[48px] md:w-[68px] h-[21px] md:h-[31px] '>redux</button>
                        <button className='text-white text-xs md:text-sm bg-mv dark:bg-Pbtn rounded-[23px] w-[48px] md:w-[68px] h-[21px] md:h-[31px] '>vercel</button>
                    </div>
                    <div className='space-x-5'>
                        <a className="tetx-[#120B39] dark:text-fy font-medium text-xs md:text-sm lg:text-[16px] underline" href="\">View Site</a>
                        <a className="tetx-[#120B39] dark:text-fy font-medium text-xs md:text-sm lg:text-[16px] underline" href="\">Github</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}



export default Project