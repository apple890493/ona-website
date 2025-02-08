const OrderHint = () => {
  return (
    <div className="mb-4 lg:mb-7">
      <div className="border-1 border-secondary bg-white text-fontColor">
        <div className="border-b-1 border-secondary bg-secondary bg-opacity-30 px-4 py-2 text-lg font-500 tracking-wider">
          訂購提醒
        </div>
        <div className="flex flex-col p-3 text-sm lg:flex-row lg:justify-around lg:text-base">
          <div className="lg:w-[30%]">
            <h1 className="text-lg font-500">聯絡方式</h1>
            <p>
              有任何問題可以私訊 line: @onaona
              <br />
              皆由本人親自回覆訊息喔！
            </p>
          </div>
          <div className="lg:w-30%]">
            <h1 className="text-lg font-500">付款提點</h1>
            <p>
              下單後請於<strong className="mx-1 text-warningColor">三日內</strong>匯款完成，才會成立訂單發貨
              <br />
              如未於三日內匯款完成，將會取消整筆訂單
            </p>
          </div>
          <div className="lg:w-30%]">
            <h1 className="text-lg font-500">退貨政策</h1>
            <p>
              收到包裹時，務必確保自身權益
              <br />
              請進行全程錄影完整<strong className="text-primary">包裝拆封、點收、檢查。</strong>
              <br />
              如商品有<strong className="text-warningColor">缺少 / 瑕疵 / 異樣</strong>
              <br />
              須於【收到包裹七天內】提供完整拆封影片
              <br />
              如無提供完整拆封影片恕賣埸無法處理
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHint
