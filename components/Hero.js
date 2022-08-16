import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../public/hero-image.png'

const Hero = () => {
  return (
    <div className='block bg-white rounded-lg shadow-lg p-8 mb-8 md:grid grid-cols-4 gap-4 text-center md:text-left'>
      <div className='col-span-3'>
        <div className='text-2xl lg:text-3xl font-semibold mb-4'>
          One in Six Veterinarians Have Seriously Considered Suicide ...
        </div>
        <div className='mb-4'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione unde molestias repellat dignissimos temporibus iusto nam. Expedita vitae at deleniti eveniet, soluta ad cupiditate quas illo commodi consequatur beatae inventore voluptas magni dignissimos ratione. Autem ducimus laudantium illum itaque voluptatibus.
        </div>
        <div className='flex justify-center md:justify-start'>
            <Link href={`/about/`}>
                <span className='transition duration-300 ease-in transform hover:-translate-y-1 hover:bg-turquoise hover:text-gray-800 inline-block bg-indigo-600 rounded-full font-medium text-white px-8 py-3 cursor-pointer'>About</span>
            </Link>
        </div>
      </div>
      <div className='hidden md:flex cols-span-1 items-center justify-center'>
        <Image 
          src={heroImage}
          alt="Hero image"
        />
      </div>
    </div>
  )
}

export default Hero