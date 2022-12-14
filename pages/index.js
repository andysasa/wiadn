import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PostCard, Categories, PostWidget, Hero } from '../components'
import { getRecentPosts } from '../services'
import { FeaturedPosts } from '../sections'
import Link from 'next/link';


export default function Home( { posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>What is Andy Doing NOW?!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
          <button>
            <Link href={`/page/1`}>
              <span className='transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-8 py-3 cursor-pointer uppercase'>See All</span>
            </Link>
          </button>
        </div>
        <div className="lg:col-span-4 col-span-1">
           <div className="lg:sticky relative top-8">
            <Categories />
           </div>
        </div>
      </div>
      
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getRecentPosts()) || [];
  return {
    props: { posts }
  }
}