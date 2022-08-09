import * as React from 'react';
import styled from 'styled-components';
import final from '../../assets/image/img/archive-done-projects.svg';
import "./final.css";

export default function Final() {

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
      <div className='container-all-page' >
        <div className='cercle-div'>
          <img src={final} style={{ width: "30px", paddingTop: "15px" }} />
          <h5> آرشیو</h5>
        </div>

        <StyledDiv>
          <img src={final} className='box-img' />
          <h5>پروژه های پایان یافته</h5>
        </StyledDiv>
      </div>
    </>
  );

}