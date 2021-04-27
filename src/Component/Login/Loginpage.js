import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Loginpage = () => {
    return (
        <div>
            <div class="container login-container">
                <div class="row user-row mb-4">
                    <div class="col-md-12"> 
                      <img src="https://pngimg.com/uploads/spy/spy_PNG32.png" />
                      <h4>USER LOGIN</h4>
                    </div>
                </div>
             <form action="/">
                   <div class="form-group">
                       <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                  </div>
                  <div class="form-group">
                      <input type="password" class=" form-control" id="pwd" placeholder="Enter password" name="pswd" />
                  </div>
                  <div class="form-group form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                      </label>
                  </div> 
                  
                  <input type="submit" class="btn btn-primary form-control" value="Submit" />
                   <div class="form-group mt-4">
                    <span><h6><Link to = "/">Login </Link> / <Link to = "/">Register</Link> <Link to ="/" class="forget-password ">Forget My Password ? </Link></h6>  </span>
                   </div>
             </form>
           </div>
        </div>
    );
}
export default Loginpage;