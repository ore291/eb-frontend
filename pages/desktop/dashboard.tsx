import React from 'react'
import DesktopLayout from '../../components/Desktop/DesktopLayout'
import type { NextPage } from 'next'
import Head from 'next/head'


const Desktop :NextPage = () => {
  return (
    <div>
      <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>
        <div>

        </div>
      </DesktopLayout>
    </div>
  )
}

export default Desktop