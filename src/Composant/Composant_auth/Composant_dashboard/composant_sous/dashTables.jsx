const dashTables = ({ventes,location,achat}) => {
    return ( <>
     <div class="row">
                        <div class="col-md-12 m40">
                            <div class="message-box">
                                <h4>Admin</h4>
                                <h2>Dashboard</h2>
                                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, 
                                non aliquam risus. Sed a tellus quis mi honcus dignissim.</p>
                                <div class="contact_form API">
                                    <form id="contactform" action="#" name="contactform" method="post">
                                       <div class="message-box">
                                        <fieldset class="row">
                                            
                                            <div class="col-12"><h4>All</h4></div>
                                            <div class=" col-md-4 col-sm-6 col-xs-12 mb-2 ">
                                                <div class="row bg-warning rounded p-5  ml-2">
                                                    <div class=" text-light">Immeuble ventes</div>
                                                    <div class="col-12 offset-8 text-light pt-3">{ventes.length}</div>
                                                </div>
                                            </div>
                                            <div class=" col-md-4 col-sm-6 col-xs-12  mb-2">
                                                <div class="row bg-danger rounded p-5  ml-2">
                                                    <div class=" text-light">Immeuble location</div>
                                                    <div class="col-12 offset-8 text-light pt-3">{location.length}</div>
                                                </div>
                                            </div>
                                            <div class=" col-md-4 col-sm-12 col-xs-12 mb-2 ">
                                                <div class="row bg-secondary rounded p-5  ml-2">
                                                    <div class="text-light">Immeuble achat</div>
                                                    <div class="col-12 offset-8 text-light pt-3">{achat.length}</div>
                                                </div>
                                            </div>
                                            <div class="col-12"><h4>Commune</h4></div>
                                            <div class=" col-md-4 col-sm-6 col-xs-12 mb-2 ">
                                                <div class="row bg-danger rounded p-5  ml-2">
                                                    <div class=" text-light">Immeuble location</div>
                                                    <div class="col-12 offset-8 text-light pt-3">1200</div>
                                                </div>
                                            </div>
                                            <div class=" col-md-4 col-sm-6 col-xs-12  mb-2 ">
                                                <div class="row bg-secondary rounded p-5 ml-2">
                                                    <div class="col-2"><i class="fa-fa-home"></i></div>
                                                    <div class="text-light">Immeuble ventes</div>
                                                    <div class="col-12 offset-8 text-light pt-3">1200</div>
                                                </div>
                                            </div>
                                            <div class=" col-md-4 col-sm-12 col-xs-12 mb-2  ">
                                                <div class="row bg-danger rounded p-5 ml-2">
                                                    <div class="col-2"><i class="fa-fa-home"></i></div>
                                                    <div class=" text-light">Immeuble location</div>
                                                    <div class="col-12 offset-8 text-light pt-3">1200</div>
                                                </div>
                                            </div>
                                            <div class="col-12"><h4>Province</h4></div> 
                                           <div class=" col-md-4 col-sm-6 col-xs-12  mb-2">
                                            <div class="row bg-danger rounded p-5 ml-2">
                                                <div class=" text-light">Immeuble location</div>
                                                <div class="col-12 offset-8 text-light pt-3">1200</div>
                                            </div>
                                        </div>
                                        <div class=" col-md-4 col-sm-6  col-xs-12 mb-2 ">
                                            <div class="row bg-secondary rounded p-5 ml-2">
                                                <div class="text-light">Immeuble ventes</div>
                                                <div class="col-12 offset-8 text-light pt-3">1200</div>
                                            </div>
                                        </div>
                                        <div class=" col-md-4 col-sm-12 col-xs-12 mb-2 mt-2 ">
                                            <div class="row bg-danger  rounded p-5 ml-2">
                                                <div class="col-2"><i class="fa-fa-home"></i></div>
                                                <div class=" text-light">Immeuble location</div>
                                                <div class="col-12 offset-8 text-light pt-3">1200</div>
                                            </div>
                                        </div>
                                        </fieldset>
                                       </div>
                                    </form>
                                </div>
                                
                            </div>
                        </div>                
                       
                        
                    </div>
    </> );
}
export default dashTables;