import React from 'react';

export const CategoriaContext = React.createContext();

const INITAL_STATE = {
    all: [],
    current: []
}

export const CatgoriasContext = ({ children }) => {

    const [categorias, setCategorias] = React.useState(INITAL_STATE);

    return (
        <CategoriaContext.Provider value={{ categorias, setCategorias }} >
            {children}
        </CategoriaContext.Provider>
    )
}
