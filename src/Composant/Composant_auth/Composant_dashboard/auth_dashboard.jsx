import LoadOrError from "../../../../LoadOrError";
import immeubController from "../../../assets/fetchers/immeubController/immeubController";
import  DashAddImmeub  from "./composant_sous/dashAddImmeub";
import DashImmListe  from "./composant_sous/dashImmListe";
import  DashTables  from "./composant_sous/dashTables";
const authDashboard = () => {
    const {data:don,ispending}=immeubController('http://localhost:3000/Blogs');
    return ( <>
        <div class="all-page-title" >
        <div class="page-info">
            <div class="container">
            	<div class="inner-container">
                    <ul class="bread-crumb">
                        <li><a href="../index.html">Home</a></li>
						<li><i class="fa fa-angle-double-right" aria-hidden="true"></i></li>
                        <li><span>Admin/Dashboard</span></li>
                    </ul>
                </div>
            </div>
        </div>
       
        <div class="container text-center">
            <h1>Dashboard</h1>
			<p>Mauris ornare tellus nec urna tincidunt, eget posuere velit tempus.</p>
        </div>
    </div>
    {/* Dashboard main */}
    <div id="pricing" class="section wb">
        <div class="container">
         
            <div id="about" class="section wb nopadtop">
                    <div class="container">
                        {/* {dashborard-tableau} */}
                        {ispending && <LoadOrError ispending={ispending}/>}
                  {don && <DashTables 
                  ventes={don.filter(dons=>dons.status=='ventes')}
                  location={don.filter(dons=>dons.status=='location')}
                  achat={don.filter(dons=>dons.status=='achat')}
                  ispending={ispending}/>}
                        {/* dashboard ajout immeuble */}
                  {don && <DashImmListe Table={don}/>} 
                      {don && <DashAddImmeub/>}
                            
                    </div>
                </div>
            </div>
            
        </div>
    </> );
}
 
export default authDashboard;