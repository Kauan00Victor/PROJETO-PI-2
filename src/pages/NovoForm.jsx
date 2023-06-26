import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
//import { insereTarefas } from "../services/TaskService"

export default function NovoForm() {
  // Inicializa o hook useForm para gerenciar o estado do formulário
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome da Tarefa</label>
          {/* Registra o campo 'nome' do input */}
          <input type="text" {...register("nome")} />
        </div>
        <div>
          <label>Prioridade</label>
          {/* Registra o campo 'prioridade' do select */}
          <select {...register("prioridade")}>
            <option value="1">Urgente</option>
            <option value="2">Importante</option>
            <option value="3">Normal</option>
          </select>
        </div>
        <button>Salvar</button>
      </form>
    </>
  )
}
