import React, { useState } from 'react';
// styles
import "./styles.css";

// icons
import CloseIcon from '../../assets/close_white.svg'


function Mensagem(props) {
    // type aceita duas prorpiedades success ou danger
    const { type } = props;

    const [show, setShow] = useState(true);

    return (
        <div className={`mensagem ${type}`} style={{ display: show ? "flex" : "none" }}>
            <p className="mensagem__text " >Ocorreu um erro ao carregar os produtos</p>
            <button className="mensagem__btn" 
                onClick={() => setShow(false)}
            >
                <img src={CloseIcon} alt="Fechar" />
            </button>
        </div>
    );
}

export default Mensagem;
