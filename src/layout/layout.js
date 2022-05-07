import React from 'react';
import Header from "./Header";
// import DrawerMenu from "./drawer-menu";

const Layout = ({ children }) => {
    return (
        <>
            <div className="all-page-color">
                <Header />
                <main>{children}</main>
                {/* <DrawerMenu/> */}
            </div>
        </>
    )
}

export default Layout;
