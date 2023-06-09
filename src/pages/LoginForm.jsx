import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

export default function LoginForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { handleLogin } = useContext(UserContext)
  const [errorLogin, setErrorLogin] = useState("")

  const validaEmail = {
    required: {
      value: true,
      message: 'Digite o email',
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Email inválido',
    }
  }

  const validaSenha = {
    required: {
      value: true,
      message: 'Digite a senha',
    },
    minLength: {
      value: 8,
      message: 'Senha deve ter no mínimo 8 caracteres',
    }
  }

  async function onSubmit(data) {
    const { email, senha } = data;
    setErrorLogin("")
    try {
      await handleLogin(email, senha)
      navigate("/")
    } catch (error) {
      setErrorLogin(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorLogin && <p className="erro">{errorLogin}</p>}
      <div>
        <input type="email" id="email" placeholder="E-mail" {...register("email", validaEmail)} />
        {errors.email && <p className="erro">{errors.email.message}</p>}
      </div>
      <div>
        <input type="password" id="senha" placeholder="Senha" {...register("senha", validaSenha)} />
        {errors.senha && <p className="erro">{errors.senha.message}</p>}
      </div>
      <div id="botao">
        <button>Entrar</button>
      </div>
    </form>
  )
}