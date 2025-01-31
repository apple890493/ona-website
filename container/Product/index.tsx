import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { MdArrowBackIos, MdAutorenew } from 'react-icons/md'

import { PRODUCTS } from '@/constants/products'
import type { Product } from '@/constants/types'
import Detail from '@/container/Product/components/Detail'

const Product = () => {
  const router = useRouter()
  const id = router.query.slug
  const currentProduct = PRODUCTS.find((product) => product.id === id)
  const imageUrl = useMemo(() => `/assets/images/products/${currentProduct?.id}.webp`, [currentProduct?.id])

  const backToPreviousPage = () => {
    router.back()
  }
  if (!currentProduct) {
    return (
      <div className="h-screen flex items-center justify-center">
        <MdAutorenew size={30} className="animate-spin animate-duration-1s animate-count-infinite" />
      </div>
    )
  }

  return (
    <>
      <div
        className="text-fontColorLight mb-2 flex cursor-pointer items-center text-3xl font-bold hover:text-secondary"
        onClick={backToPreviousPage}
      >
        <MdArrowBackIos size={30} />
        <span>Back</span>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row lg:px-6xl">
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="bg-white lg:h-lg lg:w-lg">
            <Image
              src={imageUrl}
              alt={currentProduct.name}
              width={400}
              height={400}
              style={{
                width: '100%',
                height: '100%',
              }}
              className=""
            />
          </div>
        </div>
        <div className="flex-1">
          <Detail currentProduct={currentProduct} />
        </div>
      </div>
    </>
  )
}

export default Product
