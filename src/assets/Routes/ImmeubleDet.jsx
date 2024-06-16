import { useAsyncValue, useParams } from "react-router-dom";
import Immeub_det from "../../Composant/Composant_Immeub_Det/immeub_det";
import immeubController from "../fetchers/immeubController/immeubController";
import Immeub_head from "../../Composant/Composant_Immeub_Det/composant_sous/immeub_head";
const immeubDet = () => {
    const {data:don,ispending}=  immeubController('http://localhost:3000/Blogs');
    const {id}=useParams();
    // {don && val}
    return ( <>
    <Immeub_head/>
    {don && <Immeub_det imm={don.filter(dons=>dons.id==`${id}`)}/> }
    </> );
}
 
export default immeubDet;