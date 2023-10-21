import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    //providing an empty object is handling, if fetch call returned null then looping on it won't crash
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((jsonRes) => setData(jsonRes[currency]))
        console.log(data);
    },[currency]);
    return data;
}

export default useCurrencyInfo;