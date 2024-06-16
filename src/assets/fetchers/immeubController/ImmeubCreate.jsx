import { useEffect, useState } from "react";
const immeubCreate = (urlData,datas) => {
    const data=
        {
            
            "id": datas[15],
            "mat": datas[0],
            "nom": datas[1],
            "dimension": datas[2],
            "dateCons": datas[3],
            "proprietaire": datas[4],
            "localis": datas[5],
            "province": datas[6],
            "commune": datas[7],
            "prix": datas[8],
            "status": datas[9],
            "desc": datas[10],
            "photo": datas[11],
            "photo1": datas[12],
            "photo2": datas[13],
            "photo3": datas[14]
        }
        console.log(data);
            fetch(urlData,{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            }).then(()=>{console.log(data)}
            ).catch(error=>{
                throw error('une erreur est survenu '+Error.toString());
            })
   
}
 
export default immeubCreate;