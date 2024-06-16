import { useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

const immeubSup = (urlData) => {
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(urlData,{
            method:'DELETE'
        }).then( navigate('/dashboard/')).catch(console.error(Error.toString()))
    },[])
}
 
export default immeubSup;