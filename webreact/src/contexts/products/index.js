import React from 'react';

export const ProductsContext = React.createContext();

const INITAL_STATE = {
    products_imutable: [],
    products: [],
    filters: []
}

export const ProductContext = ({ children }) => {

    const [products, setProducts] = React.useState(INITAL_STATE);

    return (
        <ProductsContext.Provider value={{ products, setProducts }} >
            {children}
        </ProductsContext.Provider>
    )
}
