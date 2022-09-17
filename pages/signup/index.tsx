import React from 'react'
import RegisterForm from '../../components/auth/RegisterForm'
import BlurberMultiPartForm from '../../components/auth/BlurberMultiPartForm'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'

const SignUp: NextPage = () => {
  return (
    <div className='mx-auto'>
       <Head>
        <title>Easy Blurb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <RegisterForm />
          <BlurberMultiPartForm />
    </main>
        </div>
      
    </div>
    
      
    
      
    
  )
}

export default SignUp