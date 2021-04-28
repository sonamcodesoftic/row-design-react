import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Bloghomepage from '../Component/Blog/Bloghomepage';
import Banner from '../Component/Home/Banner';
import Onepageblog from '../Component/Blog/Onepageblog';
import Loginpage from '../Component/Login/Loginpage';
import Sidebarpage from '../Component/Dashboard/Sidebarpage';
import Blogcard from '../Component/Blog/Blogcard';
import Bloghomepageslider from '../Component/Dashboard/Bloghomepageslider';
import Blogcardsidebar from '../Component/Dashboard/Blogcardsidebar';
import Addnewblog from '../Component/Dashboard/Addnewblog';
import Onepageblogsider from '../Component/Dashboard/Onepageblogsider';
import Editnewblog from '../Component/Dashboard/Editnewblog';
// import Sidebarpagenew from '../Component/Sidebar/Sidebarpagenew';


const Routespage = () => {
    return (
        <div>
            <Switch>
               <Route exact path="/">
                  <Banner />
                </Route> 
                 <Route exact path="/admin/Sidebarpage">
                  <Sidebarpage />
                </Route> 
                 <Route exact path="/admin/Bloghomepage">  
                 <Bloghomepage />
                </Route> 
                <Route exact path="/admin/Onepageblog">  
                 <Onepageblog />
                </Route>
                <Route exact path="/admin/Loginpage">  
                 <Loginpage />
                </Route>
                 <Route exact path="/admin/Sidebarpage">  
                 <Sidebarpage />
                </Route> 
                <Route exact path="/admin/Blogcard">  
                 <Blogcard />
                </Route>
                <Route exact path="/admin/Bloghomepageslider">  
                 <Bloghomepageslider />
                </Route>
                <Route exact path="/admin/Blogcardsidebar">  
                 <Blogcardsidebar />
                </Route>
                <Route exact path="/admin/Addnewblog">  
                 <Addnewblog />
                </Route>
                <Route exact path="/admin/Onepageblogsider">  
                 <Onepageblogsider />
                </Route>
                <Route exact path="/admin/Editnewblog">  
                 <Editnewblog />
                </Route>
                {/* <Route exact path="/admin/Sidebarpagenew">  
                 <Sidebarpagenew />
                </Route> */}
            </Switch>
        </div>
    );
}
export default Routespage; 