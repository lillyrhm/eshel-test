import React, { useState, useEffect } from 'react'
import Popup from './popup';
import './popup.css';

export default function IndexPopup() {
    const [popupButton, setPopupButton] = useState(false);
    const [timePopup, setTimePopup] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTimePopup(true);
        }, 3000);
    }, []);

    return (
        <div className='popup-item'>
            <div>
                <h3>react popup</h3>
                <br />
                <button onClick={() => { setPopupButton(true) }}>open popup</button>

            </div>
            <Popup trigger={popupButton} setTrigger={setPopupButton}>
                <h3 >
                    my popup
                </h3>
            </Popup>

            <Popup trigger={timePopup} setTrigger={setTimePopup}>
                <h3 >
                    my popup
                </h3>
            </Popup>
        </div>
    )
}
