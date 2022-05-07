import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData';
import "./navbar.css";
import { IconContext } from 'react-icons/lib';
import { useDispatch, useSelector } from 'react-redux';


function Sidebar() {
    const { isShowSidebar } = useSelector((state) => state)

    return (
        <>
            <IconContext.Provider value={{ color: "#986363" }}>
                <nav className={isShowSidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className="  menu-bars nav-menu-item" >
                        {isShowSidebar ?
                            SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            }) : ""}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;