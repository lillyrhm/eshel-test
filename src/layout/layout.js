import React from 'react';
import Header from "./Header";
import IndexPopup from './../example/popup/index';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout;
