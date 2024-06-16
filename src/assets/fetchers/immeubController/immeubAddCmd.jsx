import { useEffect, useState } from "react";
const immeubAddCmd = (urlData) => {
    const [ispending,setIspending]=useState(true);
    const [datas,setCmd]=useState(null);
  
    useEffect(()=> {
        setTimeout(()=>{
        fetch(urlData)
        .then(res =>{ return res.json();})
        .then(datas =>{console.log(datas); setCmd(datas); });
        setIspending(false);},3000);
      },[urlData]);
  return {datas,ispending}
}
 
export default immeubAddCmd;