import React, { createContext, ReactNode, useContext, useState } from 'react'

import Message from '@/components/Message'
import { TYPE_ENUM } from '@/components/Message/constants'
import type { MessageType } from '@/constants/types'

type MessageProps = {
  msg: string
  type: MessageType
}

const MessageContext = createContext<{
  showMessage: (props: MessageProps) => void
} | null>(null)

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<MessageProps | null>(null)

  const showMessage = ({ msg, type = TYPE_ENUM.INFO }: MessageProps) => {
    setMessage({ msg, type })
    setTimeout(() => {
      setMessage(null)
    }, 1000)
  }
  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      {message && <Message message={message.msg} type={message.type} />}
    </MessageContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(MessageContext)
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider')
  }
  return context
}
