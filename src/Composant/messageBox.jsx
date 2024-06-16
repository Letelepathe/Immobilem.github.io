import { Link } from "react-router-dom";
const messagebox = ({message}) => {
    return ( <>
        <div className="text-center">
            <h1>{message}</h1>
            <p>
                enregistrement reussi !!!
            </p>
            <Link to={'/filactu'}>Retour à fil actualité</Link>
        </div>
    </> );
}
 
export default messagebox;