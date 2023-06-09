import { createContext, useState } from 'react'
import { login, logout } from '../services/AuthService'

const UserContext = createContext({
  userId: null,
  logado: false,
  handleLogin: () => { },
  handleLogout: () => { },
})

export function UserContextProvider(props) {

  const [currentUser, setCurrentUser] = useState({ userId: null, logado: true })

  async function handleLogin(email, senha) {
    try {
      const id = await login(email, senha)
      setCurrentUser({ userId: id, logado: true })
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function handleLogout() {
    await logout()
    setCurrentUser({ userId: null, logado: false })
  }

  const contexto = {
    userId: currentUser.userId,
    logado: currentUser.logado,
    handleLogin,
    handleLogout,
  }

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext