import React, { useState } from 'react';
import './Login.css'
import logo from "../img/logoLogin.png"

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');

  const handleCadastro = () => {
    // Lógica para cadastrar o usuário
    console.log('Usuário cadastrado!');
  };

  return (
    <section className="form-login">
      <div className='cadastro'>
        <img src={logo} id="logoLogin" alt="Logo da empresa" />
        <div className='cadastro'>
          <h1>Cadastro</h1>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />

          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <div>
            <label>Sexo:</label>
            <div>
              <input
                type="radio"
                id="masculino"
                name="sexo"
                value="masculino"
                checked={sexo === 'masculino'}
                onChange={(e) => setSexo(e.target.value)}
              />
              <label htmlFor="masculino">Masculino</label>
            </div>
            <div>
              <input
                type="radio"
                id="feminino"
                name="sexo"
                value="feminino"
                checked={sexo === 'feminino'}
                onChange={(e) => setSexo(e.target.value)}
              />
              <label htmlFor="feminino">Feminino</label>
            </div>
            <div>
              <input
                type="radio"
                id="naoInformar"
                name="sexo"
                value="naoInformar"
                checked={sexo === 'naoInformar'}
                onChange={(e) => setSexo(e.target.value)}
              />
              <label htmlFor="naoInformar">Prefiro não informar</label>
            </div>
          </div>

          <button onClick={handleCadastro}>Cadastrar</button>
        </div>
      </div>
    </section>
        );
}

        export default Cadastro;
