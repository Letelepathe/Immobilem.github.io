import { useParams } from "react-router-dom";
import immeubSup from "../../fetchers/immeubController/immeubSup";
const immeubSupp = () => {
    const {id}=useParams();
    return ( 
        immeubSup('http://localhost:3000/Blogs/'+id)
    );
}
 
export default immeubSupp;