import * as React from 'react';
import mail from './../../../assets/image/open-envelope.svg';
import { TEXTS } from '../../../constant/texts';

function WhyEshel() {
    return (
        <div>
            <div className='container-all-page'>
                <div className='cercle-div '>
                    <img src={mail} alt='mail' />
                    <h4>قوانین اشل</h4>
                </div>
                <div className='container-second-layer containe-policy text-decoration'>
                    <p> {TEXTS.WHY_EHSEL}</p>
                </div>
            </div>
        </div>

    )
}

export default WhyEshel;