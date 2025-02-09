import dotenv from 'dotenv'
import { google } from 'googleapis'
import type { NextApiRequest, NextApiResponse } from 'next'

import type { OrderItemPayload, OrderPayload } from '@/constants/types'

dotenv.config()

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const SPREADSHEET_ID = process.env.SPREADSHEET_ID || ''

const formatOrderDetails = (details: OrderItemPayload[]): string => {
  return details
    .map(
      ({ name, size, amount, price, discountType }) =>
        `${name} - ${size}ml x ${amount}件，價格 $${price}，折扣: ${discountType}`
    )
    .join('\n')
}

const postOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const {
    designer,
    name,
    orderDate,
    paymentDeadline,
    phone,
    store,
    account,
    items,
    hasDeliveryFee,
    finalTotal,
    orderId,
  } = req.body as OrderPayload
  const orderDetails = formatOrderDetails(items)
  const deliveryFeeStatus = hasDeliveryFee ? 'Y' : 'N'

  try {
    const auth = new google.auth.JWT(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      undefined,
      (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      SCOPES
    )

    const sheets = google.sheets({ version: 'v4', auth })
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Order1!A:K',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            designer,
            orderId,
            orderDate,
            orderDetails,
            name,
            phone,
            store,
            account,
            finalTotal,
            deliveryFeeStatus,
            paymentDeadline,
          ],
        ],
      },
    })

    return res.status(200).json({ message: 'Order posted successfully' })
  } catch (error) {
    console.error('Google Sheets API Error:', JSON.stringify(error, null, 2))
    res.status(500).json({ message: 'Internal server error' })
    throw error
  }
}

export default postOrder
