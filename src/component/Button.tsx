import * as React from "react";


const ButtonList = (buttonList:any): JSX.Element => {
    return (
        <div>
            {buttonList.map((buttons:any) => (
                <button key={buttons.id} className={buttons.className}
                    onClick={buttons.address} >
                    {buttons.icon} {buttons.title} <span>{buttons.arrow}</span>
                </button>
            ))
            }
        </div>
    );
}

export default ButtonList;