export const PROMOTIONS = {
  DISCOUNT_DEFAULT: 0.9,
  DISCOUNT_SPECIAL: 0.85,
}

export const DELIVERY_FEE = 60

export const PROMOTIONS_TEXT = {
  DISCOUNT_DEFAULT: '產品全面１件９折 / ２件以上８.5折（部分品牌除外）',
  FREE_SHIPPING_FEE: '滿 3000 免運',
}

export const DESIGNER_CONFIG = {
  ONA: 'ona',
  ALINA: 'Alina',
}

export const UNAVAILABLE_DISCOUNT_PRODUCTS_PREFIX = ['rica', 'tokioIe']

export const FREE_SHIPPING_FEE_PRICE = 3000

export const CUSTOMER_FORM_KEYS = {
  NAME: 'name',
  PHONE: 'phone',
  STORE: 'store',
  ACCOUNT: 'account',
  DESIGNER: 'designer',
} as const

export const ACCOUNT_CONFIG = {
  [DESIGNER_CONFIG.ONA]: {
    bankCode: '822',
    bankAccount: '820540212949',
  },
  [DESIGNER_CONFIG.ALINA]: {
    bankCode: '822',
    bankAccount: '0000668540239621',
  },
}
