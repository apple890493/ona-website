import React, { useMemo } from 'react'

import { SummaryInfo } from '@/constants/types'
import { formatNumber } from '@/utils/formatePrice'

type SummaryProps = {
  isProcessing: boolean
  summaryInfo: SummaryInfo
  onSubmit: () => void
}

const Summary = ({ isProcessing, summaryInfo, onSubmit }: SummaryProps) => {
  const { itemSubtotal, deliveryFee, total } = summaryInfo
  const formattedItemSubtotal = useMemo(() => {
    const formatted = formatNumber(itemSubtotal)
    return `NT${formatted}`
  }, [itemSubtotal])
  const formattedDeliveryFee = useMemo(() => {
    if (deliveryFee === 0) return 'Free'
    const formatted = formatNumber(deliveryFee)
    return `NT${formatted}`
  }, [deliveryFee])
  const formattedTotal = useMemo(() => {
    const formatted = formatNumber(total)
    return `NT${formatted}`
  }, [total])

  return (
    <section className="border-1 border-secondary bg-white text-fontColor lg:w-2/5">
      <div className="border-b-1 border-secondary bg-secondary bg-opacity-30 px-4 py-2 text-lg font-500 tracking-wider">
        訂單費用
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-between">
          <span>商品總額:</span>
          <span>{formattedItemSubtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>運費:</span>
          <span>{formattedDeliveryFee}</span>
        </div>
        <div className="border-t-1 border-secondary"></div>
        <div className="flex justify-between">
          <span>總計:</span>
          <span>{formattedTotal}</span>
        </div>
        <button
          className="rounded bg-primary px-3 py-2 text-white tracking-widest hover:bg-secondary"
          onClick={() => onSubmit()}
          disabled={isProcessing}
        >
          {isProcessing ? '處理中' : '確認'}
        </button>
      </div>
    </section>
  )
}

export default Summary
