import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Bloghomepage from '../Component/Blog/Bloghomepage';
import Banner from '../Component/Home/Banner';
import Onepageblog from '../Component/Blog/Onepageblog';
import Loginpage from '../Component/Login/Loginpage';
import Sidebarpage from '../Component/Dashboard/Sidebarpage';


const Routespage = () => {
    return (
        <div>
            <Switch>
               <Route exact path="/">
                  <Banner />
                </Route> 
                 <Route exact path="/Sidebarpage">
                  <Sidebarpage />
                </Route> 
                 <Route exact path="/Bloghomepage">  
                 <Bloghomepage />
                </Route> 
                <Route exact path="/Onepageblog">  
                 <Onepageblog />
                </Route>
                <Route exact path="/Loginpage">  
                 <Loginpage />
                </Route>
                {/* <Route exact path="/Sidebarpage">  
                 <Sidebarpage />
                </Route> */}
            </Switch>
        </div>
    );
}
export default Routespage;