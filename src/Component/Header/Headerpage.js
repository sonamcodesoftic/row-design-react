import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import Routespage from '../../Routes/Routespage';

const Headerpage = () => {
    return(
        <>
        {/* <Router> */}
        <div class=""> 
        <nav class="navbar navbar-expand-md bg-dark navbar-dark navbar-position">
            <Link class="navbar-brand" to = "/">Navbar</Link>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
             <span class="navbar-toggler-icon"></span>
            </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav blog-item">
      <li class="nav-item">
        <Link to = "/admin/Bloghomepage" class="nav-link "> <u> BLOG </u></Link>
        
        {/* <a class="nav-link blog-item" href="#">BLOG</a> */}
      </li> 
      <li class="nav-item">
        <Link to = "/admin/Loginpage" class="nav-link "><u> LOGIN </u></Link>
        {/* <a class="nav-link blog-item" href="#">BLOG</a> */}
      </li>
      {/* <li class="nav-item">
        <Link to = "/admin/Sidebarpage" class="nav-link "><u> Dashboard </u></Link>
        <a class="nav-link blog-item" href="#">BLOG</a>
      </li> */}
    </ul>
  </div>  
</nav>
        </div>
         {/* <Routespage /> 
        </Router> */}
        </>
    );
}
export default Headerpage;