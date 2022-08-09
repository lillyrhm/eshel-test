import * as React from 'react';
import mail from './../../../assets/image/open-envelope.svg';
import { TEXTS } from '../../../constant/texts';

export default function AboutUs() {

    return (
     
        <div>
            <div className='container-all-page'>
                <div className='cercle-div '>
                    <img src={mail} alt='mail' />
                    <h4>قوانین اشل</h4>
                </div>
                <div className='container-second-layer'>
                    <p className='text-decoration'> {TEXTS.ABOUT_US}</p>
                </div>
            </div>
        </div>

    )
}