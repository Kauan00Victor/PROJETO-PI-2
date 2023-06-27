import { useEffect, useState } from "react";
import { listaJogos, removeJogo } from "../services/TaskService";
import { useParams } from 'react-router-dom';




export default function Historico() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      const userId = { id }
      const data = await listaJogos(userId);
      setJogos(data);
      setLoading(false);
    }
    carrega();
  }, []);

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



/*import { useEffect, useState } from "react"
import { listaTarefas, removeTarefa } from "../services/TaskService"


export default function Favoritos() {

  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function carrega() {
      setLoading(true)
      const data = await listaTarefas()
      setTarefas(data)
      setLoading(false)
    }
    carrega()
  }, [])
async function handleClick(key){
  await removeTarefa(key)
}
  return (
    <>
      {loading ? <h3>Aguarde...</h3>:
        <ol>
          {tarefas.map((tarefa, key) =>
            <li key={key}>{tarefa.nome} - {tarefa.prioridade}
            <button onClick={() => handleClick(tarefa.key)}>Remover</button>
            </li>)}
        </ol>
      }
    </>
  )
} */