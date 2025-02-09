import { TYPE_ENUM } from '@/components/Message/constants'
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
  account: string
  designer: string
}

export type SubmitOrderResponse = {
  orderId: string
  paymentDeadline: string
}

export type CustomerFormType = (typeof CUSTOMER_FORM_KEYS)[keyof typeof CUSTOMER_FORM_KEYS]

export type MessageType = (typeof TYPE_ENUM)[keyof typeof TYPE_ENUM]

export type OrderItemPayload = {
  name: string
  size: number
  amount: number
  price: number
  discountType: string
}

export type OrderPayload = {
  designer: string
  orderId: string
  orderDate: string
  paymentDeadline: string
  name: string
  phone: string
  store: string
  account: string
  items: OrderItemPayload[]
  hasDeliveryFee: boolean
  finalTotal: number
}
