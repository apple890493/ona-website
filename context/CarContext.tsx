import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

import {
  DELIVERY_FEE,
  FREE_SHIPPING_FEE_PRICE,
  PROMOTIONS,
  UNAVAILABLE_DISCOUNT_PRODUCTS_PREFIX,
} from '@/constants/cart'
import type { CartItem, CustomerForm, OrderForm, OrderItem, SummaryInfo } from '@/constants/types'
import { postOrder } from '@/pages/api/payment'

type CartContextType = {
  cart: CartItem[]
  cartItemCount: number
  totalPrice: number
  summaryInfo: SummaryInfo
  addToCart: (item: OrderItem) => void
  resetCart: () => void
  removeCartItem: (itemId: string) => void
  updateCartItem: (itemId: string, count: number) => void
  submitOrder: (customerForm: CustomerForm) => void
}

const LOCAL_STORAGE_KEY = 'onaCart'

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<OrderItem[]>([])

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]')
    setCart(storedCart)
  }, [])

  const formattedCart = useMemo(() => {
    const hasMultipleItems = cart.reduce((total, item) => total + item.amount, 0) >= 2

    return cart.map((item) => {
      const noDiscountProduct = UNAVAILABLE_DISCOUNT_PRODUCTS_PREFIX.some((prefix) => item.id.startsWith(prefix))
      const hasSpecialDiscount = !noDiscountProduct && hasMultipleItems

      return {
        ...item,
        hasSpecialDiscount,
        discountPrice: hasSpecialDiscount
          ? Math.round(item.price * PROMOTIONS.DISCOUNT_SPECIAL)
          : Math.round(item.price * PROMOTIONS.DISCOUNT_DEFAULT),
        total:
          (hasSpecialDiscount
            ? Math.round(item.price * PROMOTIONS.DISCOUNT_SPECIAL)
            : Math.round(item.price * PROMOTIONS.DISCOUNT_DEFAULT)) * item.amount,
      }
    })
  }, [cart])

  const totalPrice = useMemo(() => {
    return formattedCart.reduce((total, item) => total + item.total, 0)
  }, [formattedCart])

  const summaryInfo = useMemo(() => {
    return {
      itemSubtotal: totalPrice,
      deliveryFee: totalPrice >= FREE_SHIPPING_FEE_PRICE ? 0 : DELIVERY_FEE,
      total: totalPrice >= FREE_SHIPPING_FEE_PRICE ? totalPrice : totalPrice + DELIVERY_FEE,
    }
  }, [totalPrice])

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

  const removeCartItem = (itemId: string) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== itemId)
    setCart([...newCart])
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart))
  }

  const updateCartItem = (itemId: string, count: number) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === itemId) {
        const newAmount = cartItem.amount + count
        return newAmount > 0 ? { ...cartItem, amount: newAmount } : cartItem
      }
      return cartItem
    })
    setCart([...newCart])
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newCart))
  }

  const resetCart = () => {
    setCart([])
    localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  const submitOrder = (customerForm: CustomerForm) => {
    try {
      const { name, phone, store, account } = customerForm

      const items = formattedCart.map((item) => ({
        name: item.name,
        size: item.size,
        amount: item.amount,
        price: item.discountPrice,
        discountType: item.hasSpecialDiscount ? '（8.5折）' : '（9折）',
      }))

      const orderForm: OrderForm = {
        name,
        phone,
        store,
        account,
        deliveryFee: summaryInfo.deliveryFee,
        finalTotal: summaryInfo.itemSubtotal,
        items,
      }

      postOrder(orderForm)
    } catch (error) {
      console.error(error)
      throw new Error(error as string)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: formattedCart,
        cartItemCount: cart.length,
        totalPrice,
        summaryInfo,
        addToCart,
        resetCart,
        removeCartItem,
        updateCartItem,
        submitOrder,
      }}
    >
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
