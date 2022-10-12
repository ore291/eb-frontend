import React from 'react'
import ClientLayout from '../components/layouts/ClientLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import ClientProfile from '../components/clientPages/ClientProfile'

const Account: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="flex flex-col min-h-screen overflow-auto text-center">
        <ClientLayout Page={'profile'}>
          <ClientProfile />


        </ClientLayout>


      </div>



    </div>
  )


}



export default Account