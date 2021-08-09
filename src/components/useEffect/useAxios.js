import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (opts, axiosInstance=defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    });
    const [trigger, setTrigger] = useState(0);
    const reFetch = () => {
        setState({
            ...state,
            loading: true
        })
        setTrigger(Date.now());
    };

    useEffect(() => {
        axiosInstance(opts).then(data => {
            setState({...state, loading: false, data});
        }).catch(error => {
            setState({...state, loading: false, error})
        })
    }, [trigger]);

    if (!opts.url) {
        return;
    }

    return { ...state, reFetch } ;
}

function Axios() {
    const {loading, data, error, reFetch} = useAxios(
        {url: "https://yts.mx/api/v2/list_movies.json"}
    )
    console.log(
        `Loading: ${loading}\nData: ${JSON.stringify(data)}\nError: ${error}`
    );

    return (
        <>
            <h1>{loading && "Loading"}</h1>
            <h1>{data && data.status}</h1>
            <button onClick={reFetch}>Refetch</button>
        </>
    );
}

export default Axios;