import react ,{ useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import immeubCmd from "../../assets/fetchers/immeubController/immeubCmd";
import immeubAddCmd from "../../assets/fetchers/immeubController/immeubAddCmd";
const commande = ({imm}) => {
  const {datas:cmd,ispending}=immeubAddCmd('http://localhost:3000/CMD');
  const [nom,setNom]=useState('');
  const [prenom,setprenom]=useState('');
  const [mail,setmail]=useState('');
  const [phone,setPhone]=useState('');
  const [isEmpty,setIsempty]=useState(false);
  const {id}=useParams();
  const navigate=useNavigate();
const hiden=()=>{
  document.querySelector('.alert-danger').style.display='none';
}
  const Create=(e)=>{
    e.preventDefault();
  if(nom=="" || prenom=="" || phone=="" || mail=="")
  {
    setIsempty(true);
    // val.style.display="flex";
  }else{
    setIsempty(false);
    immeubCmd([nom,prenom,mail,phone,`${id}`,cmd.length++],'http://localhost:3000/CMD');
    navigate('/commandes/status');
  }
  
  }
    return ( <>
    <div className="all-page-title" >
	
    <div class="page-info">
        <div class="container">
            <div class="inner-container">
                <ul class="bread-crumb">
                    <li><Link to={"/filactu"}>Fil d'activité</Link></li>
                    <li><i class="fa fa-angle-double-right" aria-hidden="true"></i></li>
                    <li><span>Commande</span></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="container text-center" >
        <h1>Commande</h1>
        <p>Mauris ornare tellus nec urna tincidunt, eget posuere velit tempus.</p>
    </div>
    </div>
    <div id="pricing" class="section wb" onLoad={hiden}>
        <div class="container">
         
            <div id="about" class="section wb nopadtop">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 m40">
                            <div class="message-box">
                                <h4>Passez cmd</h4>
                                <h2>votre commmande</h2>
                                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, 
                                non aliquam risus. Sed a tellus quis mi honcus dignissim.</p>
                    <div class="contact_form API">
                       {<form id="contactform" onSubmit={Create} name="contactform">
                        {/* <p>nom : {nom}</p> */}
                            <fieldset class="row">
                              <div className=" col-md-12 text-center alert-danger p-3 rounded mb-3">veuillez remplir tous les champs ou verifiez votre connexion !!!</div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="nom" value={ nom } onChange={e=>{setNom(e.target.value);} } id="first_name" class="form-control" placeholder="tapez nom"/>
                                    {!nom && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="prenom" value={prenom} onChange={e=>setprenom(e.target.value)} id="last_name" class="form-control" placeholder="tapez nom"/>
                                    {!prenom && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email" value={mail} onChange={e=>setmail(e.target.value)} id="email" class="form-control" placeholder="tapez Email"/>
                                    {!mail && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="tel" name="phone" value={phone} onChange={e=>setPhone(e.target.value)} id="phone" class="form-control" placeholder="tapez telephone"/>
                                    {!phone && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div>      
                                {
                                  imm.map(donss=>{return(<>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="nom_imm" id="email" value={donss.nom} disabled class="form-control text-danger" placeholder="x"/>
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="local" id="phone" value={donss.localis} disabled class="form-control text-danger" placeholder="x"/>
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="prix" id="email" value={donss.prix} disabled class="form-control text-danger" placeholder="x"/>
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="status" id="phone" value={donss.status} disabled class="form-control text-danger" placeholder="x"/>
                                </div> 
                                    </>)
                                  })
                                }
                                                     
                                <div class="text-center img-st">
                                    <button type="submit" value="SEND" id="submit" class="bttn-new-a">Get a Quote</button>
                                </div>
                            </fieldset>
                        </form>}
                    </div>
                                
                            </div>
                        </div>           
                        <div class="col-md-6">
                            <div class="post-media wow fadeIn">
                                <img src="/images/imb_lg04.jpg" alt="" class="img-fluid"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            {/* <div class="row">
                <div class="col-md-12">
                    <div class="pricing pricing-palden">
						<div class="pricing-item">
						  <div class="pricing-deco">
							<svg class="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
							  <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
							  <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
							  <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
							  <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
							</svg>
							<div class="pricing-price"><span class="pricing-currency">$</span>32
							  <span class="pricing-period">/ mo</span>
							</div>
							<h3 class="pricing-title">Freelance</h3>
						  </div>
						  <ul class="pricing-feature-list">
							<li class="pricing-feature">1 GB of space</li>
							<li class="pricing-feature">Support at $25/hour</li>
							<li class="pricing-feature">Limited cloud access</li>
						  </ul>
						  <button class="bttn-new-a">Choose plan</button>
						</div>
						<div class="pricing-item pricing__item--featured">
						  <div class="pricing-deco">
							<svg class="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
							  <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
							  <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
							  <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
							  <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
							</svg>
							<div class="pricing-price"><span class="pricing-currency">$</span>45
							  <span class="pricing-period">/ mo</span>
							</div>
							<h3 class="pricing-title">Business</h3>
						  </div>
						  <ul class="pricing-feature-list">
							<li class="pricing-feature">5 GB of space</li>
							<li class="pricing-feature">Support at $5/hour</li>
							<li class="pricing-feature">Full cloud access</li>
						  </ul>
						  <button class="bttn-new-a">Choose plan</button>
						</div>
						<div class="pricing-item">
						  <div class="pricing-deco">
							<svg class="pricing-deco-img" enable-background="new 0 0 300 100" height="100px" id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="0 0 300 100" width="300px" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" y="0px">
							  <path class="deco-layer deco-layer--1" d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729&#x000A;	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z" fill="#FFFFFF" opacity="0.6"></path>
							  <path class="deco-layer deco-layer--2" d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729&#x000A;	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z" fill="#FFFFFF" opacity="0.6"></path>
							  <path class="deco-layer deco-layer--3" d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716&#x000A;	H42.401L43.415,98.342z" fill="#FFFFFF" opacity="0.7"></path>
							  <path class="deco-layer deco-layer--4" d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428&#x000A;	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z" fill="#FFFFFF"></path>
							</svg>
							<div class="pricing-price"><span class="pricing-currency">$</span>80
							  <span class="pricing-period">/ mo</span>
							</div>
							<h3 class="pricing-title">Enterprise</h3>
						  </div>
						  <ul class="pricing-feature-list">
							<li class="pricing-feature">10 GB of space</li>
							<li class="pricing-feature">Support at $5/hour</li>
							<li class="pricing-feature">Full cloud access</li>
						  </ul>
						  <button class="bttn-new-a">Choose plan</button>
						</div>
					</div>
                </div> 
            </div>  */}
        </div>
    </div>
    </> );
}
 
export default commande;