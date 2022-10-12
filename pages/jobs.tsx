import React from 'react'
import Layout from '../components/layouts/BlurberLayout'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import BlurberHome from '../components/bluberPages/BlurberHome'


const Jobs:NextPage =()=> {
  return (
    <div>
        <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}

          <Layout Page={''}>
              <div>
                 <BlurberHome />
              </div>
              </Layout>
          
    </div>
  )
}
export default Jobs