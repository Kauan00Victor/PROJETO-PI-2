import { urlApi } from "./FirebaseConfig";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

// Função para obter a lista de jogos
export async function listaJogos(userId) {
  try {
    const response = await fetch(`${urlApi}/${userId}/jogos.json`);
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
    const { userId } = useContext(UserContext); // Obtenha o userId do contexto
    const response = await fetch(`${urlApi}/jogos/${userId}.json`, {
      method: 'POST',
      body: JSON.stringify(jogo),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao inserir o jogo');
    }
  } catch (error) {
    throw new Error('Erro ao inserir o jogo: ' + error.message);
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