import React from 'react';
import Link from 'next/link';

const Resources = () => {

  return (
    <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
      <h1 className='mb-8 text-5xl font-semibold'>
        Contact
      </h1>
      {/* <ul className="text-xl leading-10 pl-6">
          <li className="my-2">
              <a className="text-indigo-600 hover:text-turquoise duration-200 ease-linear" href={`https://www.avma.org/resources-tools/wellbeing`} target="_blank" rel="noopener noreferrer">AVMA Wellbeing and Peer Assistance</a>
              <p className="text-sm px-4">AVMA offers a wide range of useful resources that assist with personal well-being. For those interested to learn more about the veterinary well-being space, this is a great place to start.</p>
          </li>
          <li className="my-2">
              <a className="text-indigo-600 hover:text-turquoise duration-200 ease-linear" href={`https://1lifecc.com/`} target="_blank" rel="noopener noreferrer">1 Life Connected</a>
              <p className="text-sm px-4">Dr. Kimberly Pope-Robinson, founder of 1 Life Connected and author of The Unspoken Life, shares the amazing story of how she rises from the brink of suicide to guiding fellow veterinarians in the mental health space. She introduces the 1 Life Connected Commitment that reminds us to focus on Recognize, Embrace, Connect, and steer away from Name, Blame, Judge. Her story is a true inspiration that encouraged me to advocate for positive well-being.</p>
          </li>
          <li className="my-2">
              <a className="text-indigo-600 hover:text-turquoise duration-200 ease-linear" href={`https://reliefrover.com/`} target="_blank" rel="noopener noreferrer">Relief Rover</a>
              <p className="text-sm px-4">A platform designed to improve veterinarians’ well-being by allowing flexibility and control over schedules through an efficient, transparent, and accessible relief system.</p>
          </li>
          <li className="my-2">
              <a className="text-indigo-600 hover:text-turquoise duration-200 ease-linear" href={`https://qprinstitute.com/`} target="_blank" rel="noopener noreferrer">QPR Institute</a>
              <p className="text-sm px-4">Question. Persuade. Refer. 3 key steps anyone can learn to help prevent suicide.</p>
          </li>
      </ul> */}
      <h2>Complete contact form will be available soon</h2>
      <h2>Please e-mail <span className="text-indigo-600"><Link  href="mailto:andy@modernvet.solutions">andy@modernvet.solutions</Link></span> for any inquiry</h2>
    </div>
  )
}

export default Resources;