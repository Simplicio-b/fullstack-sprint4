import React, { useContext } from 'react';

// contextos
import { CategoriaContext } from '../../contexts/categorias';

// components
import MenuItem from '../MenuItem';

function Menu() {
    const contextCategoria = useContext(CategoriaContext);
    const { categorias } = contextCategoria;
 
    return (
        <nav className="header__menu menu">
            <ul className="menu__list">
              {categorias.all.map(el => <MenuItem key={el.id} label={el.label} link={el.link} />)}
            </ul>
        </nav>
    );
} 

export default Menu;
