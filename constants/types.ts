export type Product = {
  id: string
  name: string
  type: string
  options: {
    size: string
    price: number
  }[]
  details: string[][]
}
