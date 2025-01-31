import React, { useMemo, useState } from 'react'

import Select from '@/components/Select'
import type { Product, ProductItem, ProductOption } from '@/constants/types'

interface DetailProps {
  currentProduct: Product
}

const AMOUNT_BUTTON_CLASS =
  'h-10 w-10 border-2 border-primary rounded-full bg-white font-bold lg:hover:bg-secondary lg:hover:text-white'

const Detail = ({ currentProduct }: DetailProps) => {
  const CURRENT_PRODUCT_DEFAULT = currentProduct?.items[0] || { options: [] }
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | undefined>(CURRENT_PRODUCT_DEFAULT)
  const [selectedOption, setSelectedOption] = useState<ProductOption | undefined>(CURRENT_PRODUCT_DEFAULT.options[0])
  const [amount, setAmount] = useState(1)
  const discountPrice = selectedOption ? selectedOption.price * 0.9 : 0

  const onProductChange = (productId: string) => {
    const product = currentProduct.items.find((item) => item.id === productId)
    if (!product) {
      console.error(`Product ${productId} not found`)
      return
    }

    setSelectedProduct(product)
    setSelectedOption(product.options[0])
  }

  const onSizeChange = (size: string) => {
    if (!selectedProduct) return
    const option = selectedProduct.options.find((option) => option.size === Number(size))
    if (!option) {
      console.error(`Size ${size} not found for product ${selectedProduct.name}`)
      return
    }
    setSelectedOption(option)
  }

  const onAmountChange = (count: number) => {
    if (amount === 1 && count === -1) return
    setAmount((preAmount) => preAmount + count)
  }

  const details = useMemo(() => currentProduct.details, [currentProduct.details])

  const productOptions = useMemo(
    () =>
      currentProduct.items.map((item) => ({
        label: item.name,
        value: item.id,
      })),
    [currentProduct.items]
  )

  const sizeOptions = useMemo(
    () =>
      selectedProduct?.options.map((option) => ({
        label: `${option.size} (ml/g)`,
        value: String(option.size),
      })) || [],
    [selectedProduct]
  )

  return (
    <div className="w-full flex flex-col gap-5 px-4 text-fontColor lg:w-lg">
      <div className="text-2xl font-bold lg:text-3xl">{currentProduct.name}</div>

      <div className="flex items-baseline text-3xl lg:text-4xl">
        <span className="text-2xl font-bold">NT$</span>
        <span className="mx-1 text-4xl text-warningColor font-bold">{discountPrice}</span>
        <span className="text-2xl text-zinc-500 line-through">{selectedOption?.price}</span>
      </div>

      <Select options={productOptions} onChange={onProductChange} />

      <Select options={sizeOptions} onChange={onSizeChange} value={String(selectedOption?.size)} />

      <div className="mb-4 flex flex-col gap-4">
        <div className="flex items-center justify-evenly">
          <button className={`${AMOUNT_BUTTON_CLASS}`} onClick={() => onAmountChange(-1)}>
            -
          </button>
          <span className="text-lg">{amount}</span>
          <button className={`${AMOUNT_BUTTON_CLASS}`} onClick={() => onAmountChange(1)}>
            +
          </button>
        </div>
        <button className="rounded bg-primary px-3 py-2 text-white tracking-widest hover:bg-secondary">
          加入購物車
        </button>
      </div>

      <ul className="flex flex-col gap-2 border-t-1 border-gray-300">
        <div className="my-4 text-lg font-bold lg:text-2xl">Description</div>
        {details.map((detail, index) => (
          <li key={index}>
            {detail.map((content, contentIdx) => (
              <p className={contentIdx === 0 ? 'text-primary font-bold' : 'ml-3'} key={content + contentIdx}>
                {content}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Detail
