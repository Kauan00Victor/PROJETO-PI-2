import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'
import './Header.css'

export function Header() {

  return (
    <section className="Header">
      <form>
        <NavLink to="/"><img className='logo' src={logo} alt='logo' /></NavLink>
      </form>
    </section>
  )
}

export default Header;