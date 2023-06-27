import { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import UserContext from '../contexts/UserContext'
import './Navbar.css'

export default function Navbar() {
  const { userId, handleLogout } = useContext(UserContext)
  const navigate = useNavigate()

  async function handleClick() {
    await handleLogout()
    navigate("/")
  }

  return (
    <section className="Navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Jogos">Jogos</NavLink></li>
        <li><NavLink to="/Historico">Historico</NavLink></li>
        <li><NavLink to={`/perfil/${userId}`}>Perfil</NavLink></li>
        {
          userId !== null ?
            <button onClick={handleClick}>Logout</button> :
            <button onClick={handleClick}>Login</button>
        }
      </ul>
    </section>
  )
}
