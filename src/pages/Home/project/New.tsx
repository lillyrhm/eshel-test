import * as React from 'react';
import newProject from '../../../assets/image/new-projects (1).svg';
import dataProject from '../../../assets/image/project-details (1).svg';
import owner from '../../../assets/image/owner-details.svg';
import contractor from '../../../assets/image/4-green-contractor.svg';
import InputRow from '../common/InputRow';
import '../../../assets/style/project.css';
import './new-project.css';
import InputTitle from '../common/InputTitle';

const New = (): JSX.Element => {
    const TEMPLATEDETAILS = {
        name: '',
        phone: '',
        address: '',
    }

    return (
        <div className='container-all-page'>
            <div className='cercle-div'>
                <img src={newProject} />
                <h5>پروژه جدید</h5>
            </div>

            <div className='new-project-box'>
                <InputTitle src={dataProject} title={'مشخصات پروژه جدید'} className={'box-img'} />

                <div className='item-in-box'>
                    <InputRow title={''} onChange={undefined} />
                    <InputRow title={''} onChange={undefined} />
                    <InputRow title={''} onChange={undefined} />
                    <InputRow title={''} onChange={undefined} />
                </div>
            </div>

            <div className='new-project-box'>
                <InputTitle src={owner} title={'مشخصات مجری'} className={'box-img'} />
                <InputRow title={''} onChange={undefined} />
                <InputRow title={''} onChange={undefined} />
                <InputRow title={''} onChange={undefined} />
            </div>

            <div className='new-project-box'>
                <InputTitle src={owner} title={'مشخصات مالک'} className={'box-img'} />
                <InputRow title={''} onChange={undefined} />
                <InputRow title={''} onChange={undefined} />
                <InputRow title={''} onChange={undefined} />

            </div>

            <div className='new-project-box'>
                <InputTitle src={contractor} title={'مشخصات سایر ناظرین'} className={'box-img'} />

            </div>


        </div>
    )
}

export default New;
