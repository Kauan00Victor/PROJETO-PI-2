import { urlApi } from "./FirebaseConfig"
 
export async function listaTarefas() {
    await fetch(urlApi)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {throw Error("Deu Ruim")})
}

export async function insereTarefas(tarefa){
    await fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(tarefa),
        headers: {
            'Content-type':'application/json'
        }
    })
    .catch((error) => {throw Error("Deu Ruim")})

}