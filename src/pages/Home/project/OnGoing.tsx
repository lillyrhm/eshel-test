import * as React from 'react';
import onGoing from '../../../assets/image/on-going-projects.svg';

const OnGoing = () => {
    return (
        <>
            <div className='final-logo-box'>
                <img src={onGoing} className='logo-img' />
                <span><h5> پروژه های جاری</h5></span>
            </div>

            <div className='final-box'>
                <img src={onGoing} className='box-img' />
                <h5>پروژه های جاری</h5>
                <br />
                <br />
                <h2>موردی وجود ندارد</h2>
            </div>
        </>
    );
}

export default OnGoing;
