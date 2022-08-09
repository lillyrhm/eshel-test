import * as React from 'react';
import { memo, useState } from 'react';
import newProject from '../../../assets/image/new-projects (1).svg';
import dataProject from '../../../assets/image/project-details (1).svg';
import owner from '../../../assets/image/owner-details.svg';
import contractor from '../../../assets/image/4-green-contractor.svg';
// import InputRow from '../common/InputRow';
// import TitleRow from '../common/TitleRow';

const New = () => {

    return (
        <>
        {/*  */}
            <div className='final-logo-box'>
                <img src={newProject} className='logo-img' />
                <span><h5>پروژه جدید</h5></span>
                
            </div>

            <div className='final-box'>
                <img src={dataProject} className='box-img' />
                <h5>مشخصات پروژه جدید</h5>
            </div>

            <div className='final-box'>
                <img src={owner} className='box-img' />
                <h5>مشخصات مجری</h5>
            </div>

            <div className='final-box'>
                <img src={owner} className='box-img' />
                <h5>مشخصات مالک</h5>
            </div>

            <div className='final-box'>
                <img src={contractor} className='box-img' />
                <h5>مشخصات سایر ناظرین</h5>
            </div>


        </>
    )
}

export default New;
