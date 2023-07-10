import { createContext, useState, useEffect } from 'react'
import { login, logout } from '../services/AuthService'

export const UserContext = createContext({
    userId: null,
    logado: false,
    userHistory: [],
    handleLogin: () => {},
    handleLogout: () => {},
    updateUserHistory: () => {},
  });

export function UserContextProvider(props) {
  const storedUserId = localStorage.getItem('userId')
  const storedLogado = localStorage.getItem('logado')

  const [currentUser, setCurrentUser] = useState({
    userId: storedUserId,
    logado: storedLogado === 'true',
    userHistory: [],
  })

  useEffect(() => {
    if (!storedUserId) {
      setCurrentUser({ userId: null, logado: true, userHistory: [] });
    }
  }, [storedUserId]);

  async function handleLogin(email, senha) {
    try {
      const id = await login(email, senha);
      setCurrentUser({ userId: id, logado: true, userHistory: [] });
      localStorage.setItem('userId', id);
      localStorage.setItem('logado', 'true');
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async function handleLogout() {
    await logout()
    setCurrentUser({ userId: null, logado: false })
    localStorage.removeItem('userId')
    localStorage.setItem('logado', 'false')
  }
  
  const updateUserHistory = (gameId) => {
    setCurrentUser((prevUser) => ({
      ...prevUser,
      userHistory: [...prevUser.userHistory, gameId], 
    }));
  };
  
  const contexto = {
    userId: currentUser.userId,
    logado: currentUser.logado,
    userHistory: currentUser.userHistory,
    handleLogin,
    handleLogout,
    updateUserHistory, 
  };

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext
