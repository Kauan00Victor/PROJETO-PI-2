import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import UserContext from './contexts/UserContext'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import Login from './pages/Login'
import Jogos from './pages/Jogos'
import Perfil from './pages/Perfil'
import './App.css'
import Historico from './pages/Historico'
import CadastroForm from './pages/CadastroForm'
import Jogo from './pages/Jogo'

export default function App() {
  const { logado } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        {logado ?
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="jogos" element={<Jogos />} />
            <Route path="jogo/:id" element={<Jogo />} />
            <Route path="perfil/:id" element={<Perfil />} />
            <Route path='Historico' element={<Historico />} />
          </Route>
          : <Route path="/" element={<Login />} />}
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}
