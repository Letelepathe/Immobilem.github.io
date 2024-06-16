import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import register from "../../../assets/fetchers/register";
import registerController from "../../../assets/fetchers/registerController";

const authRegister = () => {
    const [Username,setUsername]=useState('');
    const [nomComplet,setNomCom]=useState('');
    const [mot2pass,setMot2pass]=useState('');
    const [ConfMp,setConfMp]=useState('');
    const [isEmpty,setEmpty]=useState(false);
    const [notEqual,setNotEqual]=useState(true);
    const [messageR,setMessageR]=useState('mot de passe ne correspond pas à la confirmation');
    const {data:don,ispending}=registerController('http://localhost:3000/Register');
    const navigate=useNavigate();
    const Empty=()=>{
        setEmpty(true);
    }
    const create=(e)=>{
    e.preventDefault();
    const datas=
        {
            "id":don.length++,
            "nomComplet":nomComplet,
            "Username":Username,
            "mot2pass":mot2pass,
            "role":"Users"
        }
        if(nomComplet==""||Username==""||mot2pass=="")
        {
            Empty();
        }else{
        if(ConfMp!=mot2pass){setNotEqual(false)}else{register('http://localhost:3000/Register',datas);navigate('/login/');}
        }
    }
    
    return ( <>
       <div id="pricing" class="section wb" >
           <div class="container">
               <div id="about" class="section wb nopadtop">
                   <div class="container">
                       <div class="row pl-5 pr-5">
                           <div class="col-md-12 pl-5 pr-5">
                               <div class="message-box">
                                   <h4 class="">Admin/Register</h4>
                                   <h2 class="">Register</h2>
                                   <p class="">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, 
                                   non aliquam risus. Sed a tellus quis mi honcus dignissim.</p>
                                   <div class="contact_form API">
                                   <form id="contactform" action="#" onSubmit={create} name="contactform" onLoad={Empty}>
                                <div class="row ">
                                    <div className="col-12">
                                   {!notEqual && <div class="alert-danger text-center p-3 mb-3">{messageR}</div>}
                                    </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12"> 
                                    <input type="text" name="nom" id="first_name" value={nomComplet} onChange={e=>setNomCom(e.target.value)} class="form-control" placeholder="tapez nomComplet"/>
                                    {!nomComplet && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="prenom"  id="last_name" value={Username} onChange={e=>setUsername(e.target.value)}  class="form-control" placeholder="tapez Username"/>
                                    {!Username && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="password" name="datec" value={mot2pass} onChange={e=>setMot2pass(e.target.value)}  id="email" class="form-control" placeholder="tapez mot de passe"/>
                                    {!mot2pass && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="password" name="proprio" value={ConfMp} onChange={e=>setConfMp(e.target.value)}  id="phone" class="form-control" placeholder="confirme mot de passe"/>
                                    {!ConfMp && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div>             
                                            <div class="w-100 img-st d-flex justify-content-center">
                                                <button type="submit" value="SEND" id="submit" class="bttn-new-a ">S'enregistrer</button>
                                            </div>
                                            <div className="mt-5">Vous avez deja un compte?<Link to={'/login/'}> se connecter</Link></div>
                                        </div>
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
 
export default authRegister;
