import React from 'react'
import RegisterForm from '../../components/auth/RegisterForm'
import BlurberMultiPartForm from '../../components/auth/BlurberMultiPartForm'
import ClientMultiPartForm from '../../components/auth/ClientMultiPartForm'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import { useState, Dispatch, SetStateAction  } from 'react'

const SignUp: NextPage = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  
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
          {user == '2' || user == '3' ?(<div></div>):(
          <RegisterForm setUser={setUser} setEmail={setEmail} />
          )}
         
          
          {user == '2' && (<BlurberMultiPartForm userType={user} userEmail={email} />)}
          {user == '3' && (<ClientMultiPartForm/>)}
          

           

          
          
    </main>
        </div>
      
    </div>
    
      
    
      
    
  )
}

export default SignUp