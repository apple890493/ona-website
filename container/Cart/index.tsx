import React, { useRef } from 'react'

import type { CustomerForm } from '@/constants/types'
import CartItems from '@/container/Cart/components/CartItems'
import OrderInfo from '@/container/Cart/components/OrderInfo'
import Summary from '@/container/Cart/components/Summary'
import { useCart } from '@/context/CarContext'

const Cart = () => {
  const { cartItemCount, cart, totalPrice, removeCartItem, updateCartItem, summaryInfo } = useCart()

  const customerFormRef = useRef<CustomerForm>({
    name: '',
    phone: '',
    store: '',
  })

  const updateCustomerForm = (key: keyof CustomerForm, value: string) => {
    customerFormRef.current[key] = value
  }

  return (
    <div className="mx-auto my-0 w-full lg:w-[80%] lg:pt-3xl">
      <CartItems
        itemCount={cartItemCount}
        cart={cart}
        totalPrice={totalPrice}
        onRemove={removeCartItem}
        onUpdate={updateCartItem}
      />
      {cartItemCount > 0 && (
        <div className="mt-4 flex flex-col gap-4 lg:mt-7 lg:flex-row">
          <OrderInfo onUpdate={updateCustomerForm} />
          <Summary summaryInfo={summaryInfo} />
        </div>
      )}
    </div>
  )
}

export default Cart
