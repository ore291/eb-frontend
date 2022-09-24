import ClientLayout from '../components/layouts/ClientLayout'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import ClientPlans from '../components/clientPages/ClientPlans'

const plans :NextPage = () => {
  return (
      <div>
          <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>


            <div className="flex flex-col min-h-screen overflow-auto text-center">
              <ClientLayout Page={'Active Plans'}>
                  <ClientPlans />
                   

                </ClientLayout>
                

             </div>
          


      </div>
  )
}

export default plans