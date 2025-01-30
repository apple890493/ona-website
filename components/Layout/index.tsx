import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-backgroundColor px-xl py-4xl lg:px-6xl md:px-3xl">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
