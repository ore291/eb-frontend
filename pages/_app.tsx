import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <main className="font-inter antialiased bg-white text-gray-900 tracking-tight">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
