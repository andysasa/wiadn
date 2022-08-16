import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { PostCard, Categories, PostWidget, Hero, Resources } from '../../components'
import { getRecentPosts } from '../../services'
import { FeaturedPosts } from '../../sections'
import Link from 'next/link';

// const posts = [
//   { title: 'first article', excerpt: 'first article excerpt' },
//   { title: 'second article', excerpt: 'second article excerpt' }
// ];

export default function Home( { posts } ) {
  return (
    <div className='container mx-auto px-10 mb-8'>
        {/* <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <Resources />
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <Categories />
                </div>
            </div>
        </div> */}
        <Resources />
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getRecentPosts()) || [];
  return {
    props: { posts }
  }
}