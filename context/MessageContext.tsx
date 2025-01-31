import React, { createContext, ReactNode, useContext, useState } from 'react'

import Message from '@/components/Message'

const MessageContext = createContext<{
  showMessage: (message: string) => void
} | null>(null)

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState<string | null>(null)

  const showMessage = (msg: string) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage(null)
    }, 1000)
  }
  return (
    <MessageContext.Provider value={{ showMessage }}>
      {children}
      {message && <Message message={message} type={'error'} />}
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
