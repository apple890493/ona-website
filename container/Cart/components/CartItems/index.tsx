import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { MdClose } from 'react-icons/md'

import { FREE_SHIPPING_FEE_PRICE, PROMOTIONS_TEXT } from '@/constants/cart'
import type { CartItem } from '@/constants/types'
import { formatNumber } from '@/utils/formatePrice'

type CartItemsProps = {
  itemCount: number
  totalPrice: number
  cart: CartItem[]
  onRemove: (id: string) => void
  onUpdate: (id: string, count: number) => void
}

const Item = ({
  item,
  onRemove,
  onUpdate,
}: {
  item: CartItem
  onRemove: (id: string) => void
  onUpdate: (id: string, count: number) => void
}) => {
  const formattedPrice = useMemo(() => formatNumber(item.discountPrice), [item.discountPrice])
  const formattedTotalPrice = useMemo(() => formatNumber(item.total), [item.total])

  return (
    <div className="relative flex flex-col gap-1 border-b-1 border-secondary p-4 lg:flex-row lg:gap-2 [&:last-child]:border-b-0">
      <div className="flex items-center justify-between lg:w-1/2">
        <Link href={`/product/${item.img}`} className="w-2/3 flex items-center gap-2">
          <Image src={`/assets/images/products/${item.img}.webp`} alt={item.name} width={60} height={60} />
          <div>
            <p className="">{item.name}</p>
            <p className="text-sm text-fontColorLight">{item.size}ml</p>
          </div>
        </Link>
        <div className="w-1/3">
          <p>NT$ {formattedPrice}</p>
          {!item.hasSpecialDiscount && <p className="text-xs text-warningColor lg:text-sm">未符合 8.5 折品牌</p>}
        </div>
      </div>
      <div className="flex items-center justify-between lg:w-1/2">
        <div className="w-2/3 flex items-center justify-center">
          <button className="border-1 border-secondary px-2 py-1" onClick={() => onUpdate(item.id, -1)}>
            -
          </button>
          <span className="w-10 appearance-none border-1 border-secondary px-2 py-1 text-center focus:outline-none">
            {item.amount}
          </span>
          <button className="border-1 border-secondary px-2 py-1" onClick={() => onUpdate(item.id, +1)}>
            +
          </button>
        </div>
        <div className="w-1/3">NT$ {formattedTotalPrice}</div>
      </div>
      <MdClose
        size={18}
        className="absolute right-4 top-4 cursor-pointer text-fontColorLight"
        onClick={() => onRemove(item.id)}
      />
    </div>
  )
}

const CartItems = ({ itemCount, cart, totalPrice, onRemove, onUpdate }: CartItemsProps) => {
  return (
    <section className="border-1 border-secondary bg-white text-fontColor">
      <div className="border-b-1 border-secondary bg-secondary bg-opacity-30 px-4 py-2 text-lg font-500 tracking-wider">
        Shopping Cart
        <span className="ml-2 text-fontColorLight">&#10088;{itemCount} items&#10089;</span>
      </div>
      <div className="hidden border-b-1 border-secondary p-3 lg:flex lg:gap-2">
        <div className="w-1/3">Product Name</div>
        <div className="w-1/6">Price</div>
        <div className="w-1/3 text-center">Quantity</div>
        <div className="w-1/6">Total</div>
      </div>
      {itemCount > 0 ? (
        cart.map((item) => <Item key={item.id} item={item} onRemove={onRemove} onUpdate={onUpdate} />)
      ) : (
        <div className="h-20 flex items-center justify-center text-fontColorLight">尚未購買商品</div>
      )}
      <div className="px-4 py-2">
        <div className="mb-4 tracking-wider">Applied Promotions</div>
        <span className="mr-2 bg-secondary bg-opacity-30 px-2 py-1 text-xs text-fontColorLight lg:text-sm">
          {PROMOTIONS_TEXT.DISCOUNT_DEFAULT}
        </span>
        {totalPrice > FREE_SHIPPING_FEE_PRICE && (
          <span className="bg-secondary bg-opacity-30 px-2 py-1 text-xs text-fontColorLight lg:text-sm">
            {PROMOTIONS_TEXT.FREE_SHIPPING_FEE}
          </span>
        )}
      </div>
    </section>
  )
}

export default CartItems
