import { useRouter } from 'next/router'
const Product = () => {
  const router = useRouter()
  console.log(router)

  return <div>Product</div>
}

export default Product
