import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actionTypes from '../../store/actionTypes';
import "./sidebar.css";
import sidebarData from './sidebarData';


function Sidebar(){

    const state = useSelector((state) => state)
    const isShowSidebar=state.isShowSidebar

    return (
        <div className={isShowSidebar ? 'sidebar-container active' : 'sidebar-container'}>
            {isShowSidebar ?
                <>
                    {
                        sidebarData.map((item) => (
                            <SidebarButton url={item.path} title={item.title} icon={item.icon} />
                        ))
                    }
                </> : null}
        </div>

    )
}


const SidebarButton = ({ title, icon, url }) => {
    const dispatch = useDispatch();
    const history = useHistory()

    const handleClick = () => {
        dispatch({ type: actionTypes.CLOSE_SIDEBAR });
        history.push(url)
    }

    return (
        <button className="sidebar-item" onClick={handleClick}>
            {icon}
            <span>{title}</span>
        </button>
    )
}


export default Sidebar;