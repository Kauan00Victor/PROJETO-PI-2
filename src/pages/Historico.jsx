import { useEffect, useState, useContext } from "react";
import { listaJogos, removeJogo } from "../services/TaskService";
import UserContext from '../contexts/UserContext';

export default function Historico() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useContext(UserContext);

  useEffect(() => {
    async function carregaHistorico() {
      setLoading(true);
      try {
        const data = await listaJogos(userId);
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
    await removeJogo(key, userId);
    setJogos(prevJogos => prevJogos.filter(jogo => jogo.key !== key));
  }
  return (
    <>
      {loading ? (
        <h3>Aguarde...</h3>
      ) : (
        <>
          {jogos.length === 0 ? (
            <p>Você não possui histórico de downloads.</p>
          ) : (
            <ol>
              {jogos.map((jogo, index) => (
                <li key={index}>
                  {jogo.title} - {jogo.imagem}
                  <button onClick={() => handleClick(jogo.key)}>Remover</button>
                </li>
              ))}
            </ol>
          )}
        </>
      )}
    </>
  );  
}