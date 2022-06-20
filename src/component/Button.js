import React from "react";

const ButtonList = ({ buttonList }) => {
       return (
        <>
            {buttonList.map((buttons) => (
                <button key={buttons.id} className={buttons.className}
                    onClick={buttons.address} >
            {buttons.icon} {buttons.title} <span>{buttons.arrow}</span>
        </button>
    ))
}
        </>
    );
}

export default ButtonList;