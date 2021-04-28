import React from 'react';
import Footerpage from '../Footer/Footerpage';
import Blogslider from '../Blog/Blogslider';
import Blogcard from '../Blog/Blogcard';

const Blogcardsidebar = () => {
    return (
        <>
        <div class="siderblogpage">
            <Blogcard />
            <Footerpage />
        </div>
        </>
    );
}
export default Blogcardsidebar;
