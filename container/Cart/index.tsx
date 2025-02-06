import React, { useRef } from 'react'

import { TYPE_ENUM } from '@/components/Message/constants'
import type { CustomerForm } from '@/constants/types'
import CartItems from '@/container/Cart/components/CartItems'
import OrderHint from '@/container/Cart/components/OrderHint'
import OrderInfo from '@/container/Cart/components/OrderInfo'
import Summary from '@/container/Cart/components/Summary'
import { useCart } from '@/context/CarContext'
import { useMessage } from '@/context/MessageContext'

const Cart = () => {
  const { showMessage } = useMessage()
  const { cartItemCount, cart, totalPrice, removeCartItem, updateCartItem, summaryInfo, submitOrder } = useCart()

  const customerFormRef = useRef<CustomerForm>({
    name: '',
    phone: '',
    store: '',
    account: '',
  })

  const checkCustomerFormValid = () => {
    const { name, phone, store, account } = customerFormRef.current
    if (!name || !phone || !store || !account) {
      showMessage({ msg: '請填寫完整正確資料', type: TYPE_ENUM.ERROR })
      return false
    }
    return true
  }

  const onSubmit = () => {
    const isFormValid = checkCustomerFormValid()
    if (!isFormValid) return
    submitOrder(customerFormRef.current)
  }

  const updateCustomerForm = (key: keyof CustomerForm, value: string) => {
    customerFormRef.current[key] = value
  }

  return (
    <div className="mx-auto my-0 w-full lg:w-[80%] lg:pt-3xl">
      <OrderHint />
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
          <Summary summaryInfo={summaryInfo} onSubmit={onSubmit} />
        </div>
      )}
    </div>
  )
}

export default Cart
