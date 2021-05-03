import React, { createContext, useCallback, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'

import ToastContainer from '../components/ToastContainer'

export interface IToastMessage {
  id: string
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

interface IToastData {
  addToast(message: Omit<IToastMessage, 'id'>): void
  removeToast(id: string): void
}

const Toast = createContext<IToastData>({} as IToastData)

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([])

  const addToast = useCallback(
    ({ type, title, description }: Omit<IToastMessage, 'id'>) => {
      const id = uuid()

      const toast = {
        id,
        type,
        title,
        description,
      }
      setMessages(oldMessages => [...oldMessages, toast])
    },
    [],
  )

  const removeToast = useCallback((id: string) => {
    setMessages(oldMessages => oldMessages.filter(message => message.id !== id))
  }, [])

  return (
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}

      {messages && <ToastContainer messages={messages} />}
    </Toast.Provider>
  )
}

function useToast(): IToastData {
  const context = useContext(Toast)

  if (!context) throw new Error('usesToast must be used within a ToastProvider')

  return context
}

export { ToastProvider, useToast }
