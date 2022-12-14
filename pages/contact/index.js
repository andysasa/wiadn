import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { PostCard, Categories, PostWidget, Hero, Contact } from '../../components'
import { getRecentPosts } from '../../services'
import { FeaturedPosts } from '../../sections'
import Link from 'next/link';

export default function Home( { posts } ) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
      <Head>
        <title>What is Andy Doing NOW?!</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Contact />
      
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getRecentPosts()) || [];
  return {
    props: { posts }
  }
}