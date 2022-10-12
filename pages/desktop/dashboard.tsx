
import DesktopLayout from '../../components/Desktop/DesktopLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import BlurberDashboard from '../../components/Desktop/blurberPages/BlurberDashboard'


const Dashboard :NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>
          <BlurberDashboard />
      </DesktopLayout>
    </div>
  )
}

export default Dashboard