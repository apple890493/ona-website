import '@unocss/reset/tailwind.css'
import 'uno.css'

import type { AppProps } from 'next/app'

import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )
}
