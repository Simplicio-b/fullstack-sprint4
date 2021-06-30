import React from 'react';

export const MensagemContext = React.createContext();

const INITAL_STATE = {
    show: true,
    text: "Ocorreu um erro ao carregar alguns dados",
    type: "danger"
}

export const MsgContext = ({ children }) => {

    const [mensagem, setMensagem] = React.useState(INITAL_STATE);

    return (
        <MensagemContext.Provider value={{ mensagem, setMensagem }} >
            {children}
        </MensagemContext.Provider>
    )
}
