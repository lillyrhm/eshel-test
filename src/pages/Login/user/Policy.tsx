import * as React from 'react';
import '../../../assets/style/project.css'
import mail from './../../../assets/image/img/open-envelope.svg';
import { TEXTS } from '../../../constant/texts';
import styled from 'styled-components';

export default function Policy() {

    const StyledDiv = styled.div`
    background-color: var(--white);
    padding:5px;
    width:100%;
    height:auto;
    align-items: center;
    `

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
                    <img src={mail} alt='mail' />
                    <h4>قوانین اشل</h4>
                </div>

                <StyledDiv>
                    <p className='text-decoration'> {TEXTS.POLICIES}</p>
                </StyledDiv>
            </div>
        </div >
    )
}


