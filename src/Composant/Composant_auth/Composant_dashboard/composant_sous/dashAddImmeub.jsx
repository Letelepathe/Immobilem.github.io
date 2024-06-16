import { createRef, useRef, useState } from "react";
import immeubCreate from "../../../../assets/fetchers/immeubController/ImmeubCreate";
import immeubController from "../../../../assets/fetchers/immeubController/immeubController";
import { Form, useNavigate } from "react-router-dom";
const dashAjoutImm=()=>{
    const [nom,setNom]=useState('');
    const [dim,setDim]=useState('');
    const [loc,setLoc]=useState('');
    const [dates,setDates]=useState('');
    const [proprio,setProprio]=useState('');
    const [prix,setPrix]=useState('');
    const [status,setStatus]=useState('');
    const [photo,setPhoto]=useState('');
    const [photo1,setPhoto1]=useState('');
    const [photo2,setPhoto2]=useState('');
    const [photo3,setPhoto3]=useState('');
    const [province,setProvince]=useState('');
    const [commune,setCom]=useState('');
    const [desc,setDesc]=useState('');
    const [isEmpty,setEmpty]=useState(false);
    const {data:dons,ispending11}= immeubController('http://localhost:3000/Blogs');
    let navigate=useNavigate();
    const Empty=()=>{
        setEmpty(true);
    }
    const mat=()=> {
        const alpha="ABCDEFGHIJOKLMOPQRSTUVWXYZ";
        const number="0123456789";
        let val="";
        for (let index = 0; index < alpha.length-18; index++) {
            val+= alpha[parseInt(Math.random()*alpha.length)];
        }
        for (let index = 0; index < number.length-6; index++) {
            val+=number[parseInt(Math.random()*number.length)];
        }
        console.log(val);
        return val;
    }
    const create=(e)=>{
        e.preventDefault();
     const data=  [
        
            mat(),
            nom,
            dim,
            dates,
            proprio,
            loc,
            province,
            commune,
            prix,
            status,
            desc,
            photo,
            photo1,
            photo2,
            photo3,
            ++dons.length
        ]
        console.log(data);
        let bool=false;
        for (let index = 1; index < data.length; index++) {
            if(data[index]==""){
                Empty();
            }else{
                bool=true;
            }
            // const element = array[index];
        }
        if(bool){
            immeubCreate('http://localhost:3000/Blogs',data)
            navigate('/Saves/');
        }
        
    }
    const uploadImg = (Event) => {
        Event.preventDefault();
        const formdata=new FormData()
        setPhoto(Event=>Event.target.files[0])
        formdata.append('/image',photo);
    }
    const prev = (e) => {
        const img=document.getElementById('Img');
        
        img.src=URL.createObjectURL(e.target.files[0]);
        new FormData().append('images',photo);
        // createRef('image',photo);
        setPhoto(e.target.value);
    }
    const prev1 = (e) => {
        const img=document.getElementById('Img1');
        setPhoto1(e.target.value);
        img.src=URL.createObjectURL(e.target.files[0]);
    }
    const prev2 = (e) => {
        const img=document.getElementById('Img2');
        setPhoto2(e.target.value);
        img.src=URL.createObjectURL(e.target.files[0]);
    }
    const prev3 = (e) => {
        const img=document.getElementById('Img3');
        setPhoto3(e.target.value);
        img.src=URL.createObjectURL(e.target.files[0]);
    }
     
    return(<>
        <div className="row">
            <div class="col-md-6 col-sm-12 col-xs-12" >
                <div class="post-media wow fadeIn">
                    <img id="Img" src="../images/imb_p02.jpg" alt={photo} class="img-fluid"/>
                </div>
                <div className="row mt-3">
                    <div className="col-md-4">
                        <img id="Img1" height={200} width={200} src='/images/imb_01.png' alt={photo1} />
                    </div>
                    <div className="col-md-4">
                        <img id="Img2" height={200} width={200} src=""  alt={photo2} />
                    </div>
                    <div className="col-md-4">
                        <img id="Img3" height={200} width={200} src="" alt={photo3} />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 m40">
                            <div class="message-box">
                                <h4>Ajoute +</h4>
                                <h2>crée un batiment</h2>
                                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, 
                                non aliquam risus. Sed a tellus quis mi honcus dignissim.</p>
                                {photo}
                    <div class="contact_form API">
                       <form id="contactform" onSubmit={create} name="contactform" onLoad={Empty} encTypetype="multipart/form-data">
                        {/* <p>nom : {nom}</p> */}
                            <fieldset class="row">
                              {/* <div className=" col-md-12 text-center alert-danger p-3 rounded mb-3">veuillez remplir tous les champs ou verifiez votre connexion !!!</div> */}
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="nom" id="first_name" value={nom} onChange={e=>setNom(e.target.value)} class="form-control" placeholder="tapez nom"/>
                                    {!nom && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="prenom"  id="last_name" value={dim} onChange={e=>setDim(e.target.value)}  class="form-control" placeholder="tapez dimension"/>
                                    {!dim && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="date" name="datec" value={dates} onChange={e=>setDates(e.target.value)}  id="email" class="form-control"/>
                                    {!dates && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="proprio" value={proprio} onChange={e=>setProprio(e.target.value)}  id="phone" class="form-control" placeholder="tapez nom proprietaire"/>
                                    {!proprio && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div>  
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="localis" value={loc} onChange={e=>setLoc(e.target.value)}   id="last_name" class="form-control" placeholder="tapez adresse"/>
                                    {!loc && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email"  id="email" class="form-control" placeholder="tapez Email"/>
                                    {/* {!mail && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>} */}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <select name="status" value={status} onChange={e=>setStatus(e.target.value)} className="form-control pb-5" id="status">
                                        <option >achat</option>
                                        
                                        <option >ventes</option>
                                        
                                        <option >location</option>
                                    </select>
                                    {!status && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div> 
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" id="prov" name="province" value={province} onChange={e=>setProvince(e.target.value)}   class="form-control" placeholder="tapez province"/>
                                    <datalist id="prov">
                                        <option value="kinshasa">Kinshasa</option>
                                        <option value="kinshasa">Kinshasa</option>
                                        <option value="kinshasa">Kinshasa</option>
                                        <option value="kinshasa">Kinshasa</option>
                                    </datalist>
                                    {!province && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="number" name="prix" defaultValue={100} value={prix} onChange={e=>setPrix(e.target.value)}  id="last_name" class="form-control" placeholder="tapez prix"/>
                                    {!prix && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="text" name="comme" value={commune} onChange={e=>setCom(e.target.value)}  id="last_name" class="form-control" placeholder="tapez prix"/>
                                    {!prix && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="email" name="email"  id="email" class="form-control" placeholder="tapez Email"/>
                                    {/* {!mail && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>} */}
                                </div>
                               <div className="col-12">
                               <label htmlFor="" className="text-secondary">plus d'image </label>
                               </div>
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="file" name="phone" accept="png,jpg,jpeg" value={photo} onChange={prev}   id="phone" class="form-control" placeholder="tapez telephone"/>
                                    {!photo && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div>   
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="file" name="phone1" accept="png,jpg,jpeg" value={photo1} onChange={prev1}  id="phone1" class="form-control" placeholder="tapez telephone"/>
                                    {!photo1 && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div> 
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="file" accept="png,jpg,jpeg" name="phone2" value={photo2} onChange={prev2}  id="phone2" class="form-control" placeholder="tapez telephone"/>
                                    {!photo2 && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div>  
                                <div class=" col-md-6 col-sm-6 col-xs-12">
                                    <input type="file" accept="png,jpg,jpeg" name="phone3" value={photo3} onChange={prev3}  id="phone3" class="form-control" placeholder="tapez telephone"/>
                                    {!photo3 && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name"> ce champ ne doit pas etre vide !!!</label>}
                                </div>  
                                <div class=" col-md-12 col-sm-12 col-xs-12">
                                    <textarea name="" id="" className="form-control" value={desc} onChange={e=>setDesc(e.target.value)} cols="30" rows="10" placeholder="description"></textarea>
                                   
                                    {!desc && isEmpty && <label htmlFor="nom" className="lbl text-danger lbl_name">ce champ ne doit pas etre vide !!!</label>}
                                </div>
                                {/* {
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
                                } */}
                                                     
                                <div class="text-center img-st">
                                    <button type="submit" value="SEND" id="submit" class="bttn-new-a">Get a Quote</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                                
                            </div>
                        </div> 
        </div>
    </>)
}
export default dashAjoutImm;

