import React from 'react'

function Profile() {
  return (
    <section className='flex bg-mv dark:bg-darkMv py-6 lg:py-16 justify-center '>
        <div className='flex-col gap-10 md:gap-16 lg:gap-28 space-y-4 '>
            <h1 className='flex text-fy font-bold text-2xl md:text-3xl lg:text-5xl '>Profile</h1>
            <div className='space-y-3'>
                <h3 className='text-white text-2xl font-medium'>Basic Information</h3>
                <div className='flex gap-4'>
                    <div className='space-y-2'>
                        <p className='flex  text-base text-fy '>Birth Date</p>
                        <p className='flex  text-base text-fy '>Current Address</p>
                        <p className='flex  text-base text-fy '>Educational <br/>status</p>
                        <p className='flex  text-base text-fy '>Preferred role</p>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-white'>24.03.1996</p>
                        <p className='text-white'>Ankara</p>
                        <p className='text-white'>Hacettepe Ünv. Biyoloji <br/>Lisans, 2016</p>
                        <p className='text-white'>Frontend, UI</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile

{/* <p></p>
<p></p>
<p></p>
</div>
<div>

<p></p>
<p></p>
<p></p> */}