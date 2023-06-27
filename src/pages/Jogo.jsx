import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { insereJogo } from '../services/TaskService';
import { imagens } from '../components/Imagens';
import './Jogo.css';

const Jogo = ({ userId }) => {
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

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const jogo = jogos.find((jogo) => jogo.id === Number(id));

      if (!jogo) {
        throw new Error('Jogo não encontrado');
      }

      await insereJogo(
        {
          titulo: jogo.title,
          img: jogo.imagem,
        },
        userId
      );
      
      navigate('/Historico');
    } catch (error) {
      console.log(error.message);
    }
  };

  const jogo = jogos.find((jogo) => jogo.id === Number(id));

  if (!jogo) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <div className="DescriptionGame">
      <h1>Detalhes do Jogo {id}</h1>
      <div>
        <img className="imgJogo" src={jogo.imagem} alt={jogo.title} />
        <h2>{jogo.title}</h2>
        <p>{jogo.description}</p>
        <button type="button" onClick={onSubmit}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Jogo;



/*import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { insereTarefas } from "../services/TaskService"
import { imagens } from '../components/Imagens';
import './Jogo.css'

const { register, handleSubmit } = useForm()

// Utiliza o hook useNavigate para obter a função de navegação
const navigate = useNavigate()

// Função executada ao submeter o formulário
async function onSubmit(data) {
  try {
    // Chama a função insereTarefas do serviço TaskService para salvar a tarefa no banco de dados
    await insereTarefas(data)

    // Redireciona para a página '/Favoritos'
    navigate('/Favoritos')
  } catch (error) {
    console.log(error.message)
  }
}

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
    <div className="DescriptionGame" onSubmit={handleSubmit(onSubmit)}>
      <h1>Detalhes do Jogo {id}</h1>
      <img  {...register("img do jogo")} className="imgJogo" src={jogo.imagem} alt={jogo.title} />
      <h2 {...register("titulo do jogo")}>Título: {jogo.title}</h2>
      <p>Descrição: {jogo.description}</p>
      <button>Download</button>
    </div>
  );
};

export default Jogo;*/
