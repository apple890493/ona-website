import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { MdArrowBackIos, MdAutorenew } from 'react-icons/md'

import { TYPE_ENUM } from '@/components/Message/constants'
import { PRODUCTS } from '@/constants/products'
import type { OrderItem, Product } from '@/constants/types'
import Detail from '@/container/Product/components/Detail'
import { useCart } from '@/context/CarContext'
import { useMessage } from '@/context/MessageContext'

const Product = () => {
  const router = useRouter()
  const { addToCart } = useCart()
  const { showMessage } = useMessage()
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

  const onAddToCart = async (item: OrderItem) => {
    try {
      await addToCart(item)
      showMessage({ msg: '已加入購物車', type: TYPE_ENUM.INFO })
    } catch (error) {
      showMessage({ msg: '已加入購物車失敗', type: TYPE_ENUM.ERROR })
    }
  }

  return (
    <>
      <div className="mb-2">
        <span
          className="inline-flex cursor-pointer items-center text-3xl text-fontColorLight font-bold hover:text-secondary"
          onClick={backToPreviousPage}
        >
          <MdArrowBackIos size={30} /> 返回
        </span>
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
          <Detail currentProduct={currentProduct} onAddToCart={onAddToCart} />
        </div>
      </div>
    </>
  )
}

export default Product
