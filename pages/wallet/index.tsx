import React from 'react'
import Layout from '../../components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import BlurberWallet from '../../components/bluberPages/BlurberWallet'

const wallet: NextPage = () => {

    return (
        <div>
            <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
            
            <div className="flex flex-col min-h-screen overflow-auto">
                <Layout>
                <BlurberWallet />

                </Layout>
                

             </div>
</div>

  )
}

export default wallet