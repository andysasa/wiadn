import Link from "next/link";

const Pagination = ( { numPages, currentPage, pageInfo }) => {
  const prevPage = `/page/${currentPage - 1 }`;
  const nextPage = `/page/${currentPage + 1}`;

  const onCurrentPage = (i) => {
    i + 1 == currentPage ? true : false;
  }

  return (
    <div>
        <ul className='flex list-none my-2 gap-2'>
            {pageInfo.hasPreviousPage && (
                <Link href={prevPage}>
                <li className='relative block leading-tight'>
                    <button className='transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase'>previous</button>
                </li>
                </Link>
            )}

            {Array.from({length: numPages}, (_, i) => (
                <Link href={`/page/${i + 1}`} key={`page-${i}`}>
                <button className='transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase'>
                    { i + 1 }
                </button>
                </Link>
            ))}

            {pageInfo.hasNextPage && (
                <Link href={nextPage}>
                <li className='relative block leading-tight'>
                    <button className='transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase'>next</button>
                </li>
                </Link>
            )}
        </ul>
    </div>
  )
}

export default Pagination