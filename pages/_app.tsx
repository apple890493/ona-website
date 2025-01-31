import '@unocss/reset/tailwind.css'
import 'uno.css'

import type { AppProps } from 'next/app'

import Footer from '@/components/Footer'
import Layout from '@/components/Layout'
import Message from '@/components/Message'
import Navbar from '@/components/Navbar'
import { CartProvider } from '@/context/CarContext'
import { MessageProvider } from '@/context/MessageContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MessageProvider>
        <CartProvider>
          <Navbar />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Footer />
        </CartProvider>
      </MessageProvider>
    </>
  )
}
