import { CUSTOMER_FORM_KEYS } from '@/constants/cart'
import type { CustomerForm } from '@/constants/types'

const FIELD_CLASS =
  'border-1 border-secondary rounded-md p-1 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary'
const E_MAP_URL = 'https://emap.pcsc.com.tw/'

type OrderInfoProps = {
  onUpdate: (key: keyof CustomerForm, value: string) => void
}

const CustomerForm = ({ onUpdate }: OrderInfoProps) => {
  const openEMapOnNewTab = () => {
    window.open(E_MAP_URL, '_blank')
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    onUpdate(id as keyof CustomerForm, value)
  }

  return (
    <section className="border-1 border-secondary bg-white text-fontColor lg:w-3/5">
      <div className="border-b-1 border-secondary bg-secondary bg-opacity-30 px-4 py-2 text-lg font-500 tracking-wider">
        Delivery Information
      </div>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex flex-col">
          <label id={CUSTOMER_FORM_KEYS.NAME} className="font-500">
            姓名
          </label>
          <input
            type="text"
            id={CUSTOMER_FORM_KEYS.NAME}
            className={`${FIELD_CLASS}`}
            placeholder="王小明"
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={CUSTOMER_FORM_KEYS.PHONE} className="font-500">
            手機電話
          </label>
          <input
            type="text"
            id={CUSTOMER_FORM_KEYS.PHONE}
            className={`${FIELD_CLASS}`}
            placeholder="0912345678"
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label id={CUSTOMER_FORM_KEYS.ACCOUNT} className="font-500">
            匯款帳號後五碼
          </label>
          <input
            type="text"
            id={CUSTOMER_FORM_KEYS.ACCOUNT}
            className={`${FIELD_CLASS}`}
            placeholder="12345"
            onChange={onInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={CUSTOMER_FORM_KEYS.STORE} className="font-500">
            便利超商取貨（目前僅提供 7-11 取貨）
          </label>
          <div className="cursor-pointer text-base text-fontColorLight hover:text-amber-600" onClick={openEMapOnNewTab}>
            查詢門市名稱與店號
          </div>
          <input
            type="text"
            id={CUSTOMER_FORM_KEYS.STORE}
            className={`${FIELD_CLASS}`}
            placeholder="自強門市 / 277594"
            onChange={onInputChange}
          />
        </div>
      </div>
    </section>
  )
}

export default CustomerForm
