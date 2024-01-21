import Image from 'next/image'
import React from 'react'

export default function Intro() {
  return (
    <section>
        <div className='flex items-center justify-center '>
           <div className='relative'>
            <Image src="https://pbs.twimg.com/profile_images/1678016170446684165/o9zychLp_400x400.jpg" alt='prince potrait' width='192' height='192' 
             quality="95"  priority={true} className='h-24 w-24 rounded-full border-[0.35rem] object-cover shadow-xl border-white'/>
             <span className='absolute bottom-0 right-0 text-2xl'>
                👋 
             </span>
            </div> 
        </div>
    </section>
  )
}
