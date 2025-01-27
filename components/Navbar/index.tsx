import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MdContentCut, MdKeyboardArrowDown, MdMenu } from 'react-icons/md'

import { MENU_CONFIG } from '@/components/Navbar/constants'

const DesktopMenu = ({ onRedirect }: { onRedirect: (category: string) => void }) => {
  return MENU_CONFIG.map((menu) => (
    <li key={menu.name} className="group h-16 flex items-center gap-sm">
      <div className="flex items-center gap-sm px-4">
        <span className="tracking-wider">{menu.label}</span>
        <MdKeyboardArrowDown size={20} />
      </div>
      <ul className="absolute top-16 hidden min-w-50 bg-primary shadow-md group-hover:block">
        {menu.items.map((item) => (
          <li
            key={item.name}
            className="h-14 flex items-center px-4 tracking-wider hover:bg-secondary"
            onClick={() => onRedirect(item.name)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </li>
  ))
}

const MobileMenu = ({ isOpen, onRedirect }: { isOpen: boolean; onRedirect: (category: string) => void }) => {
  const isOpenClass = isOpen ? 'translate-x-0' : '-translate-x-full'

  return (
    <div
      className={`fixed left-0 top-0 z-200 h-full w-75 overflow-y-auto bg-primary shadow transition-all duration-600 ease-out transform ${isOpenClass}`}
    >
      {MENU_CONFIG.map((menu) => (
        <details key={menu.name} className="group">
          <summary className="h-12 flex select-none list-none appearance-none items-center justify-between px-4 [&::-webkit-details-marker]:hidden">
            <span className="tracking-wider">{menu.label}</span>
            <MdKeyboardArrowDown size={20} className="transition-transform duration-300 group-open:rotate-180" />
          </summary>
          <ul className="bg-secondary">
            {menu.items.map((item) => (
              <li key={item.name} className="h-12 flex items-center px-4" onClick={() => onRedirect(item.name)}>
                {item.label}
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  )
}

const Navbar = () => {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const onToggleMobileMenu = () => {
    setIsMobileMenuOpen((menu) => !menu)
  }

  const redirectToCategories = (category: string) => {
    router.push({
      pathname: '/categories',
      query: { category: category },
    })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="sticky left-0 right-0 top-0 h-16 w-full flex items-center justify-between bg-primary p-4 text-white">
      <div className="mr-4 flex flex-shrink-0 items-center color-logo">
        <MdContentCut size={30} />
        <div className="w-15 border-b-3 border-logo text-center text-lg font-bold tracking-widest">ONA</div>
      </div>
      <ul className="hidden flex-grow-1 cursor-pointer items-center gap-sm lg:flex">
        <DesktopMenu onRedirect={redirectToCategories} />
      </ul>
      <div className="flex flex-shrink-0 cursor-pointer lg:hidden">
        <MdMenu size={30} onClick={onToggleMobileMenu} />
        <MobileMenu isOpen={isMobileMenuOpen} onRedirect={redirectToCategories} />
        {isMobileMenuOpen && (
          <div className="fixed left-0 top-0 z-100 h-screen w-screen bg-black/50" onClick={onToggleMobileMenu} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
