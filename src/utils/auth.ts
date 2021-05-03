import api from 'axios'

import LocalSession from './localSession'

const local = new LocalSession()

export default async function isAuthenticated() {
  try {
    const { status } = await api.get('session/validate', {
      headers: {
        userid: localStorage.getItem('token'),
      },
    })

    console.log(status)

    if (status === 200) {
      return true
    }

    local.rm()
    return false
  } catch (error) {
    local.rm()
    return false
  }
}
