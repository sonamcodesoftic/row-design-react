import React from 'react';
import Footerpage from '../Footer/Footerpage';
import Blogslider from '../Blog/Blogslider';
import Blogcard from '../Blog/Blogcard';

const Bloghomepageslider = () => {
    return (
        <>
        <div class="siderblogpage">
            <Blogslider />
            <Blogcard />
            <Footerpage />
        </div>
        </>
    );

}
export default Bloghomepageslider;