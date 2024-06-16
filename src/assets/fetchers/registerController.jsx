import { useEffect, useState } from "react";
const registerController = (urlData) => {
    const [ispending,setIspending]=useState(true);
    const [data,setData]=useState(null);
    useEffect(() => {
        fetch(urlData)
        .then(res=>{return res.json()})
        .then(data=>{console.log(data); setData(data);})
        setIspending(false)
    }, [urlData]);
    return {data,ispending}
}
export default registerController;