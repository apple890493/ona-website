import React, { useRef, useState } from 'react'

import { TYPE_ENUM } from '@/components/Message/constants'
import { DESIGNER_CONFIG } from '@/constants/cart'
import type { CustomerForm, SubmitOrderResponse } from '@/constants/types'
import CartItems from '@/container/Cart/components/CartItems'
import OrderConfirmPanel from '@/container/Cart/components/OrderConfirmPanel'
import OrderHint from '@/container/Cart/components/OrderHint'
import OrderInfo from '@/container/Cart/components/OrderInfo'
import Summary from '@/container/Cart/components/Summary'
import { useCart } from '@/context/CarContext'
import { useMessage } from '@/context/MessageContext'

const Cart = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [visibleOrderConfirmPanel, setVisibleOrderConfirmPanel] = useState(false)
  const { showMessage } = useMessage()
  const { cartItemCount, cart, totalPrice, removeCartItem, updateCartItem, summaryInfo, submitOrder } = useCart()
  const submitOrderResponse = useRef<SubmitOrderResponse>({
    orderId: '',
    paymentDeadline: '',
    totalPrice: 0,
  })

  const customerFormRef = useRef<CustomerForm>({
    name: '',
    phone: '',
    store: '',
    account: '',
    designer: DESIGNER_CONFIG.ONA,
  })

  const checkStoreValid = (store: string) => {
    return store.includes('門市')
  }

  const checkCustomerFormValid = () => {
    const { name, phone, store, account } = customerFormRef.current
    if (!name || !phone || !store || !account) {
      showMessage({ msg: '請填寫完整正確資料', type: TYPE_ENUM.ERROR })
      return false
    }
    const isStoreValid = checkStoreValid(store)
    if (!isStoreValid) {
      showMessage({ msg: '請正確填寫門市資訊如「ＸＸ門市」', type: TYPE_ENUM.ERROR })
      return false
    }
    return true
  }

  const toggleOrderConfirmPanel = (isShow: boolean) => {
    setVisibleOrderConfirmPanel(isShow)
  }

  const onSubmit = async () => {
    const isFormValid = checkCustomerFormValid()
    if (!isFormValid) return

    try {
      setIsProcessing(true)
      const { orderId, paymentDeadline, totalPrice } = await submitOrder(customerFormRef.current)
      submitOrderResponse.current = { orderId, paymentDeadline, totalPrice }
      toggleOrderConfirmPanel(true)
    } catch (error) {
      showMessage({ msg: '訂單提交失敗', type: TYPE_ENUM.ERROR })
    } finally {
      setIsProcessing(false)
    }
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
          <Summary summaryInfo={summaryInfo} onSubmit={onSubmit} isProcessing={isProcessing} />
        </div>
      )}
      {visibleOrderConfirmPanel && (
        <OrderConfirmPanel
          {...submitOrderResponse.current}
          designer={customerFormRef.current.designer}
          onClose={toggleOrderConfirmPanel}
        />
      )}
    </div>
  )
}

export default Cart
