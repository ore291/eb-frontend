import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'

const SignIn: NextPage = () => {
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
          <LoginForm />
        </main>
        </div>
      
    </div>
    
      
    
      
    
  )
}

export default SignIn