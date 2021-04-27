import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routespage from '../../Routes/Routespage';


const Headerpage = () => {
    return(
        <>
        <Router>
        <div> 
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <Link class="navbar-brand" to = "/">Navbar</Link>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
             <span class="navbar-toggler-icon"></span>
            </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav blog-item">
      <li class="nav-item">
        <Link to = "/Bloghomepage" class="nav-link "> <u> BLOG </u></Link>
        
        {/* <a class="nav-link blog-item" href="#">BLOG</a> */}
      </li> 
      <li class="nav-item">
        <Link to = "/Loginpage" class="nav-link "><u> LOGIN </u></Link>
        {/* <a class="nav-link blog-item" href="#">BLOG</a> */}
      </li>
    </ul>
  </div>  
</nav>
        </div>
        <Routespage />
        </Router>
        </>
    );
}
export default Headerpage;