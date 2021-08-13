import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <React.StrictMode><Component {...pageProps} /></React.StrictMode>
}
export default MyApp
