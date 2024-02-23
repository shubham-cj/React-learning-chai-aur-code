import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;