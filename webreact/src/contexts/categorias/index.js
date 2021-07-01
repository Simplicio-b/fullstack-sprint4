import React, { createContext, useState } from 'react';

export const CategoriaContext = createContext();

const INITAL_STATE = {
    all: [],
    current: []
}

export const CatgoriasProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(INITAL_STATE);

    return (
        <CategoriaContext.Provider value={{ categorias, setCategorias }} >
            {children}
        </CategoriaContext.Provider>
    )
}
