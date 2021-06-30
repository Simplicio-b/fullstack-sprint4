import React, { useContext } from 'react';
// styles
import "./styles.css";

// icons
import CloseIcon from '../../assets/close_white.svg'

import { MensagemContext } from '../../contexts/mensagem'

function Mensagem() {
    // type aceita duas prorpiedades success ou danger
    const contexto = useContext(MensagemContext)
    const { mensagem, setMensagem } = contexto

    setTimeout(() => setMensagem({ ...mensagem, show: false }) , 4000)

    return (
        <div className={`mensagem ${mensagem.type}`} style={{ display: mensagem.show ? "flex" : "none" }}>
            <p className="mensagem__text " >{mensagem.text}</p>
            <button className="mensagem__btn" 
                onClick={() => setMensagem({ ...mensagem, show: false })}
            >
                <img src={CloseIcon} alt="Fechar" />
            </button>
        </div>
    );
}

export default Mensagem;
