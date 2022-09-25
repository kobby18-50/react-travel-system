import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [tours, setTours] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout( () => {
            fetch(url, { signal:abortCont.signal })
        .then(res => {
            if(!res.ok){
               throw Error('The required resource does not exist')
            }
            return res.json();
        })
        .then(data => {
            setTours(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else{
                setIsLoading(false);
                setError(err.message)
            }
        })
        },1000);

        return () => abortCont.abort();
    }, [url]);

    return {tours, isLoading, error}
} 

export default useFetch;