import LoginForm from "./LoginForm"
import './Login.css'
import logo from "../img/logoLogin.png"
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <section className="form-login">
      <div>
        <img src={logo} id="logoLogin" alt="Logo da empresa" />
      </div>
      <LoginForm />
      <div>
        <ul>
          <NavLink to="/Cadastro">Cadastre-se</NavLink>
        </ul>
      </div>
    </section>

  )
}