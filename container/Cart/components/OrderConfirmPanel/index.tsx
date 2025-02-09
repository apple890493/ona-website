import React, { useState } from 'react'
import { MdContentCopy, MdOutlineInfo } from 'react-icons/md'

import { ACCOUNT_CONFIG } from '@/constants/cart'
import type { SubmitOrderResponse } from '@/constants/types'

type OrderConfirmPanelProps = SubmitOrderResponse & {
  onClose: (isOpen: boolean) => void
  designer: string
}

const CopyButton = () => {
  const [showTooltip, setShowTooltip] = useState(false)

  const copyClipboard = () => {
    navigator.clipboard.writeText('222').then(() => {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 2000)
    })
  }
  return (
    <div className="relative">
      <MdContentCopy size={25} className="cursor-pointer" onClick={copyClipboard} />
      {showTooltip && (
        <p className="absolute w-20 rounded bg-secondary bg-opacity-50 px-2 py-1 text-center text-sm text-white -top-8">
          複製成功
        </p>
      )}
    </div>
  )
}

const OrderConfirmPanel = ({ orderId, paymentDeadline, designer, onClose }: OrderConfirmPanelProps) => {
  return (
    <div className="fixed left-1/2 top-1/2 z-999 w-[90%] flex flex-col gap-4 border-3 border-secondary rounded-lg bg-white p-4 text-fontColor shadow lg:w-auto -translate-x-1/2 -translate-y-1/2">
      <p className="text-center text-lg font-bold">訂單已成功送出</p>
      <p>訂單編號：{orderId}</p>
      <p>
        付款截止日：
        <span className="tracking-wider">{paymentDeadline}</span>
      </p>
      <p>匯款銀行：{ACCOUNT_CONFIG[designer].bankCode}</p>
      <div className="flex items-center gap-2">
        匯款帳號：{ACCOUNT_CONFIG[designer].bankAccount}
        <CopyButton />
      </div>
      <div className="flex items-center gap-2 text-primary">
        <MdOutlineInfo size={20} />
        請於付款截止日前完成付款，避免訂單取消
      </div>
      <p className="flex items-center gap-2 text-primary">
        <MdOutlineInfo size={20} />
        建議儲存此頁面，以利後續查詢
      </p>
      <button
        className="rounded bg-primary px-3 py-2 text-white tracking-widest hover:bg-secondary"
        onClick={() => onClose(false)}
      >
        確認
      </button>
    </div>
  )
}

export default OrderConfirmPanel
