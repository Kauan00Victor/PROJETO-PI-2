import { useEffect, useState } from "react"
import { listaTarefas, removeTarefa } from "../services/TaskService"


export default function HomeList() {

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
}