import Head from 'next/head'
import { useRef } from 'react'
import ReactDOM from "react-dom";
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { PostCard, Categories, PostWidget, Hero, Typewriter, Accordion } from '../../components'
import { getAboutDetails, getRecentPosts } from '../../services'
import { FeaturedPosts } from '../../sections'
import Link from 'next/link';

const typeWriter = ["Welcome ,"];

export default function Home({ abouts }) {
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>What is Andy Doing NOW?!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold text-5xl mb-8">
        <Typewriter data={typeWriter} />
      </h1>
      {abouts.map((about) => <Accordion about={about} key={about.title} />)}      
    </div>
  )
}

export async function getStaticProps() {
  const abouts = (await getAboutDetails()) || [];
  return {
    props: { abouts }
  }
}