import { useParams } from "react-router-dom";
import Commande from "../../Composant/Composant_cmd/Commande";
import immeubController from "../../assets/fetchers/immeubController/immeubController";
import LoadOrError from "../../../LoadOrError";
const commandes = () => {
    const {id}=useParams();
    const {data:don,ispending}=immeubController('http://localhost:3000/Blogs');
    return ( <>
    {ispending  && <LoadOrError ispending={ispending}/>}
    {don && <Commande imm={don.filter(dons=>dons.id==id)}/>}
    </> );
}
 
export default commandes;