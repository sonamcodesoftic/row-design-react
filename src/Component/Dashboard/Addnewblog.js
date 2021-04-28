import React from 'react';

const Addnewblog = () => {
    return (
        <>
        <div class="siderblogpage siderblogpage-new">
            <div class="container">
                 <h1>Edit Blog</h1>
                <form action="/action_page.php" method="POST" enctype="multipart/form-data" class="mt-5" >
                <div class="form-group form-group-img mt-4">
                     <input type="file" class="form-control form-control-image mt-5" id="imagefile" name="email" />
                  </div>
                   <div class="form-group mt-4">
                     <input type="text" class="form-control mt-3" id="title" placeholder="Enter Title" name="title" />
                  </div>
                  <div class="form-group mt-4">
                    <textarea type="text" class="form-control mt-3" id="description" placeholder="Enter Description" name="description" > </textarea>
                  </div>
                  <div class="form-group form-check mt-5">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" name="remember" /> I Accept All Terms & Conditions .
                    </label>
                  </div>
                  <input type="submit" class="btn btn-primary form-control mt-2" value="Submit" />
               </form>
            </div>
       </div>
        </>
    );
}
export default Addnewblog;