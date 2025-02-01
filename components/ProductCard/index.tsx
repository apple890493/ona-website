import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'

import type { Product } from '@/constants/types'
import { formatNumber } from '@/utils/formatePrice'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const price = product.price
  const discountPrice = price * 0.9
  const imageUrl = `/assets/images/products/${product.id}.webp`

  const router = useRouter()
  const redirectToProduct = () => {
    router.push(`/product/${product.id}`)
  }

  const formattedPrice = useMemo(() => formatNumber(price), [price])
  const formattedDiscountPrice = useMemo(() => formatNumber(discountPrice), [discountPrice])

  return (
    <div
      className="gap flex flex-col cursor-pointer items-center gap-2 lg:gap-3 lg:opacity-90 lg:hover:opacity-100"
      onClick={redirectToProduct}
    >
      <div className="h-40 w-40 flex items-center bg-white lg:h-80 lg:w-80">
        <Image
          src={imageUrl}
          alt={product.name}
          width={300}
          height={300}
          style={{
            width: '100%',
            height: '100%',
          }}
          priority
        />
      </div>
      <p className="text-sm text-fontColor tracking-wider md:text-lg">{product.name}</p>
      <p className="text-base text-fontColor font-bold md:text-xl">
        NT$
        <span className="ml-1 text-fontColor line-through">{formattedPrice}</span>
        <span className="ml-2 text-warningColor">{formattedDiscountPrice}</span>
      </p>
    </div>
  )
}

export default ProductCard
