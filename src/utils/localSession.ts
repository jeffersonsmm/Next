/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
interface ITokenData {
  token: string
}

class LocalSession {
  pick() {
    return localStorage.getItem('token')
  }

  mk(tkn: ITokenData) {
    localStorage.setItem('token', String(tkn))
  }

  rm() {
    localStorage.removeItem('token')
  }
}

export default LocalSession
