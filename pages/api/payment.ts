// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   res.status(200).json({ name: 'John Doe' })
// }

import type { OrderForm } from '@/constants/types'
import { generateOrderId, getPaymentDeadline } from '@/utils/createOrder'

export const postOrder = async (orderForm: OrderForm) => {
  try {
    const [orderId, paymentDeadline] = await Promise.all([generateOrderId(), getPaymentDeadline()])
    console.log('orderId', orderId, paymentDeadline)
    console.log('postOrder', orderForm)
  } catch (error) {
    console.error('Error posting order:', error)
    throw error
  }
}
