import React from 'react'
import BlurberLayout from '../components/layouts/BlurberLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Notifications from '../components/Notifications'

const Notification: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex flex-col min-h-screen overflow-auto text-center">
        <BlurberLayout Page={'notification'}>
          <Notifications />
        </BlurberLayout>


      </div>



    </div>
  )


}



export default Notification