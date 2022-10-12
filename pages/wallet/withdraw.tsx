import React from 'react'
import Layout from '../../components/layouts/BlurberLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import BluberWithdraw from '../../components/bluberPages/BluberWithdraw'

const Withdraw: NextPage = () => {

    return (
        <div>
     <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
            </Head>
                       
            
            <div className="flex flex-col min-h-screen overflow-auto text-center">
                <Layout Page={'withdraw'}>
                <BluberWithdraw />
                </Layout>
                </div>

        </div>
    )
 }




export default Withdraw