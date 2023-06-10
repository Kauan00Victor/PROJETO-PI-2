import { useEffect } from "react"
import { listaTarefas } from "../services/TaskService"


export default function HomeList() {

  const tarefas = []

  useEffect(() => {
    async function carrega(){
        await listaTarefas()
    }
    carrega()
  }, [])
  
  return (
    <>
      <ol>
        {tarefas.map((tarefa, key) => 
          <li key={key}>{tarefa.nome} - {tarefa.prioridade}</li>)}
      </ol>
    </>
  )
}