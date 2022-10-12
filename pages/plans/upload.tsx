import ClientLayout from '../../components/layouts/ClientLayout'
import type { NextPage } from 'next'
import Header from '../../components/Header'
import Head from 'next/head'
import ClientUpload from '../../components/clientPages/ClientUpload'

const Upload :NextPage = () => {
  return (
      <div>
          <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>


            <div className="flex flex-col min-h-screen overflow-auto text-center">
              <ClientLayout Page={'Upload Blurb'}>
                  <ClientUpload />
                   

                </ClientLayout>
                

             </div>
          


      </div>
  )
}

export default Upload