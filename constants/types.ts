import { CUSTOMER_FORM_KEYS } from '@/constants/cart'

export type ProductItem = {
  id: string
  name: string
  options: {
    size: number
    price: number
  }[]
}

export type ProductOption = ProductItem['options'][number]

export type Product = {
  id: string
  name: string
  type: string
  price: number
  items: ProductItem[]
  details: string[][]
}

export type OrderItem = {
  id: string
  name: string
  size: number
  amount: number
  price: number
  img: string
}

export type CartItem = OrderItem & {
  hasSpecialDiscount: boolean
  discountPrice: number
  total: number
}

export type SummaryInfo = {
  itemSubtotal: number
  deliveryFee: number
  total: number
}

export type CustomerForm = {
  name: string
  phone: string
  store: string
}

export type CustomerFormType = (typeof CUSTOMER_FORM_KEYS)[keyof typeof CUSTOMER_FORM_KEYS]
