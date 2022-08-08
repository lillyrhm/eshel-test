import * as React from 'react';
import Sidebar from '../component/sidebar/Sidebar';
import Header from './Header';


interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Sidebar />
        </>
    )
}

export default Layout;
