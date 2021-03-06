import React from 'react';

const Blogslider = () => {
    return (
        <>
        <div class="page-style">
            <div id="demo" class="carousel slide mb-5" data-ride="carousel">
               <ul class="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" class="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
               </ul>
               <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src="https://www.heatingncooling.com.au/wp-content/uploads/2020/05/inner-page-banner-03.jpg" alt="Los Angeles"  />
                      <div class="carousel-caption">
                          <h3>Los Angeles</h3>
                          <p>We had such a great time in LA!</p>
                      </div>   
                  </div>
                  <div class="carousel-item">
                       <img src="https://www.wall2wallco.com/wp-content/uploads/2020/09/wall2wall-portfolio-innerpage-bannerimg.jpg" alt="Chicago"  />
                       <div class="carousel-caption">
                       <h3>Chicago</h3>
                       <p>Thank you, Chicago!</p>
                   </div>   
               </div>
                <div class="carousel-item">
                    <img src="https://www.heatingncooling.com.au/wp-content/uploads/2020/04/inner-page-banner.jpg" alt="New York"  />
                    <div class="carousel-caption">
                      <h3>New York</h3>
                      <p>We love the Big Apple!</p>
                    </div>   
               </div>
           </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
               <span class="carousel-control-next-icon"></span>
            </a>
        </div>
            
        </div>
        </>
    );

}
export default Blogslider;