import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Routespage from '../../Routes/Routespage';
import Headerpage from '../Header/Headerpage';
import Footerpage from '../Footer/Footerpage';


const Navbarpage = () => {
    return (
        <>
        <Router>
            <div class="">
               <div class="row">
                   <div class="col-md-12">
                      <Headerpage />
                   </div>
                   <div class="col-md-">
                   <div class="sidenav">
                  <Link to = "/admin/Bloghomepage">Blog Home</Link>
                  <Link to = "/admin/Blogcard">View</Link>
                  <Link to = "/admin/Addblog">Add Blog</Link>
                  <Link to = "/">Contact</Link>
                  <Link to = "/">Search</Link>
               </div>
                   </div>
               </div>
            </div>
            {/* <Headerpage />
          <div>
               <div class="sidenav">
                  <Link to = "/admin/Bloghomepage">About</Link>
                  <Link to = "/">Services</Link>
                  <Link to = "/">Clients</Link>
                  <Link to = "/">Contact</Link>
                  <Link to = "/">Search</Link>
               </div>
          </div> */}
          <Routespage />
          </Router>
          <Footerpage />
        </>
    );
}
export default Navbarpage;