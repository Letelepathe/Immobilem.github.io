import Navbar_nav from "../navbar_nav";
import {Link, Navigate, useNavigate} from 'react-router-dom'

const header = () => {
	const nav=useNavigate();
	const handleHome=()=>{
		nav('/');
	}
    return ( <>
    
  <header class="top-navbar">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container">
				<a class="navbar-brand" href="#" onClick={handleHome}>
					ImmoBIlem
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-seo" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				  <span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse " id="navbars-seo">
                <ul class="navbar-nav ml-auto">
					<Navbar_nav/>
				</ul>
				</div>
			</div>
		</nav>
	</header>
    </> );
}
 
export default header;