import { Link } from "react-router-dom";
const footer = () => {
    return ( <>
     <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            
							<h1>ImmoBIlem</h1>
                        </div>
                        <p> SEO Mauris pharetra quam ut commodo malesuada. Sed a ornare purus, nec cursus tortor. Integer vehicula felis nec nunc pulvinar efficitur. In et semper odio. Sed laoreet ullamcorper augue, ut mattis metus mattis quis.</p>
                        <p>Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                    </div>
                </div>
				
				<div class="col-lg-2 col-md-6 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            <h3>Information</h3>
                        </div>
                        <ul class="footer-links">
                            <li><Link class="dropdown-item" to={'/'}>Acceuil</Link></li>
                            <li><Link class="dropdown-item" to={'/#apropos'}>Apropos</Link></li>
                            <li><Link class="dropdown-item" to={'/filactu'}>fil d'actualité</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-xs-12">
                    <div class="widget clearfix">
						<div class="widget-title">
							<h3>Newsletter</h3>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et tincidunt risus, vitae sollicitudin tellus.</p>
						<div class="news-box">
							<form action="#" method="post">
								<div class="form-group">
									<input class="form-control" placeholder="Email address" type="email"/>
									<button type="submit">
										<svg id="Layer_11" data-name="Layer 11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.19 17.71">
											<path class="cls-1" d="M311,387.93a.89.89,0,0,0-1.27,1.26l6.44,6.44H295a.89.89,0,0,0-.89.89.9.9,0,0,0,.89.9h21.24l-6.44,6.42a.91.91,0,0,0,0,1.27.89.89,0,0,0,1.27,0l8-8a.87.87,0,0,0,0-1.25Z" transform="translate(-294.08 -387.67)"></path> </svg>
									</button>
								</div>
							</form>
						</div>
						
                        <div class="widget-title">
                            <h3>Social</h3>
                        </div>
                        <ul class="footer-links social-md">
                            <li><a class="fb btn-a" title="Facebook" data-tippy-animation="scale" href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="gi btn-a" title="Github" data-tippy-animation="scale" href="#"><i class="fa fa-github"></i> </a></li>
                            <li><a class="tw btn-a" title="Twitter" data-tippy-animation="scale" href="#"><i class="fa fa-twitter"></i> </a></li>
                            <li><a class="dr btn-a" title="Dribbble" data-tippy-animation="scale" href="#"><i class="fa fa-dribbble"></i> </a></li>
                            <li><a class="pi btn-a" title="Pinterest" data-tippy-animation="scale" href="#"><i class="fa fa-pinterest"></i> </a></li>
                        </ul>
                    </div>
                </div>
				
				<div class="col-lg-3 col-md-6 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title">
                            <h3>Contact Details</h3>
                        </div>

                        <ul class="footer-links">
                            <li><a href="mailto:#">ImmoBIlem@contact.com</a></li>
                            <li><a href="#">www.immobilem.com</a></li>
                            <li>AV. loporie n23 boulevard lumumba Gombe/RDC</li>
                            <li>+243 821 376 284</li>
                        </ul>
                    </div>
                </div>
				
            </div>
        </div>
  </footer>
  <div class="copyrights">
        <div class="container">
            <div class="footer-distributed">
                <div class="footer-left">
                    <p class="footer-company-name text-light">All Rights Reserved. &copy; <script>document.write(new Date().getFullYear());</script> <a href="#">ImmoBIlem</a> Design By  <a href="https://html.design/">.Habaseur</a></p>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default footer;