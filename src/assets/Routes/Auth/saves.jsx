
import { Link, useNavigate } from "react-router-dom";
const dash = () => {
    const nav=useNavigate();
    nav('/dashboard/');
}
 
const Saves = () => {
    dash();
    return ( <>
    <div className="all-page-title">
	
    <div class="page-info">
        <div class="container">
            <div class="inner-container">
                <ul class="bread-crumb">
                <h1>Enregistrement reussi</h1>
                <p>Mauris ornare tellus nec urna tincidunt, eget posuere velit tempus.</p>
                <Link to={'/dashboard/'}>Aller à dashboard</Link>
                </ul>
            </div>
        </div>
    </div>

    <div class="container text-center">
        
       
    </div>
    </div>
    </>   );
}
 
export default Saves;