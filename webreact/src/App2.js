import React from 'react'

import { useFetch } from './hooks/useFetch'

function App() {

    const [res, load, c] = useFetch("http://localhost:3000/data/products.json");
    const [categorias, loading, func] = useFetch("http://localhost:3000/data/categories.json");

    console.log(res)
    console.log(load)
    c()

    console.log(categorias)
    console.log(loading)
    func()

    return (
        <>
            <h1>Oi </h1>
        </>
    )
}

export default App;
