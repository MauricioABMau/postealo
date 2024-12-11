import { useEffect, useState } from "react";

export const useFetch = (fetchFunction, args = []) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchFunction();
            setData(result)
        }
        fetchData()
    }, [fetchFunction, ...args])
    return {data}
}