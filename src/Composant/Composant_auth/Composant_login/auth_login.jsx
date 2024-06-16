import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registerController from "../../../assets/fetchers/registerController";
const authLogin = () => {
    const [username,setUsername]=useState('');
    const [mot2pass,setMot2pass]=useState('');
    const {data:don,ispending}=registerController('http://localhost:3000/Register');
    const [empty,setEmpty]=useState(false);
    const [notEqual,setNotEqual]=useState(true);
    const [messageR,setMessageR]=useState('');
    const nav=useNavigate();
    const Empty=()=>{
        setEmpty(true);
        console.log(empty);
    }
    const login=(e)=>{
        e.preventDefault();
        console.log(empty);
        if(username!="" || mot2pass!="")
            {
                const logo=don.filter(dons=>dons.Username==username)
                const logo1=don.filter(dons=>dons.mot2pass==mot2pass)
                console.log(logo,logo1);
                if((logo.length!=0) && (logo1.length!=0))
                    {
                        nav('/dashboard/');
                    }else{
                        setNotEqual(false);
                        setMessageR('mot de passe ou nom d\'utilisateur incorrect !!!');
                    }
            }else{Empty();}
    }
    return ( <>
            <div id="pricing" className="section wb">
           <div className="container">
               <div id="about" className="section wb nopadtop">
                   <div className="container" onLoad={Empty}>
                       <div className="row pl-2 pr-2">
                           <div className="col-md-12 pl-2 pr-2">
                               <div className="message-box">
                                   <h4 className="pl-5 pr-5">Admin/login</h4>
                                   <h2 className="pl-5 pr-5">connexion</h2>
                                   <p className="pl-5 pr-5">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, 
                                   non aliquam risus. Sed a tellus quis mi honcus dignissim.</p>
                       <div className="contact_form API">
                           <form id="contactform"  name="contactform" onSubmit={login} >
                               <fieldset className="row ">
                               <div className="col-12">
                                   {!notEqual && <div className="alert-danger text-center p-3 mb-3">{messageR}</div>}
                                </div>
                                   <div className=" col-md-12 col-sm-12 col-xs-6 pl-5 pr-5">
                                       <input type="text" name="first_name" id="first_name" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" placeholder="tapez nom"    />
                                       {!username && empty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                   </div>
                                   <div className=" col-md-12 col-sm-12 col-xs-6 pl-5 pr-5">
                                       <input type="password" name="last_name" id="last_name" value={mot2pass} onChange={e=>setMot2pass(e.target.value)} className="form-control" placeholder="tapez nom"/>
                                       {!mot2pass && empty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                   </div>
                                     <div className=" col-6 pl-5 pr-5">
                                        <label htmlFor="checkForm" className="pr-2">Remember me </label>
                                       <input type="checkbox"  id="checkForm" placeholder="tapez nom"/>
                                   </div>
                                   <div className=" col-6 pl-5 pr-5 offset-0">
                                       Pas  de compte? <Link to={'/inscription/'} > s'inscrire</Link>
                                   </div>
                                   <div className="w-100 img-st d-flex justify-content-center">
                                       <button type="submit" id="submit" className="bttn-new-a">Get a Quote</button>
                                   </div>
                                   <div className="mt-3"><Link to={'/mpO/'} > Mot de passe oublié?</Link></div>
                               </fieldset>
                           </form>
                       </div>
                                   
                               </div>
                           </div>                       
                        
                           
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </> );
}
 
export default authLogin;