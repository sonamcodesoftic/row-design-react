import React from 'react';

const Footerpage = () => {
    return (
        <>
        <div class="page-style">
             <div class="footer mt-5">
             
             <div class="container">
                 <div class="row pt-3 pb-3">
                     
                     <div class="col-md-3 mt-5 links-items">
                         <ul>
                             <li class="mb-4"><h5 class="footer-heading">Quick Links</h5></li>
                             <li><hr class="horizontal-width"></hr></li>
                             <li><p>Home</p></li>
                             <li><p>About</p></li>
                             <li><p>Blog</p></li>
                             <li><p>Contact Us</p></li>
                             <li><p>Pay Us</p></li>
                         </ul>
                     </div>
             
                     <div class="col-md-3 mt-5 links-items">
                         <ul>
                             <li class="mb-4"><h5 class="footer-heading">Services</h5></li>
                             <li><hr class="horizontal-width"></hr></li>
                             <li><p>Website Development</p></li>
                             <li><p>Software Development</p></li>
                             <li><p>Mobile App Development</p></li>
                             <li><p>Search Engine Optimization</p></li>
                         </ul>
                     </div>
                    
                     <div class="col-md-3 mt-5 links-items">
                     <ul>
                             <li class="mb-4"><h5 class="footer-heading">Policies</h5></li>
                             <li><hr class="horizontal-width"></hr></li>
                             <li><p>Privacy Policy</p></li>
                             <li><p>Disclaimer</p></li>
                             <li><p>Terms Of Service</p></li>
                             <li><p>Agreement</p></li>
                         </ul>
                         
                     </div>
                     <div class="col-md-3 mt-5 logo-sec">
                        <img src="https://toppng.com/uploads/preview/logo-sample-designs-11569048725zkn0gxuyhf.png" className="" alt="logo"  />
                     </div>
                     
                 </div>
                 <div class="row">
                     <div class="col-md-12 footer-text mb-5 mt-3">
                         <h6>
                             <hr class="sec-horizontal-line"></hr>
                         All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
                         </h6>
                     </div>
                 </div>
             </div>
         </div>
        </div>
        </>
    ); 
}
export default Footerpage;