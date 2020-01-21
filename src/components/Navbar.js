import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Produtos</NavLink>
            <NavLink to="/cart">Meu carrinho</NavLink>
        </nav>
    )
}

export default Navbar;