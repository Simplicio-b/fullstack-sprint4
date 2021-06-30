import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const c = () => console.log("Cuzcuz")

    useEffect(() => {
        setLoading(true)
        const fetchData = async() => {
            try {
                const res = await fetch(url)
                const jsonResult = await res.json()
                setResult(jsonResult)
                setLoading(false)
            }catch(e) {
                console.log(e)
                setLoading(false)
            }
        } 
        fetchData()
    }, [url])

    return [result, loading, c]
}
