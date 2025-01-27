import React from 'react'

import Navbar from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout
