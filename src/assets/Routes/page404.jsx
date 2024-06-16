import { Link } from "react-router-dom";

const page404 = () => {
    return ( <>
     <div id="about" class="section wb nopadtop">
                   <div class="container d-flex justify-content-center align-items-center">
                       <div class="row  ">
                       <div class="message-box text-center">
                                <h4 class="pl-5 pr-5">Erreur 404</h4>
                                <h2 class="pl-5 pr-5">PAGE NOT | Found</h2>
                        <Link to={'/'}>Retour à la page d'acceuil</Link> 
                        </div>
                       </div>
                   </div>
               </div>
    </> );
}
 
export default page404;