import { urlApi } from "./FirebaseConfig"
 
export async function listaTarefas() {
    let tarefas = []
    await fetch(urlApi + "tarefas.json")
        .then((response) => response.json())
        .then((data) => {
            for(let key in data) {
                tarefas.push({key, ...data[key]})
        }
    })
        .catch((error) => {throw Error("Deu Ruim")})
        return tarefas
}

export async function insereTarefas(tarefa){
    await fetch(urlApi  + "tarefas.json", {
        method: 'POST',
        body: JSON.stringify(tarefa),
        headers: {
            'Content-type':'application/json'
        }
    })
    .catch((error) => {throw Error("Deu Ruim")})

}
export async function removeTarefa(key){
    await fetch(urlApi + "tarefas/" + key + ".json", {
        method: 'DELETE'
    })
    .catch((error) => {throw Error("Deu ruim")})
}