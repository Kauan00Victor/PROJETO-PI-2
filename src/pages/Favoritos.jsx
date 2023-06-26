import { useEffect, useState } from "react";
import { listaJogos, removeJogo } from "../services/TaskService";
import Jogo from './Jogo'
export default function Favoritos() {
  const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carrega() {
      setLoading(true);
      const data = await listaJogos();
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
              {Jogo.title} - {Jogo.imagem}
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