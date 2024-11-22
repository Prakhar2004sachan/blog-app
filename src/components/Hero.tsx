import React from 'react'

function Hero() {
  return (
    <div className='mt-[3rem] flex flex-col'>
        <p className='text-md text-blue-800 font-semibold'>Blog</p>
        <h1 className='hero-heading mt-2 inline-block text-4.5xl py-2 font-bold'>News, Ensight and more</h1>
        <p className='hero-info mt-1 text-xl font-normal leading-8 text-gray-700'>Learn more about Clerk, our approach to authentication, and company news.</p>
    </div>
  )
}

export default Hero