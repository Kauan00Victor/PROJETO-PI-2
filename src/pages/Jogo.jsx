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
      id: 0,
      imagem: imagens.gta,
      title: 'GTA V',
      description: 'GTA, abreviação de Grand Theft Auto, é uma famosa série de jogos de mundo aberto desenvolvida pela Rockstar Games. Os jogos da série GTA são conhecidos por sua liberdade de exploração, narrativas envolventes e gameplay não linear. Os jogadores podem assumir o papel de personagens criminosos e mergulhar em vastas cidades virtuais, onde podem completar missões, realizar atividades paralelas, dirigir veículos, interagir com personagens e experimentar ação intensa.',
      // Outras informações do jogo...
    },
    {
      id: 1,
      imagem: imagens.forza2,
      title: 'Forza',
      description: 'Forza é uma franquia de jogos de corrida exclusiva para os consoles Xbox. Com uma ênfase em gráficos realistas, jogabilidade envolvente e uma vasta coleção de carros licenciados, Forza permite que os jogadores experimentem a adrenalina e a emoção das corridas automobilísticas. Os jogos da série apresentam uma ampla variedade de modos de jogo, desde corridas de circuito até desafios de rally, e oferecem uma experiência completa de simulação de corrida.',
      // Outras informações do jogo...
    },
    {
      id: 2,
      imagem: imagens.fifa1,
      title: 'FIFA',
      description: 'FIFA é uma popular série de jogos de futebol desenvolvida pela Electronic Arts. O jogo oferece uma experiência realista e imersiva de simulação de futebol, permitindo que os jogadores controlem times e jogadores famosos de todo o mundo. Com gráficos impressionantes, mecânica de jogo refinada e modos de jogo diversos, FIFA cativa os fãs do esporte com partidas emocionantes e competições online.',
      // Outras informações do jogo...
    },
    {
      id: 3,
      imagem: imagens.st2,
      title: 'Street Fighter:',
      description: 'Street Fighter é uma icônica série de jogos de luta criada pela Capcom. Com personagens carismáticos e um sistema de combate profundo, Street Fighter é um dos jogos de luta mais influentes e populares da história. Os jogadores escolhem lutadores de uma variedade de estilos de luta e participam de combates emocionantes contra oponentes controlados pelo computador ou outros jogadores. Street Fighter é conhecido por sua mecânica de combos, movimentos especiais e torneios competitivos ao redor do mundo.',
      // Outras informações do jogo...
    },
    {
      id: 4,
      imagem: imagens.valorant1,
      title: 'VALORANT:',
      description: 'Valorant é um jogo de tiro em primeira pessoa tático desenvolvido pela Riot Games. Combinando elementos de jogos de tiro tradicionais com habilidades únicas dos personagens, Valorant oferece partidas competitivas 5x5 cheias de ação. Os jogadores escolhem agentes com habilidades distintas e trabalham em equipe para completar objetivos. Valorant é conhecido por seu foco em estratégia, trabalho em equipe e mecânica de tiro precisa.',
      // Outras informações do jogo...
    },
    {
      id: 5,
      imagem: imagens.mario,
      title: 'MARIO:',
      description: 'O jogo do Mario é uma série de videogames desenvolvida pela Nintendo, protagonizada pelo icônico personagem Mario. Conhecido por suas aventuras em plataformas coloridas, o jogo do Mario oferece uma experiência divertida e envolvente. Os jogadores assumem o papel de Mario, um encanador corajoso, e embarcam em missões para resgatar a Princesa Peach das garras do vilão Bowser. Saltando em cima de inimigos, coletando moedas e power-ups, os jogadores exploram níveis repletos de desafios e segredos. Com gráficos vibrantes, trilha sonora cativante e jogabilidade acessível, o jogo do Mario conquistou o coração de jogadores de todas as idades, se tornando um verdadeiro clássico dos videogames.',
      // Outras informações do jogo...
    },
    {
      id: 6,
      imagem: imagens.aranha,
      title: 'Homem Aranha:',
      description: 'Homem-Aranha: Este jogo é baseado no famoso super-herói Homem-Aranha. Nele, você assume o papel do Homem-Aranha e enfrenta vilões enquanto patrulha a cidade de Nova York, usando suas habilidades de aranha e combatendo o crime.',
      // Outras informações do jogo...
    },
    {
      id: 7,
      imagem: imagens.avg,
      title: 'Avengers:',
      description: '"Avengers" é um jogo baseado na equipe de super-heróis da Marvel, os Vingadores. Os jogadores podem controlar diferentes personagens icônicos dos quadrinhos, como o Homem de Ferro, Capitão América, Thor, Hulk e Viúva Negra, enquanto lutam contra ameaças globais.',
      // Outras informações do jogo...
    },
    {
      id: 8,
      imagem: imagens.bully,
      title: 'Bully:',
      description: 'Desenvolvido pela Rockstar Games, "Bully" é um jogo ambientado em um ambiente escolar. Nele, você joga como Jimmy Hopkins, um estudante travesso que deve navegar pela hierarquia social da escola, enfrentar valentões e participar de diversas atividades.',
      // Outras informações do jogo...
    },
    {
      id: 9,
      imagem: imagens.cdw3,
      title: 'Call of Duty: Modern Warfare 3:',
      description: 'Parte da famosa série de jogos de tiro em primeira pessoa, "Call of Duty: Modern Warfare 3" é um jogo de ação e combate intenso. Nele, os jogadores participam de missões militares em várias partes do mundo para derrotar inimigos e proteger a paz global.',
      // Outras informações do jogo...
    },
    {
      id: 10,
      imagem: imagens.cod2,
      title: 'Call of Duty: Black Ops 2',
      description: 'Outro título da série "Call of Duty", "Black Ops 2" se passa em duas épocas diferentes e conta com uma campanha emocionante e um modo multiplayer competitivo. O jogo apresenta uma narrativa ramificada e escolhas do jogador que afetam o enredo.',
      // Outras informações do jogo...
    },
    {
      id: 11,
      imagem: imagens.donkey,
      title: 'Donkey Kong:',
      description: 'Donkey Kong é um clássico personagem da Nintendo. Os jogos do Donkey Kong geralmente envolvem plataformas, onde o jogador controla o macaco Donkey Kong ou outros personagens da franquia, superando obstáculos e derrotando inimigos.',
      // Outras informações do jogo...
    },
    {
      id: 12,
      imagem: imagens.crash,
      title: 'Crash:',
      description: 'Crash" pode se referir a diferentes jogos, mas provavelmente está relacionado à série "Crash Bandicoot". Estes são jogos de plataforma onde o protagonista Crash Bandicoot enfrenta inimigos, supera obstáculos e coleta itens em aventuras divertidas.',
      // Outras informações do jogo...
    },
    {
      id: 13,
      imagem: imagens.csgo,
      title: 'CS:GO:',
      description: '(Counter-Strike: Global Offensive): "CS:GO" é um popular jogo de tiro em primeira pessoa baseado em equipes. Os jogadores se dividem em terroristas e contra-terroristas e competem em vários modos de jogo, como eliminação de inimigos ou plantio/desativação de bombas.',
      // Outras informações do jogo...
    },
    {
      id: 14,
      imagem: imagens.fortnite,
      title: 'Fortnite:',
      description: '"Fortnite" é um jogo de batalha real online extremamente popular. Os jogadores são colocados em um mapa onde devem coletar recursos, construir estruturas e lutar contra outros jogadores até que apenas um permaneça como vencedor.',
      // Outras informações do jogo...
    },
    {
      id: 15,
      imagem: imagens.mine,
      title: 'Minecraft:',
      description: '"Minecraft" é um jogo de construção e exploração em um mundo aberto. Os jogadores podem criar e destruir blocos, construir estruturas, explorar paisagens geradas aleatoriamente e enfrentar perigos como monstros. O jogo oferece liberdade criativa e é conhecido por sua jogabilidade única.',
      // Outras informações do jogo...
    },
    {
      id: 16,
      imagem: imagens.mortalkombat,
      title: 'Mortal Kombat:',
      description: '"Mortal Kombat" é uma popular série de jogos de luta conhecida por sua violência e combates brutais. Os jogadores controlam personagens com habilidades especiais e participam de torneios onde enfrentam oponentes em lutas intensas.',
      // Outras informações do jogo...
    },
    {
      id: 17,
      imagem: imagens.nba,
      title: 'NBA 2k23:',
      description: '"NBA 2K23" é um jogo de simulação de basquete que oferece uma experiência autêntica da NBA. Os jogadores podem controlar times da NBA, criar seus próprios jogadores e participar de partidas emocionantes com gráficos realistas e mecânicas de jogo sofisticadas.',
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
          Download
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
