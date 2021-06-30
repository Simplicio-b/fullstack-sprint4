import React from 'react';

export const LoadingContext = React.createContext();

const INITAL_STATE = {
    show: false
}

export const LoadContext = ({ children }) => {

    const [loading, setLoading] = React.useState(INITAL_STATE);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }} >
            {children}
        </LoadingContext.Provider>
    )
}
