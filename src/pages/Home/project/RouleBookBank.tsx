import * as React from 'react';
import styled from 'styled-components';
import rule from '../../../assets/image/rules-bank (1).svg';

const RouleBookBank = () => {

    const StyledDiv = styled.div`
    display:flex;
    flex-direction:row;
    background-color: var(--white);
    padding-bottom:30px;
    width:100%;
    height:auto;
    align-items: center;
    `

    return (
        <>
            <div className='container-all-page'>
                <div className='cercle-div'>
                    <img src={rule} />
                    <h5> قوانین</h5>
                </div>

                <StyledDiv>
                    <img src={rule} className='box-img' />
                    <h5> بانک قوانین اطلاعات و کتب مهندسی</h5>
                </StyledDiv>
            </div>
        </>
    )
}

export default RouleBookBank;
