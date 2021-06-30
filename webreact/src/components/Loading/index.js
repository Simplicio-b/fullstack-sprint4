import React, { useContext } from 'react';

// contextos 
import { LoadingContext } from '../../contexts/loading'

// styles
import "./styles.css";

function Loading() {
    const contextLoading = useContext(LoadingContext)
    const { loading } = contextLoading

    return (
        <div className={`loading ${loading.show ? "" : "loading--hide"}`}>
            <h1>Loading ...</h1>
        </div>
    )
}

export default Loading
