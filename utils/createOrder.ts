export const generateOrderId = (): string => {
  const timestamp = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 8)
  return `${timestamp}-${randomPart}`
}

const PAYMENT_DEADLINE_DAYS = 3

export const getPaymentDeadline = (): string => {
  const currentDate = new Date()
  currentDate.setDate(currentDate.getDate() + PAYMENT_DEADLINE_DAYS)

  return currentDate.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}

export const getOrderDate = (): string => {
  const currentDate = new Date()
  return currentDate.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
