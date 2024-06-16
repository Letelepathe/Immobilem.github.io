import { useState ,useEffect} from "react";
import { Link, NavLink, useParams } from "react-router-dom";
// import index from "../../assets/fetchers/immeubController/immeubController"
import immeubController from "../../assets/fetchers/immeubController/immeubController";
import LoadOrError from "../../../LoadOrError";
const immeubles = () => {
    // const [ispending,Setispending]=useState(true);
    const { id }=useParams();
    const [isdisplay,Setisdisplay]=useState(true);
    const {data:don,ispending}= immeubController('http://localhost:3000/Blogs');
    const {data:dons,ispending11}= immeubController('http://localhost:3000/Blogs');
    // const imm=;
    const [donStat,setDonStat]=useState('');
    const [donAchat,setAchat]=useState('');
    const [deroulante,setDeroulante]=useState(false);
    const [deroulant,setDeroulant]=useState('lire moins');
    useEffect(() => {
        setTimeout(() => {
            setDonStat(don.filter(donss=>donss.status=="ventes"));
            setAchat(don.filter(donss=>donss.status=="achat"));
            Setisdisplay(false);
        }, 1000);
});
const roulem = () => {
    setDeroulante(true);
}
let val=false;
const heightResponsive=(e)=>{
    e.preventDefault();
    const immb=document.querySelector('.immb');
    console.log(immb);
    if(window.innerWidth>=300 && window.innerWidth<=576){
        immb.classList.remove('deroulant');
        immb.classList.add('deroulant1');
    }
}
    const deroule = (e) => {
        e.preventDefault();
        const immb=document.querySelector('.immb');
        console.log(window.innerWidth)
        if(val==false)
            {
                immb.classList.add('deroulant');
                setDeroulant('lire plus')
                console.log(deroulant);
                val=true
                console.log(immb);
            }else {
                immb.classList.remove('deroulant');
                setDeroulant('lire moins')
                console.log(deroulant);
                console.log(immb);
            }
    }

   

   const handleClickAll=()=>{
        document.getElementById('achat').style.display='none';
        document.getElementById('loc').style.display='none';
        document.getElementById('vent').style.display='none';
        document.getElementById('all').style.display='flex';
        document.getElementById('al').classList.add('text-danger');
        
        document.getElementById('loco').classList.remove('text-danger');
        
        document.getElementById('acha').classList.remove('text-danger');
        
        document.getElementById('vt').classList.remove('text-danger');
        console.log(setDonStat(dons.filter(donss=>donss.status!=="ventes")));
    }
    const handleClickAcha=()=>{
        document.getElementById('achat').style.display='flex';
        document.getElementById('loc').style.display='none';
        document.getElementById('vent').style.display='none';
        document.getElementById('all').style.display='none';
        document.getElementById('al').classList.remove('text-danger');
        
        document.getElementById('loco').classList.remove('text-danger');
        
        document.getElementById('acha').classList.add('text-danger');
        
        document.getElementById('vt').classList.remove('text-danger');
    }
    const handleClickVt=()=>{
        document.getElementById('achat').style.display='none';
        document.getElementById('loc').style.display='none';
        document.getElementById('vent').style.display='flex';
        document.getElementById('all').style.display='none';
        document.getElementById('al').classList.remove('text-danger');
        
        document.getElementById('loco').classList.remove('text-danger');
        
        document.getElementById('acha').classList.remove('text-danger');
        
        document.getElementById('vt').classList.add('text-danger');
    }
    const handleClickLoc=()=>{
        document.getElementById('achat').style.display='none';
        document.getElementById('loc').style.display='flex';
        document.getElementById('vent').style.display='none';
        document.getElementById('all').style.display='none';
        document.getElementById('al').classList.remove('text-danger');
        
        document.getElementById('loco').classList.add('text-danger');
        
        document.getElementById('acha').classList.remove('text-danger');
        
        document.getElementById('vt').classList.remove('text-danger');
    }
   
    return ( <>
       <div className="all-page-title" style={{ backgroundImage:"/images/pattern-4.png" }} onLoad={heightResponsive} onResize={heightResponsive}>
	
        <div class="page-info">
            <div class="container">
            	<div class="inner-container">
                    <ul class="bread-crumb">
                        <li><Link to={"/"}>Acceuil</Link></li>
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
      
    <div id="about" class="section wb nopadtop ">
        {
            
             <div class="container immb" onLoad={handleClickAll}>
             <div class="row">
                 <div class="col-12 mb-2 link-tab">
                     <ul class="link-tabCont">
                         <li id="al" onClick={handleClickAll} class="nav-link d-inline-block"> <i class="fa fa-list" ></i> all</li>
                         <li id="acha" onClick={handleClickAcha} class="nav-link d-inline-block">achat</li>
                         <li id="loco" onClick={handleClickLoc} class="nav-link d-inline-block">  location</li>
                         <li id="vt" onClick={handleClickVt} class="nav-link d-inline-block">ventes</li>
                     </ul>
                 </div>
             </div>
             {ispending && <LoadOrError ispending={ispending} />}
            {!ispending && <div class="row" id="all">
                 {don && don.map(dons=>{return(<div class="col-md-3  mb-5 ">
                     <div class="message-box">
                         <h4 class="text-dark">{dons.nom}</h4>
                         <div class="post-media wow fadeIn">
                             <img src={dons.photo} alt="" class="img-fluid"/>
                         </div>
                         <p class="text-justify">{dons.desc}</p>
                         <h4>{dons.status}</h4>
                         <span>{dons.prix}</span><br/>
                         <span><Link class="text-primary" to={`/immeub/${dons.id}`}>Details</Link></span>
                         
                     </div>
                 </div>)
             })
             }
              {/* <div class="col-md-12 text-center"><button onClick={deroule} class="text-center text-light btn btn-secondary mt-5 rounded px-3 py-2" >{deroulant}</button></div> */}
             </div>} 
            {!isdisplay && <div class="row" id="achat">
                 {donAchat && donAchat.map(dons=>{return(<div class="col-md-3 m40 mb-5">
                     <div class="message-box">
                         <h4 class="text-dark">{dons.nom}</h4>
                         <div class="post-media wow fadeIn">
                             <img src={dons.photo} alt="" class="img-fluid"/>
                         </div>
                         <p class="text-justify">{dons.desc}</p>
                         <h4>{dons.status}</h4>
                         <span>{dons.prix}</span><br/>
                         <span><Link class="text-primary" to={`/immeub/${dons.id}`}>Details</Link></span>
                         
                     </div>
                 </div>)})}
                 {/* <div class="col-md-12 text-center"><button onClick={deroule} class="text-center text-light btn btn-secondary rounded px-3 py-2" >{deroulant}</button></div> */}
             </div>}
             {!isdisplay && <div class="row" id="loc">
             <div class="col-md-12 text-center"><button onClick={deroule} class="text-center text-light btn btn-secondary rounded px-3 py-2" >{deroulant}</button></div>
             </div>}
            {!isdisplay && <div class="row" id="vent">
            {donStat && donStat.map(dons=>{return(<div class="col-md-3 m40 mb-5">
                     <div class="message-box">
                         <h4 class="text-dark">{dons.nom}</h4>
                         <div class="post-media wow fadeIn">
                             <img src={dons.photo} alt="" class="img-fluid"/>
                         </div>
                         <p class="text-justify">{dons.desc}</p>
                         <h4>{dons.status}</h4>
                         <span>{dons.prix}</span><br/>
                         <span><Link class="text-primary" to={`/immeub/${dons.id}`}>Details</Link></span>
                         
                     </div>
                 </div>)})}
                 {/* <div class="col-md-12 text-center"><button onClick={deroule} class="text-center text-light btn btn-secondary rounded px-3 py-2" >{deroulant}</button></div> */}
             </div>}
     
             
            </div> 
            
        }
        
        
    </div>
    {!isdisplay && <div class="col-md-12 text-center "><button onClick={deroule} class="text-center text-light btn btn-secondary mt-5  px-5 py-2" >{deroulant}</button></div>}
             <hr class="hr1"/>
    </> );
}
 
export default immeubles;