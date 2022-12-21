import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const ourRequest = axios.CancelToken.source() // <-- 1st step

        async function fetchDataApi() {
            try {
                let res = await axios.get(url);
                setData(res && res.data ? res.data : []);
                setIsLoading(false);
                setIsError(false);
            } catch (error) {
                setData([]);
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchDataApi();

    }, [])

    return {
        data, isLoading, isError
    }
}

export default useFetch;