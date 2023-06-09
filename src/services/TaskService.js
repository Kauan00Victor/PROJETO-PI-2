import { urlApi } from "./FirebaseConfig";

// Função para obter a lista de jogos
export async function listaJogos(userId) {
  try {
    const response = await fetch(`${urlApi}/jogos/${userId}.json`);
    const data = await response.json();

    if (response.ok) {
      if (data) {
        const jogos = Object.keys(data).map((key) => {
          const jogo = data[key];
          return {
            key,
            titulo: jogo.titulo,
            imagem: jogo.img
          };
        });
        return jogos;
      } else {
        return [];
      }
    } else {
      throw new Error("Erro ao obter a lista de jogos");
    }
  } catch (error) {
    throw new Error("Erro ao obter a lista de jogos: " + error.message);
  }
}

// Função para inserir um novo jogo
export async function insereJogo(jogo, userId) {
  try {
    const response = await fetch(`${urlApi}/jogos/${userId}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao obter os jogos do usuário');
    }

    const data = await response.json();

    if (data) {
      const existingJogo = Object.values(data).find(
        (j) => j.titulo === jogo.titulo
      );

      if (existingJogo) {
        throw new Error('Esse jogo já foi baixado');
      }
    }

    await fetch(`${urlApi}/jogos/${userId}.json`, {
      method: 'POST',
      body: JSON.stringify(jogo),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    throw new Error('Erro ao inserir o jogo: ' + error.message);
  }
}


// Função para remover um jogo
export async function removeJogo(key, userId) {
  try {
    const response = await fetch(`${urlApi}/jogos/${userId}/${key}.json`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao remover o jogo");
    }
  } catch (error) {
    throw new Error("Erro ao remover o jogo: " + error.message);
  }
}
