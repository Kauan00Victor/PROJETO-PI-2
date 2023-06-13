import React, { useState } from 'react';
import logo from '../img/logotec.png'
import './Header.css'

export function Header() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para lidar com a pesquisa do termo digitado
        console.log('Pesquisando por:', searchTerm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <img className='logo' src={logo} alt='logo' />
            <input type="text" placeholder="Digite sua pesquisa..." value={searchTerm} onChange={handleSearch} />
            <button type="submit">Pesquisar</button>
        </form>
    )
}

export default Header;