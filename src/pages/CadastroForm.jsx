import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { cadastrar } from '../services/AuthService';
import './Login.css';
import logo from '../img/logoLogin.png';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    // Verificar se os campos estão preenchidos
    if (!nome || !email || !senha || !confirmarSenha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    // Verificar se a senha tem pelo menos 8 dígitos
    if (senha.length < 8) {
      setErrorMessage('A senha deve ter pelo menos 8 dígitos.');
      return;
    }

    // Verificar se os campos de senha conferem
    if (senha !== confirmarSenha) {
      setErrorMessage('As senhas não conferem. Por favor, verifique.');
      return;
    }

    // Verificar se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('O email informado não é válido.');
      return;
    }

    // Chamar a função de cadastro no Firebase
    cadastrar(email, senha, nome)
      .then((uid) => {
        console.log('Usuário cadastrado com sucesso!');
        console.log('UID do usuário:', uid);

        // Redirecionar para a página de login com a mensagem de sucesso
        navigate("/", { state: { sucessoCadastro: true } });
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        if (error.message.includes('O email já está em uso.')) {
          setErrorMessage('O email informado já está em uso.');
        } else {
          setErrorMessage('Erro ao cadastrar usuário. Por favor, tente novamente.');
        }
      });
  };

  return (
    <section className="form-login">
      <div className="cadastro">
        <img src={logo} id="logoLogin" alt="Logo da empresa" />
        <div className="cadastro">
          <h1>Cadastro</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input type="text" id="nome" placeholder="Nome de Usuario" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="password" placeholder="Confirme sua Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
          <button onClick={handleCadastro}>Cadastrar</button>
        </div>
        <NavLink to="/">Voltar</NavLink>
      </div>
    </section>
  );
}

export default Cadastro;
