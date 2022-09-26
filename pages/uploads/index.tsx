import React from 'react'
import ClientLayout from '../../components/layouts/ClientLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import ClientUploads from '../../components/clientPages/ClientUploads'

const uploads: NextPage = () => { 
    return (
<div>
          <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>


            <div className="flex flex-col min-h-screen overflow-auto text-center">
              <ClientLayout Page={'Uploads'}>
                  <ClientUploads />
                   

                </ClientLayout>
                

             </div>
          


      </div>
    )


}



export default uploads