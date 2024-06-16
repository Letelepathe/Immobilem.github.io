import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadOrError from "../../../LoadOrError";

const immeub_det = ({imm}) => {
    const [ispending,setIspending]=useState(true);
    const [bags,setBags]=useState(0);
 console.log(imm)
    const bagCount=()=>{
        bags<=0?setBags(bags+1):bags;
    }
    useEffect(() => {
        setTimeout(() => {
            setIspending(false);
        }, 3000);
    }, []);
    
    return ( <>
    {ispending && <LoadOrError ispending={ispending}/>}
   {!ispending && <div id="case-study-box" class="section wb">
        <div class="container">
            <div id="about" class="section wb nopadtop">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 m40">
                            <div class="message-box">
                                <h4>Ventes</h4>
                                {
                                    imm.map((imb)=>{return(<>
                                        <h2>{imb.nom}</h2>
                                    </>)})
                                }
                                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, 
                                non aliquam risus. Sed a tellus quis mi honcus dignissim.</p>
                                

                           {<div class="row">
                            {
                                imm.map((imb)=>{return(
                                        <>
                                         <div class="col-4"><i class="fa fa-circle pr-2"></i>Dimennson</div>
                                    <div class="col-8">{imb.dimension}</div>
                                    <div class="col-4"><i class="fa fa-calendar pr-2"></i>Date construction</div>
                                    <div class="col-8" id="bags"> {imb.dateCons}</div>
                                    <div class="col-4"><i class="fa fa-user pr-2"></i>Proprietaire</div>
                                    <div class="col-8">{imb.proprietaire}</div>
                                    <div class="col-4"><i class="fa fa-circle pr-2"></i>Mat Document </div>
                                    <div class="col-8">{imb.mat}</div>
                                    <div class="col-4"><i class="fa fa-map pr-2"></i>Localisation</div>
                                    <div class="col-8">{imb.localis}</div>
                                    <div class="col-4"><i class="fa fa-circle pr-2"></i>Prix</div>
                                    <div class="col-8">{imb.prix}</div>
                                    {/* <div class="col-4"><a onClick={bagCount}  href="#bags" class="btn btn-secondary pr-5 text-center"> <i class="fa fa-circle pr-5" ></i> Panier {bags}</a></div> */}
                                    <div class="col-8"><Link to={`/commande/${imb.id}`} class="btn btn-primary  pr-5"><i class="fa fa-circle pr-5"></i> Passez cmd</Link></div>
                                        </>
                                )})
                            }
                                   
                                </div>}
                            </div>
                        </div>             
                       {<div class="col-md-6">
                            { <div class="post-media wow fadeIn">
                            {
                                    imm.map((imb)=>{return(<>
                                        <img src={"/"+imb.photo} alt="" class="img-fluid"/>
                                       {console.log(imb)}
                                    </>)})
                                }
                            </div> }
                        </div>}
                        
                    </div>
                </div>
            </div>
                <div><h1>Prise d'images</h1></div>
            <div className="row">
            <div id="da-thumbs" class="da-thumbs portfolio row">
            {
                imm.map((imb)=>{return(<>  
                <div class="post-media pitem item-w1 item-h1 cat1 col-6">
                <a href={"/"+imb.photo1} data-rel="prettyPhoto[gal]">
                    <img src={"/"+imb.photo1} alt="" class="img-responsive"/>
                    <div>
                        <h3>Etage 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</p>
                        <i class="flaticon-unlink"></i>
                    </div>
                </a>
                </div>
                <div class="post-media pitem item-w1 item-h1 cat1 col-6">
                <a href={"/"+imb.photo2} data-rel="prettyPhoto[gal]">
                    <img src={"/"+imb.photo2} alt="" class="img-responsive"/>
                    <div>
                        <h3>Etage 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</p>
                        <i class="flaticon-unlink"></i>
                    </div>
                </a>
                </div>
                <div class="post-media pitem item-w1 item-h1 cat1 col-6">
                <a href={"/"+imb.photo3} data-rel="prettyPhoto[gal]">
                    <img src={"/"+imb.photo3} alt="" class="img-responsive"/>
                    <div>
                        <h3>Etage 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta in magna egestas ornare. Fusce tortor nibh, interdum eget consequat molestie, blandit vitae sapien.</p>
                        <i class="flaticon-unlink"></i>
                    </div>
                </a>
                </div>
                </>)})
            }
              
            </div>
            </div>
          </div>
        </div>}
    
    </> );
}
 
export default immeub_det;