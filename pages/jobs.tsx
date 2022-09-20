import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Head from 'next/head'
import BlurberHome from '../components/bluberPages/BlurberHome'


export default function Jobs() {
  return (
    <div>
        <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}

          <Layout >
              <div>
                 <BlurberHome />
              </div>
              </Layout>
          
    </div>
  )
}
