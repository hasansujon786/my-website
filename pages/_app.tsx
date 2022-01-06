import '../styles/global.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='font-poppins text-gray-700'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
