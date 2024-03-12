import React from 'react'

function Profile() {
  return (
    <section className='flex bg-mv dark:bg-darkMv py-3 md:py-6 lg:py-16 justify-center '>
        <div className='flex-col space-y-6 md:space-y-10 lg:space-y-12'>
            <h1 className='flex text-fy font-bold text-xl md:text-4xl md:leading-10 lg:text-5xl lg:leading-[58px] '>Profile</h1>
            <div className='flex flex-col md:flex-row lg:flex-row space-y-2 md:space-y-0  md:space-x-4 lg:space-x-6'>
                <div className='gap-10 md:gap-16 lg:gap-28 space-y-4 lg:space-y-8 '>
                    <h3 className='text-white font-medium text-xs md:text-2xl lg:text-3xl'>Basic Information</h3>
                    <div className='flex gap-2'>
                        <div className='space-y-2 md:space-y-4 lg:space-y-6'>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>Birth Date</p>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>Current Address</p>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>Educational <br/>status</p>
                            <p className='flex text-fy text-xs md:text-sm lg:text-base'>Preferred role</p>
                        </div>
                        <div className='space-y-2 md:space-y-4 lg:space-y-6'>
                            <p className='text-white text-xs md:text-sm lg:text-base'>24.03.1996</p>
                            <p className='text-white text-xs md:text-sm lg:text-base'>Ankara</p>
                            <p className='text-white text-xs md:text-sm lg:text-base'>Hacettepe Ünv. Biyoloji <br/>Lisans, 2016</p>
                            <p className='text-white text-xs md:text-sm lg:text-base'>Frontend, UI</p>
                        </div>
                    </div>  
                </div>          
                <img className="flex rounded-xl w-[220px] md:w-[240px] lg:w-[300px] h-[220px] md:h-[260px] lg:h-[300px] drop-shadow-lg" src="src/assets/profile.png" alt="" />
                <div className=' w-[220px] md:w-[260px] lg:w-[300px] h-[140px] md:h-[260px] lg:h-[300px] space-y-1 md:space-y-2 lg:space-y-4'>
                    <h2 className='text-white font-medium text-xs md:text-2xl lg:text-3xl'>About Me</h2>
                    <p className='text-white font-normal text-xs md:text-sm lg:text-lg '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. </p>
                    <p className='text-white font-normal text-xs md:text-sm lg:text-lg'>
                    Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile
