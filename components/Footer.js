import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-screen bg-turquoise text-[#1B047C] mt-24 py-24 px-8 md:px-14 lg:px-24 flex flex-col lg:flex-row-reverse items-center justify-around gap-6">
        <ul className="footer-social text-xs lg:text-sm flex flex-col items-center gap-1 w-full lg:items-start lg:w-auto lg:flex-col lg:gap-4 ">
          <li className="font-bold">HELPFUL LINKS</li>
          <li><a href={`https://www.linkedin.com/in/andychiangucd/`} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={`https://www.kovitapets.com/`} target="_blank" rel="noopener noreferrer">KovitaPets</a></li>
          <li><Link className="" href={`/`}>Privacy Policy</Link></li>
          <li><Link className="" href={`/`}>Cookie Policy</Link></li>
          <li><Link className="" href={`/`}>Terms of Service</Link></li>
        </ul>
        <ul className="footer-nav text-sm lg:text-base flex flex-wrap justify-around w-full lg:w-auto lg:flex-col lg:gap-4"> 
          <li><Link className="" href={`/about`}>About</Link></li>
          <li><Link className="" href={`/page/1`}>Blogs</Link></li>
          <li><Link className="" href={`/resources`}>Resources</Link></li>
          <li><Link className="" href={`/contact`}>Contact</Link></li>
        </ul>
        <div><span className="text-indigo-600 text-xs">poweredBy</span> ModernVet <span className="text-coral text-xl font-extrabold">.</span> Solutions
            <div className="text-xs text-haze text-center">© 2022, All Rights Reserved.</div></div>
    </div>
  )
}

export default Footer