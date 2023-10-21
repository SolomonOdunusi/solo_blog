import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const killControl = new AbortController();
        setTimeout(() => {
        fetch(url, { signal: killControl.signal })
        .then((response) => {
            if (!response.ok)
                throw Error("The data couldn't be fetched from the database")
            return response.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null)
        })
        .catch(err => {
            if (err.name === 'AbortError')
            {
                console.log("Fetch Aborted!")
            }
            else
            {
                setIsLoading(false)
                setError(err.message)
            }
        })
        }, 1000);
        return () => killControl.abort()
    }, [url])
    return { data, isLoading, error};
    
}
 
export default useFetch;