import { useNavigate } from "react-router-dom";
const immeubCmd = (data,links) => {
   const datas=
        {
            
            "id":data[5],
            "nom":data[0],
            "prenom":data[1],
            "email":data[2],
            "tel":data[3],
            "id_immeu":data[4]
        }
    
    return (
        fetch(links,{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(datas)
        }).then(res=>{
            return res.status
        })
        .catch(console.error(Error.toString()))
    );
    
}
export default immeubCmd;