import Image from 'next/image'
import { useRouter } from 'next/router'

import type { Product } from '@/constants/types'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const price = product.options[0].price
  const discountPrice = price * 0.9
  const imageUrl = `/assets/images/products/${product.id}.webp`

  const router = useRouter()
  const redirectToProduct = () => {
    router.push(`/product/${product.id}`)
  }

  return (
    <div
      className="gap flex flex-col cursor-pointer items-center gap-2 lg:gap-3 lg:opacity-90 lg:hover:opacity-100"
      onClick={redirectToProduct}
    >
      <Image
        src={imageUrl}
        alt={product.name}
        width={320}
        height={320}
        priority
        className="h-50 w-50 bg-white lg:h-80 lg:w-80"
      />
      <p className="text-sm text-teal-950 tracking-wider md:text-lg">{product.name}</p>
      <p className="text-base text-teal-950 font-bold md:text-xl">
        NT$
        <span className="ml-1 text-teal-950 line-through">{price}</span>
        <span className="ml-2 text-warningColor">{discountPrice}</span>
      </p>
    </div>
  )
}

export default ProductCard
