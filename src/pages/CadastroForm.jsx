import React, { useState } from 'react';
import { cadastrar } from '../services/AuthService';
import './Login.css';
import logo from '../img/logoLogin.png';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = () => {
    // Chamar a função de cadastro no Firebase
    cadastrar(email, senha, nome)
      .then((uid) => {
        console.log('Usuário cadastrado com sucesso!');
        console.log('UID do usuário:', uid);

        // Confirma que foi cadastrado e Redirecionar para a página de login
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
        // Tratar o erro e exibir uma mensagem adequada para o usuário
      });
  };

  return (
    <section className="form-login">
      <div className="cadastro">
        <img src={logo} id="logoLogin" alt="Logo da empresa" />
        <div className="cadastro">
          <h1>Cadastro</h1>

          <input type="text" id="nome" placeholder="Nome de Usuario" value={nome} onChange={(e) => setNome(e.target.value)} />

          <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />

          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

          <input type="password" placeholder="Confirme sua Senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />

          <button onClick={handleCadastro}>Cadastrar</button>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
