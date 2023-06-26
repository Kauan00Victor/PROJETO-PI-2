import { urlApi } from "./FirebaseConfig";

// Função para obter a lista de jogos
export async function listaJogos() {
  try {
    const response = await fetch(`${urlApi}/jogos.json`);
    const data = await response.json();

    if (response.ok) {
      const jogos = Object.keys(data).map((key) => ({ key, ...data[key] }));
      return jogos;
    } else {
      throw new Error("Erro ao obter a lista de jogos");
    }
  } catch (error) {
    throw new Error("Erro ao obter a lista de jogos: " + error.message);
  }
}

// Função para inserir um novo jogo
export async function insereJogo(jogo) {
  try {
    const response = await fetch(`${urlApi}/jogos.json`, {
      method: "POST",
      body: JSON.stringify(jogo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao inserir o jogo");
    }
  } catch (error) {
    throw new Error("Erro ao inserir o jogo: " + error.message);
  }
}

// Função para remover um jogo
export async function removeJogo(key) {
  try {
    const response = await fetch(`${urlApi}/jogos/${key}.json`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover o jogo");
    }
  } catch (error) {
    throw new Error("Erro ao remover o jogo: " + error.message);
  }
}


/*import { urlApi } from "./FirebaseConfig"

// Função para obter a lista de tarefas
export async function listaTarefas() {
    let tarefas = []
    await fetch(urlApi + "tarefas.json") // Faz uma requisição GET para obter a lista de tarefas da API
        .then((response) => response.json()) // Converte a resposta para JSON
        .then((data) => {
            for(let key in data) {
                tarefas.push({key, ...data[key]}) // Adiciona cada tarefa ao array 'tarefas'
        }
    })
        .catch((error) => {throw Error("Deu Ruim")}) // Lança uma exceção em caso de erro
    return tarefas // Retorna o array de tarefas
}

// Função para inserir uma nova tarefa
export async function insereTarefas(tarefa){
    await fetch(urlApi  + "tarefas.json", {
        method: 'POST', // Faz uma requisição POST para adicionar a nova tarefa
        body: JSON.stringify(tarefa), // Envia a tarefa no formato JSON
        headers: {
            'Content-type':'application/json' // Define o cabeçalho da requisição como JSON
        }
    })
    .catch((error) => {throw Error("Deu Ruim")}) // Lança uma exceção em caso de erro
}

// Função para remover uma tarefa
export async function removeTarefa(key){
    await fetch(urlApi + "tarefas/" + key + ".json", {
        method: 'DELETE' // Faz uma requisição DELETE para remover a tarefa
    })
    .catch((error) => {throw Error("Deu ruim")}) // Lança uma exceção em caso de erro
}
*/