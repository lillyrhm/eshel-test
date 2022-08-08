import * as React from 'react';
import mail from './../../../assets/image/open-envelope.svg';
import { TEXTS } from '../../../constant/texts';

function Policy() {
    return (
        <div
            style={{
                backgroundColor: 'var(--light-grey)',
                height: "100vh",
                width: " 100%",
                zIndex: 100,
            }}
        >
            <div className='container-all-page'>
                <div className='cercle-div '>
                    <img src={mail} className='img-leter' alt='mail' /><br />
                    <h4>قوانین اشل</h4>
                </div>
                <div className='container-second-layer containe-policy'>
                    <p> {TEXTS.POLICIES}</p>
                </div>
            </div>
        </div>

    )
}

export default Policy;
