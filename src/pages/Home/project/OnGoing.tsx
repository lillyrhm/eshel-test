import * as React from 'react';
import onGoing from '../../../assets/image/on-going-projects.svg';
import projectDetails from '../../../assets/image/img/project-details.svg'
import styled from 'styled-components';
const OnGoing = () => {

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
                    <img src={onGoing} alt='in going image' />
                    <h4> پروژه های جاری</h4>
                </div>

                <StyledDiv>
                    <img src={projectDetails} className='box-img' />
                    <h5>پروژه های جاری</h5>
                    <br></br>
                    <h3>موردی وجود ندارد</h3>
                </StyledDiv>
            </div>
        </>
    );
}

export default OnGoing;
