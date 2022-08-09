import * as React from 'react';
import "../assets/style/header.css";
import back from "../assets/image/back.svg";
import logocrop from "../assets/image/logocrop.svg";
import menu from "../assets/image/menu.svg";
import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from '../store/ActionType';
import * as actions from '../store/ActionType';
import reducer from '../store/reducer';
import Sidebar from '../sidebar/Sidebar';
import type { RootState, AppDispatch } from '../store/stor';
import { useDispatch, useSelector } from 'react-redux'


export const initialState = {
    isShowSidebar: false
}


export default function Header() {

    //default I type that
    const dispatch: any | AppDispatch = useDispatch();
    const state: any | RootState = useSelector((state) => state);


    //if my condition was right (false) do n`t show the sidebar else is true show the sidebar
    const handleSidebar = () => {
        /* @ts-ignore */
        dispatch({ type: state.isShowSidebar ? "CLOSE_SIDEBAR" : "OPEN_SIDEBAR" });
        console.log(state.isShowSidebar)
    }

    React.useEffect(() => {
    console.log("isOpen: ", state.isShowSidebar)
    }, [ state.isShowSidebar]);

    return (
        <>
            <div className="header-container">
                <button className='header-button'
                    onClick={handleSidebar}
                >
                    <img src={menu} className="menu-icon" title="eshel" />
                </button>
                <img src={logocrop} className="eshel-icon" title="eshel" />
                <img src={back} className="back-icon" title="eshel" />
            </div>
        </>
    );
};

