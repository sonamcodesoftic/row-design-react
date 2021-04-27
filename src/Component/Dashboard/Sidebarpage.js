import React from 'react' ;
import Blogcard from '../Blog/Blogcard';
 import { BrowserRouter as Router, Link } from 'react-router-dom';
 import Routespage from '../../Routes/Routespage';

const Sidebarpage = () => {
    return (
        <div>
             {/* <Router>  */}
            <div class="">
                <div class="row">
                    <div class="col-md-3">
                     <div class="w3-sidebar w3-light-grey w3-bar-block" >
                       <h3 class="w3-bar-item">Menu</h3>
                       {/* <Link to = "/Bloghomepage" class="w3-bar-item w3-button">Blog</Link>
                       <Link to = "/Onepageblog" class="w3-bar-item w3-button">View</Link>
                       <Link to= "/" class="w3-bar-item w3-button">Add</Link> */}
                        <a href="#" class="w3-bar-item w3-button">Blog</a>
                  <a href="#" class="w3-bar-item w3-button">View</a>
                  <a href="#" class="w3-bar-item w3-button">Add</a>
                     </div> 
                     </div>
                   <div class="col-md-9 slidebar-content"> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebarpage;
