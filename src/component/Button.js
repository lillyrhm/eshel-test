import React from "react";
import { useState } from "react";
import "../pages/Home";
import "../layout/Header";


const ButtonList = ({ buttonList }) => {
    return (
        <>
            {buttonList.map((buttons) => (
                <div key={buttons.id}>
                    <button className={buttons.className} 
                        onClick={buttons.address} >
                        {buttons.icon} {buttons.title} {buttons.arrow}
                    </button><br />
                </div>
            ))}
        </>
    );
}

export default ButtonList;