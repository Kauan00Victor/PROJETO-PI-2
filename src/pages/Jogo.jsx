import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { insereJogo } from '../services/TaskService';
import { UserContext } from '../contexts/UserContext'; 
import { imagens } from '../components/Imagens';
import './Jogo.css';

const Jogo = () => {
  const { id } = useParams();
  const { userId, userHistory, updateUserHistory } = useContext(UserContext);
  const [downloadConcluido, setDownloadConcluido] = useState(false);
  const [erro, setErro] = useState(null);

  const isDownloaded = userHistory.some((game) => game.id === Number(id)); 
  const jogos = [
    {
      id: 0,
      imagem: imagens.gta,
      title: 'GTA V',
      description: 'GTA, abreviação de Grand Theft Auto, é uma famosa série de jogos de mundo aberto desenvolvida pela Rockstar Games. Os jogos da série GTA são conhecidos por sua liberdade de exploração, narrativas envolventes e gameplay não linear. Os jogadores podem assumir o papel de personagens criminosos e mergulhar em vastas cidades virtuais, onde podem completar missões, realizar atividades paralelas, dirigir veículos, interagir com personagens e experimentar ação intensa.',
      
    },
    {
      id: 1,
      imagem: imagens.forza2,
      title: 'Forza',
      description: 'Forza é uma franquia de jogos de corrida exclusiva para os consoles Xbox. Com uma ênfase em gráficos realistas, jogabilidade envolvente e uma vasta coleção de carros licenciados, Forza permite que os jogadores experimentem a adrenalina e a emoção das corridas automobilísticas. Os jogos da série apresentam uma ampla variedade de modos de jogo, desde corridas de circuito até desafios de rally, e oferecem uma experiência completa de simulação de corrida.',
      
    },
    {
      id: 2,
      imagem: imagens.fifa1,
      title: 'FIFA',
      description: 'FIFA é uma popular série de jogos de futebol desenvolvida pela Electronic Arts. O jogo oferece uma experiência realista e imersiva de simulação de futebol, permitindo que os jogadores controlem times e jogadores famosos de todo o mundo. Com gráficos impressionantes, mecânica de jogo refinada e modos de jogo diversos, FIFA cativa os fãs do esporte com partidas emocionantes e competições online.',
      
    },
    {
      id: 3,
      imagem: imagens.st2,
      title: 'Street Fighter:',
      description: 'Street Fighter é uma icônica série de jogos de luta criada pela Capcom. Com personagens carismáticos e um sistema de combate profundo, Street Fighter é um dos jogos de luta mais influentes e populares da história. Os jogadores escolhem lutadores de uma variedade de estilos de luta e participam de combates emocionantes contra oponentes controlados pelo computador ou outros jogadores. Street Fighter é conhecido por sua mecânica de combos, movimentos especiais e torneios competitivos ao redor do mundo.',
      
    },
    {
      id: 4,
      imagem: imagens.valorant1,
      title: 'VALORANT:',
      description: 'Valorant é um jogo de tiro em primeira pessoa tático desenvolvido pela Riot Games. Combinando elementos de jogos de tiro tradicionais com habilidades únicas dos personagens, Valorant oferece partidas competitivas 5x5 cheias de ação. Os jogadores escolhem agentes com habilidades distintas e trabalham em equipe para completar objetivos. Valorant é conhecido por seu foco em estratégia, trabalho em equipe e mecânica de tiro precisa.',
      
    },
    {
      id: 5,
      imagem: imagens.mario,
      title: 'MARIO:',
      description: 'O jogo do Mario é uma série de videogames desenvolvida pela Nintendo, protagonizada pelo icônico personagem Mario. Conhecido por suas aventuras em plataformas coloridas, o jogo do Mario oferece uma experiência divertida e envolvente. Os jogadores assumem o papel de Mario, um encanador corajoso, e embarcam em missões para resgatar a Princesa Peach das garras do vilão Bowser. Saltando em cima de inimigos, coletando moedas e power-ups, os jogadores exploram níveis repletos de desafios e segredos. Com gráficos vibrantes, trilha sonora cativante e jogabilidade acessível, o jogo do Mario conquistou o coração de jogadores de todas as idades, se tornando um verdadeiro clássico dos videogames.',
      
    },
    {
      id: 6,
      imagem: imagens.aranha,
      title: 'Homem Aranha:',
      description: 'Homem-Aranha: Este jogo é baseado no famoso super-herói Homem-Aranha. Nele, você assume o papel do Homem-Aranha e enfrenta vilões enquanto patrulha a cidade de Nova York, usando suas habilidades de aranha e combatendo o crime.',
      
    },
    {
      id: 7,
      imagem: imagens.avg,
      title: 'Avengers:',
      description: '"Avengers" é um jogo baseado na equipe de super-heróis da Marvel, os Vingadores. Os jogadores podem controlar diferentes personagens icônicos dos quadrinhos, como o Homem de Ferro, Capitão América, Thor, Hulk e Viúva Negra, enquanto lutam contra ameaças globais.',
      
    },
    {
      id: 8,
      imagem: imagens.bully,
      title: 'Bully:',
      description: 'Desenvolvido pela Rockstar Games, "Bully" é um jogo ambientado em um ambiente escolar. Nele, você joga como Jimmy Hopkins, um estudante travesso que deve navegar pela hierarquia social da escola, enfrentar valentões e participar de diversas atividades.',
      
    },
    {
      id: 9,
      imagem: imagens.cdw3,
      title: 'Call of Duty: Modern Warfare 3:',
      description: 'Parte da famosa série de jogos de tiro em primeira pessoa, "Call of Duty: Modern Warfare 3" é um jogo de ação e combate intenso. Nele, os jogadores participam de missões militares em várias partes do mundo para derrotar inimigos e proteger a paz global.',
      
    },
    {
      id: 10,
      imagem: imagens.cod2,
      title: 'Call of Duty: Black Ops 2',
      description: 'Outro título da série "Call of Duty", "Black Ops 2" se passa em duas épocas diferentes e conta com uma campanha emocionante e um modo multiplayer competitivo. O jogo apresenta uma narrativa ramificada e escolhas do jogador que afetam o enredo.',
      
    },
    {
      id: 11,
      imagem: imagens.donkey,
      title: 'Donkey Kong:',
      description: 'Donkey Kong é um clássico personagem da Nintendo. Os jogos do Donkey Kong geralmente envolvem plataformas, onde o jogador controla o macaco Donkey Kong ou outros personagens da franquia, superando obstáculos e derrotando inimigos.',
      
    },
    {
      id: 12,
      imagem: imagens.crash,
      title: 'Crash:',
      description: 'Crash" pode se referir a diferentes jogos, mas provavelmente está relacionado à série "Crash Bandicoot". Estes são jogos de plataforma onde o protagonista Crash Bandicoot enfrenta inimigos, supera obstáculos e coleta itens em aventuras divertidas.',
      
    },
    {
      id: 13,
      imagem: imagens.csgo,
      title: 'CS:GO:',
      description: '(Counter-Strike: Global Offensive): "CS:GO" é um popular jogo de tiro em primeira pessoa baseado em equipes. Os jogadores se dividem em terroristas e contra-terroristas e competem em vários modos de jogo, como eliminação de inimigos ou plantio/desativação de bombas.',
      
    },
    {
      id: 14,
      imagem: imagens.fortnite,
      title: 'Fortnite:',
      description: '"Fortnite" é um jogo de batalha real online extremamente popular. Os jogadores são colocados em um mapa onde devem coletar recursos, construir estruturas e lutar contra outros jogadores até que apenas um permaneça como vencedor.',
      
    },
    {
      id: 15,
      imagem: imagens.mine,
      title: 'Minecraft:',
      description: '"Minecraft" é um jogo de construção e exploração em um mundo aberto. Os jogadores podem criar e destruir blocos, construir estruturas, explorar paisagens geradas aleatoriamente e enfrentar perigos como monstros. O jogo oferece liberdade criativa e é conhecido por sua jogabilidade única.',
      
    },
    {
      id: 16,
      imagem: imagens.mortalkombat,
      title: 'Mortal Kombat:',
      description: '"Mortal Kombat" é uma popular série de jogos de luta conhecida por sua violência e combates brutais. Os jogadores controlam personagens com habilidades especiais e participam de torneios onde enfrentam oponentes em lutas intensas.',
      
    },
    {
      id: 17,
      imagem: imagens.nba,
      title: 'NBA 2k23:',
      description: '"NBA 2K23" é um jogo de simulação de basquete que oferece uma experiência autêntica da NBA. Os jogadores podem controlar times da NBA, criar seus próprios jogadores e participar de partidas emocionantes com gráficos realistas e mecânicas de jogo sofisticadas.',
      
    },
  ];

  const onSubmit = async () => {
    try {
      const jogo = jogos.find((jogo) => jogo.id === Number(id));

      if (!jogo) {
        throw new Error('Jogo não encontrado');
      }

      const response = await insereJogo(
        {
          titulo: jogo.title,
          img: jogo.imagem,
        },
        userId
      );

      if (response === 'success') {
        updateUserHistory(jogo);
        setErro(null); 
      }
      setDownloadConcluido(true);
    } catch (error) {
      setErro(error.message); 
    }
  };

  const jogo = jogos.find((jogo) => jogo.id === Number(id));

  if (!jogo) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <div className="DescriptionGame">
      <div>
        <img className="imgJogo" src={jogo.imagem} alt={jogo.title} />
        <h2>{jogo.title}</h2>
        <p>{jogo.description}</p>
        <button type="button" onClick={onSubmit} disabled={isDownloaded}>
          {isDownloaded ? 'Jogo Baixado' : 'Download'}
        </button>
        {downloadConcluido && <p>Download concluído</p>}
        {erro && <p>{erro}</p>}
      </div>
    </div>
  );
};

export default Jogo;