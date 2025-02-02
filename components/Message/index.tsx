import React, { memo, useEffect, useState } from 'react'
import { MdCheckCircle, MdDangerous } from 'react-icons/md'

import { TYPE_ENUM } from '@/components/Message/constants'

type MessageType = (typeof TYPE_ENUM)[keyof typeof TYPE_ENUM]

const INFO_CLASS = 'border-teal-300 bg-teal-100 text-teal-400'
const ERROR_CLASS = 'border-rose-300 bg-rose-100 text-rose-400'

const Message = memo(({ message, type }: { message: string; type: MessageType }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const classNames = type === TYPE_ENUM.INFO ? INFO_CLASS : ERROR_CLASS
  const Icon = type === TYPE_ENUM.INFO ? MdCheckCircle : MdDangerous

  useEffect(() => {
    if (message) {
      setVisible(true)

      const timeoutId = setTimeout(() => {
        setVisible(false)
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [message])

  if (!visible) return null

  return (
    <div
      className={`absolute rounded-lg left-1/2 top-8 z-999 h-10 w-[80%] border-2 opacity-80 -translate-x-1/2 ${classNames}`}
    >
      <div className="h-full flex items-center justify-center text-lg">
        <Icon size={20} className="mr-2" />
        {message}
      </div>
    </div>
  )
})

Message.displayName = 'Message'
export default Message
