import React from 'react'
import { useTranslate } from '../TranslationProvider';

function Profile() {
    const {response} = useTranslate();
  return (
    <section className='flex bg-mv dark:bg-darkMv py-3 md:py-6 lg:py-16 justify-center '>
        <div className='flex-col space-y-6 md:space-y-10 lg:space-y-12'>
            <h1 className='flex text-fy font-bold text-xl md:text-4xl md:leading-10 lg:text-5xl lg:leading-[58px] '>{response?.profile}</h1>
            <div className='flex flex-col md:flex-row lg:flex-row space-y-2 md:space-y-0  md:space-x-4 lg:space-x-6'>
                <div className='gap-10 md:gap-16 lg:gap-28 space-y-4 lg:space-y-8 '>
                    <h3 className='text-white font-medium text-xs md:text-2xl lg:text-3xl'>{response?.basicInformation}</h3>
                    <div className='flex gap-2'>
                        <div className='space-y-2 md:space-y-4 lg:space-y-6'>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>{response?.birthDate}</p>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>{response?.currentAddress}</p>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>{response?.educational} <br/>{response?.status}</p>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>{response?.preferredRole}</p>
                        </div>
                        <div className='space-y-2 md:space-y-4 lg:space-y-6'>
                            <p className='text-white text-xs md:text-sm lg:text-base'>24.03.1996</p>
                            <p className='text-white text-xs md:text-sm lg:text-base'>Ankara</p>
                            <p className='text-white text-xs md:text-sm lg:text-base'>Hacettepe Ünv. Biyoloji <br/>Lisans, 2016</p>
                            <p className='text-white text-xs md:text-sm lg:text-base'>Frontend, UI</p>
                        </div>
                    </div>  
                </div>          
                <img className="flex rounded-xl w-[220px] md:w-[240px] lg:w-[300px] h-[220px] md:h-[260px] lg:h-[300px] drop-shadow-lg" src="../assets/profile.jpg" alt="" />
                <div className=' w-[220px] md:w-[260px] lg:w-[300px] h-[140px] md:h-[260px] lg:h-[300px] space-y-1 md:space-y-2 lg:space-y-4'>
                    <h2 className='text-white font-medium text-xs md:text-2xl lg:text-3xl'>{response?.aboutMe}</h2>
                    <p className='text-white font-normal text-xs md:text-sm lg:text-lg '>{response?.aboutMeP1} </p>
                    <p className='text-white font-normal text-xs md:text-sm lg:text-lg'>
                    {response?.aboutMeP2}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile
