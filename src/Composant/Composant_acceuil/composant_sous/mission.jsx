const mission = () => {
    return ( <>
      <div class="row vission-and-mission">
      <div class="col-md-12">
        <ul class="nav nav-pills nav-justified" id="myTab" role="tablist">
          <li class="nav-item"><a class="nav-link active" href="#tab_a" data-toggle="tab">Qui sommes nous?</a></li>
          <li class="nav-item"><a class="nav-link" href="#tab_b" data-toggle="tab">Notre Vision</a></li>				
        </ul>
        <div class="tab-content">
          <div class="tab-pane fade show active" id="tab_a">
            <div class="box-inner-m text-center">
              <h1 class="page-header" >Qui sommes Nous?</h1>
              <img src="/images/imb_p01.jpg" height="400px" width="600px" alt="" srcset=""/>
              <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nesciunt incidunt sed consectetur recusandae labore enim! 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero ullam incidunt tenetur ipsum dolor quod ratione sint officia neque cumque, sit nesciunt natus asperiores ipsam corrupti dolores numquam. Blanditiis.Facere, fugit! Amet ipsam error accusamus repudiandae maxime id in harum debitis, adipisci similique!</p>							
            </div>
          </div>
          <div class="tab-pane fade" id="tab_b">
            <div class="box-inner-m">
              <div class="row">
                <div class="col-md-6">
                  <img src="/images/imb_p01.jpg" height="400px" width="500px" alt="" srcset="" />
                </div>
                <div class="col-md-6">
                  <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, laboriosam labore nam eaque aut, odit nisi architecto corporis voluptas harum laborum. Similique vitae totam iste minima doloremque. Natus, amet illum!
                  Ducimus nulla voluptatibus quia exercitationem labore, autem eum aliquam facere sequi voluptas dolorem consectetur dignissimos quo sapiente minus? Laborum possimus a reiciendis cum natus inventore harum laudantium officia molestiae ipsam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>				
  </div>
    </> );
}
 
export default mission;