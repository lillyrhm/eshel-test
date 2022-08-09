import * as React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import './present.css';

export default function Present() {
  const history = useHistory();

  const ButtonStyled = styled.button`
  display:flex;
  align-items: center;
  width:95%;
  height:50px;
  border: 7px double var(--white);
  border-radius:50px;
  margin:10px;
  background-color:var(--app);
  cursor: pointer;
  justify-content: space-between;
  padding:4px;
  `
  const handelWayEshel = () => {
    return history.push('/why-eshel')
  }

  const handelAboutUs = () => {
    return history.push('/about-us')
  }

  const handelCertificates = () => {
    return history.push('./certificates')
  }

  return (
    <div className="container-all-page present-container">
      <ButtonStyled onClick={handelWayEshel}>
        چرا اشل
        <IoIosArrowBack />
      </ButtonStyled>
      <ButtonStyled onClick={handelAboutUs}>
        درباره اشل
        <IoIosArrowBack />
      </ButtonStyled>
      <ButtonStyled onClick={handelCertificates}>
        مجوزها
        <IoIosArrowBack />
      </ButtonStyled>
    </div>
  );
}
