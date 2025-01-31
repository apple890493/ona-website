import React, { createContext, useContext, useEffect, useState } from 'react'

import { OrderItem } from '@/constants/types'

type CartContextType = {
  cart: OrderItem[]
  cartItemCount: number
  addToCart: (item: OrderItem) => void
  resetCart: () => void
}

const LOCAL_STORAGE_KEY = 'onaCart'

export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<OrderItem[]>([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
    setCart(storedCart)
  }, [])

  const addToCart = (item: OrderItem) => {
    if (!item) return

    const { id, size, amount } = item

    const newCart: OrderItem[] = cart
    const existingItem = cart.find((cartItem) => cartItem.id === id && cartItem.size === size)

    if (existingItem) {
      newCart.map((cartItem) => {
        if (cartItem.id === id && cartItem.size === size) {
          cartItem.amount += amount
        }
      })
    } else {
      newCart.push(item)
    }
    setCart([...newCart])
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart))
  }

  const resetCart = () => {
    setCart([])
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, cartItemCount: cart.length, resetCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
