import * as React from 'react';
import Header from './Header';


interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <main>{children}</main>
        
        </>
    )
}

export default Layout;
