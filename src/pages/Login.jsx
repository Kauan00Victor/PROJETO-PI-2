import LoginForm from "./LoginForm"
import './Login.css'
import logo from "../img/logo.png"

export default function Login() {
  return (
    <section className="form-login">
      <div>
        <img src={logo} id="logo" alt="Logo da sua empresa"/>
        </div>
        <LoginForm />
    </section>
    
  )
}