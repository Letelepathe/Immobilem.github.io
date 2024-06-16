import { Link, useNavigate } from "react-router-dom";

const navbar_nav = () => {
	const nav=useNavigate();
	const handleHome=()=>{
		nav('/');
	}
    return ( <>
	
	<li class="nav-item active"><a class="nav-link" href="/" onClick={handleHome}>Acceuil</a></li>
						<li class="nav-item"><a class="nav-link" href="#apropos">A Propos</a></li>
						<li class="nav-item"><Link class="nav-link" to={'/filactu'}>fil d'activité</Link></li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="dropdown-a" data-toggle="dropdown">connexion</a>
							<div class="dropdown-menu" aria-labelledby="dropdown-a">
								<Link class="dropdown-item" to={'/Login/'}>login</Link>
								<Link class="dropdown-item" to={'/inscription/'}>register</Link>
							</div>
						</li>
						{/* <li class="nav-item"><a class="nav-link" href="pricing.html">Actualité</a></li>
						<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li> */}
	</>
    
						
					
     );
}
 
export default navbar_nav;