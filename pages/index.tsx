import type { NextPage } from 'next'
import Head from 'next/head'
import Sections from '../components/Sections'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page sections */}
          <Hero />
          <Sections />
        </main>

        {/*  Site footer */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Home
