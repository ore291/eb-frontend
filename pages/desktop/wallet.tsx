
import DesktopLayout from '../../components/Desktop/DesktopLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import BlurberWallet from '../../components/Desktop/blurberPages/BlurberWallet'


const Wallet :NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>
          <BlurberWallet />
      </DesktopLayout>
    </div>
  )
}

export default Wallet