import moment from 'moment';
import Link from 'next/link';

const postCard = ( { post }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-5 md:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 xl:pb-96 mb-6'>
            <img 
                src={post.featuredImage.url} 
                alt={post.title}
                layout="fill"
                width="890px"
                height="384px"
                className="object-top absolute h-80 xl:h-96 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
            />
        </div>
        <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-indigo-600 text-3xl font-semibold'>
            <Link href={`/blog/${post.slug}`}>
                {post.title}
            </Link>
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
            <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                <img 
                    alt={post.author.name}
                    height="75px"
                    width="75px"
                    className="align-middle rounded-full"
                    src={post.author.photo.url}
                />
                <p className='inline align-middle text-gray-700 ml-4 text-lg'>{post.author.name}</p>
            </div>
            <div className='font-medium text-gray-700'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                    {moment(post.publishedAt).format('MMM DD, YYYY')}
                </span>
            </div>
        </div>
        <p className='text-center  text-gray-700 font-normal px-2 lg:px-4 mb-8'>
            {post.excerpt}
        </p>
        <div className='text-center'>
            <Link href={`/blog/${post.slug}`}>
            <span className='transition text-lg duration-300 ease-in transform hover:-translate-y-1 hover:bg-turquoise hover:text-gray-800 inline-block bg-indigo-600 rounded-full font-medium text-white px-8 py-3 cursor-pointer'>Continue Reading</span>
            </Link>
        </div>
        
    </div>
  )
}

export default postCard