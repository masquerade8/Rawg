import React from 'react';
import SideNavBar from '../SideNavBar';
import Header from '../Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='parter'>
                <SideNavBar />
                <div className='main_content'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;