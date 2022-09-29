import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { store } from '../store'
import { Provider } from 'react-redux'
import { persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>


      <Head>
        <title>Tailwindcss Emotion Example</title>
      </Head>
      <Provider store={store}>
        <PersistGate loading={''} persistor={persistor}>
          <main className="font-inter antialiased bg-white text-gray-900 tracking-tight">
            <Component {...pageProps} />
          </main>
        </PersistGate>
      </Provider>

    </>
  )
}

export default MyApp
