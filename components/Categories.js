import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCatetories] = useState([]);

  useEffect(() => {
    getCategories()
        .then((newCategories) => setCatetories(newCategories))
  }, []);
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-12'>
        <h3 className='text-xl mb-4 font-semibold border-b border-b-amber-300 pb-4'>
            Categories
        </h3>
        {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='px-3 py-3 rounded-md duration-200 ease-in hover:bg-turquoise cursor-pointer block'>
                    {category.name}
                </span>
            </Link>
        ))}
    </div>
  )
}

export default Categories