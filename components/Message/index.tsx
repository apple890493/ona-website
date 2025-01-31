import React, { memo, useEffect, useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'

const TYPE_ENUM = {
  INFO: 'info',
  ERROR: 'error',
} as const

type MessageType = (typeof TYPE_ENUM)[keyof typeof TYPE_ENUM]

const INFO_CLASS = 'border-teal-500 bg-teal-100 text-teal-800'
const ERROR_CLASS = 'border-red-500 bg-red-100 text-red-800'

const Message = memo(({ message, type }: { message: string; type: MessageType }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const classNames = type === TYPE_ENUM.INFO ? INFO_CLASS : ERROR_CLASS

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
      className={`absolute rounded-lg left-1/2 top-8 z-999 h-16 w-sm border-2 opacity-80 -translate-x-1/2 ${classNames}`}
    >
      <div className="h-full flex items-center justify-center text-lg">
        <MdCheckCircle size={20} className="mr-2" />
        {message}
      </div>
    </div>
  )
})

Message.displayName = 'Message'
export default Message
