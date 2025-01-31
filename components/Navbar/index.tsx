import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MdContentCut, MdLinearScale, MdMenu, MdShoppingCart } from 'react-icons/md'

import { MENU_CONFIG } from '@/constants/menu'

const DesktopMenu = ({ onRedirect }: { onRedirect: (category: string) => void }) => {
  return (
    <ul className="flex cursor-pointer items-center gap-sm">
      {MENU_CONFIG.map((menu) => (
        <li
          key={menu.name}
          className="h-16 flex items-center gap-sm px-4 hover:bg-secondary"
          onClick={() => onRedirect(menu.path)}
        >
          <span className="tracking-wider">{menu.label}</span>
          <MdLinearScale size={20} className="transition-transform duration-300" />
        </li>
      ))}
    </ul>
  )
}

const MobileMenu = ({ isOpen, onRedirect }: { isOpen: boolean; onRedirect: (category: string) => void }) => {
  const isOpenClass = isOpen ? 'translate-x-0' : '-translate-x-full'
  return (
    <div
      className={`fixed left-0 top-0 z-200 h-full w-75 overflow-y-auto bg-primary shadow transition-all duration-600 ease-out transform ${isOpenClass}`}
    >
      {MENU_CONFIG.map((menu) => (
        <li
          key={menu.name}
          className="h-14 flex items-center justify-center border-b border-secondary px-4"
          onClick={() => onRedirect(menu.path)}
        >
          <span className="tracking-wider">{menu.label}</span>
        </li>
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
    <nav className="sticky left-0 right-0 top-0 z-999 h-16 w-full flex items-center justify-between bg-primary p-4 text-white">
      <Link href="/" className="mr-4 flex flex-shrink-0 items-center color-default">
        <MdContentCut size={30} />
        <div className="border-logo w-15 border-b-3 text-center text-lg font-bold tracking-widest">ONA</div>
      </Link>

      <div className="hidden flex-grow-1 items-center gap-sm lg:flex">
        <Image
          src="/assets/images/sale.webp"
          alt="product"
          width={120}
          height={0}
          style={{
            width: 'auto',
            height: 'auto',
          }}
          priority
        />
        <DesktopMenu onRedirect={redirectToCategories} />
      </div>

      <div className="flex flex-shrink-0 cursor-pointer items-center gap-sm">
        <Link
          href="/cart"
          replace
          className="flex items-center justify-center gap-2 border-2 border-white rounded-md px-4 py-2 text-lg tracking-widest transition-all duration-300 lg:hover:bg-default lg:hover:text-primary"
        >
          購物車
          <MdShoppingCart size={30} />
        </Link>

        <div className="lg:hidden">
          <MdMenu size={30} onClick={onToggleMobileMenu} />
          <MobileMenu isOpen={isMobileMenuOpen} onRedirect={redirectToCategories} />
          {isMobileMenuOpen && (
            <div className="fixed left-0 top-0 z-100 h-screen w-screen bg-black/50" onClick={onToggleMobileMenu} />
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
