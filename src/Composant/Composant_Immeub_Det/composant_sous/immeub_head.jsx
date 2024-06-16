import { Link, useNavigate, useParams } from "react-router-dom";

const immeub_head = () => {
    const {id}=useParams();
    const nav=useNavigate();
    const handleHome=()=>{
        Navigate('/');
    }
    return ( <>
    <div className="all-page-title">
	
    <div class="page-info">
        <div class="container">
            <div class="inner-container">
                <ul class="bread-crumb">
                    <li><a href="#" onClick={handleHome}>Acceuil</a></li>
                    <li><i class="fa fa-angle-double-right" aria-hidden="true"></i></li>
                    <li><span>Fil d'activité</span></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="container text-center">
        <h1>Fil d'activité</h1>
        <p>Mauris ornare tellus nec urna tincidunt, eget posuere velit tempus.</p>
    </div>
    </div>
    </> );
}
 
export default immeub_head;