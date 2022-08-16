import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getFeaturedPosts } from '../services';
import { FeaturedPostCard } from '../components';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max:4000, min:1024 },
    items: 5,
  },

  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },

  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    const LeftArrow = (arrowProps) => { 
      const {carouselState, children, ...restArrowProps} = arrowProps;
      
      return ( <span {...restArrowProps}> {children} </span> ); 
    };
    
    const RightArrow = (arrowProps) => { 
      const {carouselState, children, ...restArrowProps} = arrowProps;
      
      return ( <span {...restArrowProps}> {children} </span> ); 
    };

    useEffect(() => {
        getFeaturedPosts()
            .then((result) => 
            setFeaturedPosts(result));
            setDataLoaded(true);
    }, [])

    const handleHover = (e) => {
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        if (e.target.classList.contains('left-arrow')) {
          leftArrow.firstChild.classList.add('text-gray-800');
          leftArrow.firstChild.classList.remove('text-white');
        } else {
          rightArrow.firstChild.classList.add('text-gray-800');
          rightArrow.firstChild.classList.remove('text-white');
        }
        

    }

    const endHover = (e) => {
      const leftArrow = document.querySelector('.left-arrow');
      const rightArrow = document.querySelector('.right-arrow');
      if (e.target.classList.contains('left-arrow')) {
        leftArrow.firstChild.classList.add('text-white');
        leftArrow.firstChild.classList.remove('text-gray-800');
      } else {
        rightArrow.firstChild.classList.add('text-white');
        rightArrow.firstChild.classList.remove('text-gray-800');
      }

    }

    const customLeftArrow = (
      <div onMouseEnter={handleHover} onMouseLeave={endHover} className="left-arrow absolute arrow-btn left-0 text-center px-3 py-3 cursor-pointer bg-indigo-600 rounded-full hover:bg-turquoise hover:color-gray-800 duration-300 ease-linear">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>
    );

    const customRightArrow = (
      <div onMouseEnter={handleHover} onMouseLeave={endHover} className="right-arrow absolute arrow-btn right-0 text-center px-3 py-3 cursor-pointer bg-indigo-600 hover:bg-turquoise rounded-full duration-300 ease-linear">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    );

    return (
    <>
      <div className="mb-8">
        <Carousel infinite customLeftArrow={<LeftArrow>{customLeftArrow}</LeftArrow>} customRightArrow={<RightArrow>{customRightArrow}</RightArrow>} responsive={responsive} itemClass="px-4">
          {dataLoaded && featuredPosts.map((post, index) => (
              <FeaturedPostCard post={post} key={index} />
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default FeaturedPosts