import React, { useContext, useState, useEffect } from 'react'

import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/wiadn-logo.png';

const categories = [{name: "travel", slug:"travel"}, {name: "balloons", slug:"balloons"}]

const Header = () => {
  const handleNavClick = () => {
    const burgerButton = document.querySelector('.burger-button');
    const slideNav = document.querySelector('.slide-nav');
    burgerButton.classList.toggle('open');
    slideNav.classList.toggle('translate-x-full');
  }

  const handleItemClick = () => {
    const burgerButton = document.querySelector('.burger-button');
    const slideNav = document.querySelector('.slide-nav');
    setTimeout(() => {
        burgerButton.classList.toggle('open');
        slideNav.classList.toggle('translate-x-full');
    }, 200)
    
  }

  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full flex justify-between border-amber-200">
            <div className="md:float-left block my-4 md:m-4">
                <Link href="/">
                    <span className='cursor-pointer'>
                    <Image
                        alt={`Logo`}
                        src={logo}
                    />
                    </span>
                </Link>
                
            </div>
            <div className='container flex justify-end items-end px-4 md:my-4'>
                <nav className="slide-nav bg-turquoise fixed top-0 right-0 translate-x-full ease-out duration-300 md:hidden z-20">
                    <ul className="slide-nav-items right-0 list-none h-screen w-screen bg-indigo py-6 px-8">
                        <li onClick={handleItemClick} className="text-coral font-semibold text-lg"><Link href={`/`}>What is Andy Doing NOW?!</Link></li>
                        <li onClick={handleItemClick} className="my-4 ml-2 hover:border-b-coral hover:border-b-2 duration-200 ease-linear w-fit"><Link className="" href={`/about`}>About</Link></li>
                        <li onClick={handleItemClick} className="my-4 ml-2 hover:border-b-coral hover:border-b-2 duration-200 ease-linear w-fit"><Link className="" href={`/page/1`}>Blogs</Link></li>
                        <li onClick={handleItemClick} className="my-4 ml-2 hover:border-b-coral hover:border-b-2 duration-200 ease-linear w-fit"><Link className="" href={`/resources`}>Resources</Link></li>

                        <li onClick={handleItemClick}className="ml-2 absolute bottom-20 text-coral text-2xl font-extrabold hover:bg-indigo-700 hover:rounded-xl hover:px-2 hover:py-2 hover:mb-1 duration-300 ease-in"><Link className="" href={`/contact`}>CONTACT</Link></li>
                        <li className="ml-2 absolute bottom-16"><Link className="" href="mailto:andy@modernvet.solutions">andy@modernvet.solutions</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="hidden md:flex space-x-12">
                        <li className="px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise">
                            <Link href={`/about`}>About</Link>
                        </li>
                        <li className="px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise">
                        <Link href={`/page/1`}>Blogs</Link>
                        </li>
                        <li className="px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise">
                            <Link href={`/resources`}>Resources</Link>
                        </li>
                        <li className="px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise">
                        <Link href={`/contact`}>Contact</Link>
                        </li>
                        
                    </ul>
                </nav>
                <button
                    onClick={handleNavClick}
                    className="burger-button burger-transition md:hidden w-10 h-10 fixed right-8 top-4 bg-none cursor-pointer z-20" aria-label="menu">
                        <span className="absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-3"></span>
                        <span className="absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-5 "></span>
                        <span className="absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-7 "></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header