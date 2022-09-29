
import Layout from '../components/layouts/BlurberLayout'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import BlurberPayments from '../components/bluberPages/BlurberPayments'

const Payment :NextPage = () => {
  return (
      <div>
          <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
          </Head>


            <div className="flex flex-col min-h-screen overflow-auto text-center">
              <Layout Page={'payments'}>
                  <BlurberPayments />
                </Layout>
             </div>
          


      </div>
  )
}

export default Payment