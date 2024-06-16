import Apropos from "./composant_sous/apropos";
import Slider from "./composant_sous/slider";
import Mission from "./composant_sous/mission";
import Temoin from "./composant_sous/temoin";
import Services from "./composant_sous/services";
import Immeub from "./composant_sous/immeub";
import Stats from "./composant_sous/stats";
import Sponsor from "./composant_sous/sponsor";
import { Link } from "react-router-dom";
const acceuil = () => {
    return ( <>
    <Slider/>
    <Services/>
    <Mission/>
    <Immeub/>
    <Stats/>
    <Sponsor/>
    <Temoin/>
    <Apropos/>
    </> );  
}
 
export default acceuil;