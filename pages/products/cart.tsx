import ClientLayout from '../../components/layouts/ClientLayout'
import type { NextPage } from 'next'
import Header from '../../components/Header'
import Head from 'next/head'
import ClientCart from '../../components/clientPages/ClientCart'

import { useRouter } from 'next/router'

function Cart() {

  
  return (
    <div>
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-auto text-center">
        <ClientLayout Page={'cart'}>
        <ClientCart />


        </ClientLayout>


      </div>


    </div>
  )
}

export default Cart