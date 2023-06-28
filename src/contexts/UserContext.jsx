import { createContext, useState, useEffect } from 'react'
import { login, logout } from '../services/AuthService'

export const UserContext = createContext({
  userId: null,
  logado: false,
  handleLogin: () => {},
  handleLogout: () => {},
})

export function UserContextProvider(props) {
  const storedUserId = localStorage.getItem('userId')
  const storedLogado = localStorage.getItem('logado')

  const [currentUser, setCurrentUser] = useState({
    userId: storedUserId,
    logado: storedLogado === 'true',
  })

  useEffect(() => {
    if (!storedUserId) {
      setCurrentUser({ userId: null, logado: true })
    }
  }, [storedUserId])

  async function handleLogin(email, senha) {
    try {
      const id = await login(email, senha)
      setCurrentUser({ userId: id, logado: true })
      localStorage.setItem('userId', id)
      localStorage.setItem('logado', 'true')
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async function handleLogout() {
    await logout()
    setCurrentUser({ userId: null, logado: false })
    localStorage.removeItem('userId')
    localStorage.setItem('logado', 'false')
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
