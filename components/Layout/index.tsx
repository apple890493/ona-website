import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="min-h-screen bg-backgroundColor px-xl py-4xl lg:px-6xl md:px-3xl">{children}</main>
}

export default Layout
