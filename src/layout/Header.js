import React from 'react';
import "../assets/style/header.css";
import back from "../assets/image/back.svg";
import logocrop from "../assets/image/logocrop.svg";
import menu from "../assets/image/menu.svg";
import * as actions from "../app/actionTypes"
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const dispatch = useDispatch()
    const { isShowSidebar } = useSelector((state) => state)

    //if my condition was right (false) do n`t show the sidebar else is true show the sidebar
    const handleSidebar = () => {
        dispatch({ type: isShowSidebar ? actions.CLOSE_SIDEBAR : actions.OPEN_SIDEBAR })
    }

    return (
        <>
            <div className="header-container">
                <button className='header-button' onClick={handleSidebar}>
                    <img src={menu} className="menu-icon" title="eshel" />
                </button>
                <img src={logocrop} className="eshel-icon" title="eshel" />
                <img src={back} className="back-icon" title="eshel" />
            </div>
        </>
    );
}

export default Header;
