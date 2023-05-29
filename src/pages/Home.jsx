import { useContext } from "react"
import ContatosContext from '../contexts/ContatosContextx';

export default function Home() {

    const { meusContatos } = useContext(ContatosContext);

    return (
        <div>
            <h2>Meus Contatos</h2>
            <ul>
                {meusContatos.map((contato, key) => <li id={key}>{contato.nome} - {contato.telefone}</li>)}
            </ul>
        </div>
    )
}