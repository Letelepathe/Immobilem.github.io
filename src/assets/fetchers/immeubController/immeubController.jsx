import { useEffect, useState } from "react"
import { Await } from "react-router-dom";
const immeubController=(urlData)=>{
    const [ispending,setIspending]=useState(true);
    const [data,setImmeub]=useState(null);
    useEffect(()=> {
    const abortCont = new AbortController();
        setTimeout(()=>{
        fetch(urlData,{signal:abortCont.signal})
        .then(res =>{
          if(!res.ok) 
          throw error('erruer survenue lors du mappage de donner');
        else
        {
          return res.json();
        }
        })
        .then(data =>{console.log(data); setImmeub(data); });
        setIspending(false)
      },3000);
        return ()=>abortCont.abort();
      },[urlData]);
  return {data,ispending}
}
export default immeubController;
