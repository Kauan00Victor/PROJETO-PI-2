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
import Favoritos from './pages/Favoritos'
import CadastroForm from './pages/CadastroForm'

export default function App() {
  const { logado } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        {logado ?
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Jogos" element={<Jogos />} />
            <Route path="perfil/:id" element={<Perfil />} />
            <Route path='Favoritos' element={<Favoritos />} />
          </Route>
          : <Route path="/" element={<Login />} />}
          <Route path="/Cadastro" element={<CadastroForm />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}
