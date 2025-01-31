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
