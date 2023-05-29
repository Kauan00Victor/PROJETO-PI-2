import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return(
        <ul>
            <li><NavLink to="/">Meus Contatos</NavLink></li>
            <li><NavLink to="/Novo">Novo Contato</NavLink></li>
        </ul>
    )
}