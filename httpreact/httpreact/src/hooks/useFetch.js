import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url);

            const json = await res.json();

            setData(json);
        };

        fetchData();
    }, [url, callFetch])

    useEffect(() => {
        if (method === "POST") {
            let fetchOptions = [url, config];

            const res = await fetch(...fetchOptions);
            const json = await res.json();

            setCallFetch(json)
        }
    }, [third])






    return { data };
}