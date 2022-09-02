import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../public/hero-image.png'

const Hero = () => {
  return (
    <div className='block bg-white rounded-lg shadow-lg p-8 mb-8 md:grid grid-cols-4 gap-4 text-center md:text-left'>
      <div className='col-span-3'>
        <h1 className='text-2xl lg:text-3xl font-semibold mb-4'>
          One in Six Veterinarians Have Seriously Considered Suicide ...
        </h1>
        <p className='mb-4 xl:text-lg'>
          This is the most pressing issue facing the veterinary industry today. We&apos;re dealing with an incredibly complex problem that has no silver bullet.
        </p>
        
        <p className='mb-4 xl:text-lg'>
          Through collaboration and positivity, I believe that veterinarians can help each other find joy within this amazing profession. 
          
        </p>
        <p className='mb-4 xl:text-lg'>
          This is my journey to explore the topic of mental wellbeing in veterinary medicine.
        </p>
        <button>
            <Link className='flex justify-center md:justify-start' href={`/about/`}>
                <span className='transition duration-300 ease-in transform hover:-translate-y-1 hover:bg-turquoise hover:text-gray-800 inline-block bg-indigo-600 rounded-full font-medium text-white px-8 py-3 cursor-pointer'>About</span>
            </Link>
        </button>
      </div>
      <div className='hidden md:flex cols-span-1 items-center justify-center '>
        <Image 
          src={heroImage}
          alt="Hero image"
        />
      </div>
    </div>
  )
}

export default Hero