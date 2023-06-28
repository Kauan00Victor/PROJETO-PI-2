import { useEffect, useState, useContext } from "react";
import { listaJogos, removeJogo } from "../services/TaskService";
import { useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function Historico() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { userId } = useContext(UserContext);

  useEffect(() => {
    async function carregaHistorico() {
      setLoading(true);
      try {
        const data = await listaJogos(userId); // Busca o histórico de jogos usando o userId
        setJogos(data);
      } catch (error) {
        console.error('Erro ao carregar o histórico de jogos:', error);
      } finally {
        setLoading(false);
      }
    }
    carregaHistorico();
  }, [userId]);

  async function handleClick(key) {
    await removeJogo(key);
  }

  return (
    <>
      {loading ? (
        <h3>Aguarde...</h3>
      ) : (
        <ol>
          {jogos.map((jogo, key) => (
            <li key={key}>
              {jogo.imagem} - {jogo.imagem}
              <button onClick={() => handleClick(jogo.key)}>Remover</button>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
