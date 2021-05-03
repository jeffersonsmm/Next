/* eslint-disable camelcase */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import api from '@essap/axios-config'

interface ISignInCredentials {
  cpfOrEmail: string
  pwd: string
}

interface IEnrollment {
  id: number
  class_id: number
  academic_id: number
  proposal_cart_subitem_id: number
  pre_scheduled_at: Date
  blocked: boolean
  blocked_reason: string
  confirmed_at: Date
  canceled_at: Date
  canceled_reason: string
  type: string
  datetime_attendance: Date
  created_at: Date
  updated_at: Date
}
interface IAccess {
  dev: boolean
  admin: boolean
  secretary: boolean
  manager: boolean
  teacher: boolean
  monitor: boolean
  seller_callcenter: boolean
  seller_internal: boolean
  seller_external: boolean
  consultant: boolean
  colab: boolean
}

interface IAuthState {
  token: string | undefined
  nickname: string
  haveToReset: boolean
  enrollments: IEnrollment[]
  levels_enable: number[]
  access: IAccess
}

interface IAuthContextData extends IAuthState {
  loading: boolean
  signIn(credentials: ISignInCredentials): Promise<string>
  signOut(): void
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<IAuthState>({} as IAuthState)

  useEffect(() => {
    async function loadData() {
      try {
        const token = localStorage.getItem('@ExcelSolution:Token')

        if (token) {
          const response = await api.get<IAuthContextData>('sessions/validate', {
            headers: {
              authorization: token,
            },
          })

          const {
            nickname,
            haveToReset,
            enrollments,
            access,
            levels_enable,
          } = response.data
          setData({
            token,
            levels_enable,
            haveToReset,
            nickname,
            enrollments,
            access,
          })
          setLoading(false)
          return
        } else {
          setLoading(false)
          return setData({} as IAuthState)
        }
      } catch (error) {
        localStorage.removeItem('@ExcelSolution:Token')

        setLoading(false)
        return setData({} as IAuthState)
      }
    }
    setLoading(true)
    loadData()
    // setData({
    //   token: '',
    //   levels_enable: [1, 2],
    //   haveToReset: false,
    //   nickname: 'Jeff',
    //   enrollments: [],
    //   access: {
    //     dev: false,
    //     admin: false,
    //     secretary: false,
    //     manager: false,
    //     teacher: false,
    //     monitor: false,
    //     seller_callcenter: false,
    //     seller_internal: false,
    //     seller_external: false,
    //     consultant: false,
    //   },
    // })
  }, [])

  const signIn = useCallback(async ({ cpfOrEmail, pwd }) => {
    try {
      const response = await api.post<IAuthContextData>('sessions', {
        cpfOrEmail,
        pwd,
      })

      const {
        token,
        nickname,
        haveToReset,
        enrollments,
        levels_enable,
        access,
      } = response.data

      if (haveToReset) return token || ''

      localStorage.setItem('@ExcelSolution:Token', token || '')

      setData({
        token,
        levels_enable,
        haveToReset,
        nickname,
        enrollments,
        access,
      })

      return 'Validado'
    } catch (error) {
      return ''
    }
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@ExcelSolution:Token')
    setData({} as IAuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        ...data,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext)

  if (!context) throw new Error('error')
  return context
}

export { AuthProvider, useAuth }
