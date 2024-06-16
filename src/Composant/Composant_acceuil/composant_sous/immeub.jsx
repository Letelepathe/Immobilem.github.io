import { Link } from "react-router-dom";
const immeub = () => {
    return ( <>
       <div id="about" class="section wb nopadtop">
        <div class="container">
            <div class="row">
                <div class="col-md-6 m40 mb-5">
                    <div class="message-box">
                        <h3>Immeuble Maman Ngebi</h3>
                        <div class="post-media wow fadeIn">
                            <img src="/images/imb_p01.jpg" alt="" class="img-fluid"/>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, laboriosam dolores. Nemo velit similique laudantium dolore esse animi perspiciatis unde nobis, illo provident quaerat sunt, vitae amet culpa eligendi necessitatibus..</p>
                        <h4>Location</h4>
                        <span>1200£/mois</span><br/>
                        <span><Link class="text-primary" to={`/immeub/${1}`}>Details</Link></span>
                        
                    </div>
                </div>
                <div class="col-md-6 m40 mb-5">
                    <div class="message-box">
                        <h3>Immeuble Jean Correscom</h3>
                        <div class="post-media wow fadeIn">
                            <img src="/images/imb_p02.jpg" alt="" class="img-fluid"/>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, laboriosam dolores. Nemo velit similique laudantium dolore esse animi perspiciatis unde nobis, illo provident quaerat sunt, vitae amet culpa eligendi necessitatibus..</p>
                        <h4>Ventes</h4>
                        <span>5.200.000£</span><br/>
                        <span><Link class="text-primary" to={`/immeub/${1}`}>Details</Link></span>
                        
                    </div>
                </div>
                <div class="col-md-6 m40 mb-5">
                    <div class="message-box">
                        <h3>Immeuble Maman Ngebi</h3>
                        <div class="post-media wow fadeIn">
                            <img src="/images/imb_p03.jpg" alt="" class="img-fluid"/>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, laboriosam dolores. Nemo velit similique laudantium dolore esse animi perspiciatis unde nobis, illo provident quaerat sunt, vitae amet culpa eligendi necessitatibus..</p>
                        <h4>Location</h4>
                        <span>1200£/mois</span><br/>
                        <span><Link class="text-primary" to={`/immeub/${1}`}>Details</Link></span>
                        
                    </div>
                </div>
                <div class="col-md-6 m40 mb-5">
                    <div class="message-box">
                        <h3>Immeuble Matshaka</h3>
                        <div class="post-media wow fadeIn">
                            <img src="/images/imb_p04.jpg" alt="" class="img-fluid"/>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, laboriosam dolores. Nemo velit similique laudantium dolore esse animi perspiciatis unde nobis, illo provident quaerat sunt, vitae amet culpa eligendi necessitatibus..</p>
                        <h4>Ventes</h4>
                        <span>15.200.000£</span><br/>
                        <span><Link class="text-primary" to={`/immeub/${1}`}>Details</Link></span>
                        
                    </div>
                </div>
                <div class="col-md-12 text-center"><Link class="text-center text-light bg-secondary rounded px-3 py-2" to={`/filactu`}>Lire plus</Link></div>
            </div>
        
            
            <hr class="hr1"/>
            
            <div class="section-title text-center">               
                <h3></h3>
                
            </div>
            
        </div>
  </div>
    </> );
}
 
export default immeub;