import React from 'react';
import Footerpage from '../Footer/Footerpage';
import Blogslider from './Blogslider';
import Blogcard from './Blogcard';

const Bloghomepage = () => {
    return (
        <div>
            <Blogslider />
            <Blogcard />
            <Footerpage />
        </div>
    );

}
export default Bloghomepage;