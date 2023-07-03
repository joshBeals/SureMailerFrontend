import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = ({ method, url, token }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);
    const [serverError, setServerError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const resp = await axios({
                url: `http://localhost:5000/${url}`,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` 
                },
                data: apiData,
            });
            const data = await resp?.data;

            setApiData(data);
            setIsLoading(false);
            console.log('yes');
        } catch (error) {
            setServerError(error);
            setIsLoading(false);
            console.log('no');
        }
    };

    const callApi = (data) => {
        setApiData(data);
        fetchData();
    }


    return { isLoading, apiData, serverError, callApi };
};

export default useFetch;
