import * as React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NaitveBase + NextJS Starter Kit</title>
        <meta
          name="description"
          content="NativeBase and NextJS starter kit for rapid setup and easy development experience with NativeBase."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
