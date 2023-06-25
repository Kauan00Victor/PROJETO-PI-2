import React from 'react';
import { useParams } from 'react-router-dom';
import { imagens } from '../components/Imagens';
import './Jogo.css'

const Jogo = () => {
  const { id } = useParams();
  const jogos = [
    {
      id: 1,
      imagem: imagens.forza,
      title: 'Forza',
      description: 'Descrição do Forza',
      // Outras informações do jogo...
    },
    {
      id: 2,
      imagem: imagens.forza2,
      title: 'FIFA',
      description: 'Descrição do FIFA',
      // Outras informações do jogo...
    },
    {
      id: 3,
      imagem: imagens.st,
      title: 'GTA V',
      description: 'Descrição do GTA V',
      // Outras informações do jogo...
    },
  ];

  // Busca o jogo correspondente ao ID informado
  const jogo = jogos.find((jogo) => jogo.id === Number(id));

  if (!jogo) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <div className="DescriptionGame">
      <h1>Detalhes do Jogo {id}</h1>
      <img className="imgJogo" src={jogo.imagem} alt={jogo.title} />
      <h2>Título: {jogo.title}</h2>
      <p>Descrição: {jogo.description}</p>
      <button>Download</button>
    </div>
  );
};

export default Jogo;
