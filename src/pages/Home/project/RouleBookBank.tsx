import * as React from 'react';
import rule from '../../../assets/image/rules-bank (1).svg';

const RouleBookBank = () => {
    return (
        <>
            <div className='final-logo-box'>
                <img src={rule} className='logo-img' />
                <span><h5> قوانین</h5></span>
            </div>

            <div className='final-box'>
                <img src={rule} className='box-img' />
                <h5> بانک قوانین اطلاعات و کتب مهندسی</h5>
            </div>
        </>
    )
}

export default RouleBookBank;
