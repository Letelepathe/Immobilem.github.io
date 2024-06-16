import { useNavigate } from "react-router-dom";

const register = (urlData,datas) => {
    const nav=useNavigate();
    useEffect(() => {
        fetch(urlData,{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(datas)
        })
        return () => {
            nav('/login/');
        };
    }, []);
          
}
 
export default register;