import React, { memo, useState } from 'react';
import newProject from '../../../assets/image/new-projects (1).svg';
import dataProject from '../../../assets/image/project-details (1).svg';
import owner from '../../../assets/image/owner-details.svg';
import contractor from '../../../assets/image/4-green-contractor.svg';
import InputRow from '../common/InputRow';
import TitleRow from '../common/TitleRow';

const New = () => {

    // const onSubmitForm = (event) => {
    //     event.preventDefault();
    //     if (validPassword.test(event.target.value)) {
    //       alert(username + " - " + password);
    //     } else {
    //       setPasswordError("Your password is invalid");
    //     }
    // };

    return (
        <>
            <div className='container-all-page '>
                <div className="container-second-layer">
                    <div className='final-logo-box'>
                        <img src={newProject} className='logo-img' />
                        <span><h5>پروژه جدید</h5></span>
                        <br />


                    </div>

                    <div className='contain-data-project'>
                        <img src={dataProject} className='box-img' />
                        <h5>مشخصات پروژه جدید</h5>
                        {/* <TitleRow/> */}
                        <InputRow />
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
                </div>
            </div>


        </>
    )
}

export default New
