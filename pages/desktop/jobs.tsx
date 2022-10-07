
import DesktopLayout from '../../components/Desktop/DesktopLayout'
import type { NextPage } from 'next'
import Head from 'next/head'
import BlurberJobs from '../../components/Desktop/blurberPages/BlurberJobs'


const Jobs :NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>
          <BlurberJobs />
      </DesktopLayout>
    </div>
  )
}

export default Jobs