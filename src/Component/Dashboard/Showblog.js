import React from 'react';
// import ReactDOM from 'react-dom';
 import { BrowserRouter as Router, Link } from 'react-router-dom';
// import Routespage from '../../Routes/Routespage';
import Blogcard from '../Blog/Blogcard';
// import Sidebarpage from './Sidebarpage';

const Showblog = () => {
    return (
        <>
        <Router>
        <div class="sidebar sidebar-design">
            <Link to = "/admin/Bloghomepage"> Blog </Link>
            <Link to = "/admin/Showblog"> View </Link>
            <Link to = "/admin/Addnewblog"> Add </Link>
            <Link to = "/admin/Loginpage"> Logout </Link>
            {/* <a class="active" href="#home">Blog</a>
            <a href="#news">View</a>
            <a href="#contact">Add</a>
            <a href="#about">Profile</a> */}
       </div>
  <div class="content">
  <Blogcard />
</div> 
{/* <Routespage />  */}
</Router> 
</>
    );
}
export default Showblog ;