import React from 'react';
import Footerpage from '../Footer/Footerpage';
import Blogslider from './Blogslider';
import Blogcard from './Blogcard';
// import Headerpage from '../Header/Headerpage';

const Bloghomepage = () => {
    return (
        <div >
            {/* <Headerpage /> */}
            <Blogslider />
            <Blogcard />
            {/* <Footerpage /> */}
        </div>
    );

}
export default Bloghomepage;