import * as React from 'react';
import openEnvelope from '../../assets/image/img/open-envelope.svg';
import user from "./../../assets/image/user.png";
import contractor from "./../../assets/image/img/contractor.svg";
import styled from 'styled-components';
import phone from './../../assets/image/img/phone.svg';
import ensta from './../../assets/image/img/instagram.svg';
import tellgram from './../../assets/image/img/telegram.svg';
import whatsapp from './../../assets/image/img/whatsapp.svg';
import mail from './../../assets/image/img/mail.svg';
import './contact.css';

export default function ContactUs() {
  const StyledDiv = styled.div`
  background-color: var(--white);
  padding:15px;
  width:500px;
  height:300px;
  display: flex;
  align-items: center;
  // flex-direction: column;
`;

  return (
    <>
      <div className='container-all-page'>

        <div className='cercle-div'>
          <img src={openEnvelope} className='logo-img' />
          <span><h5> آرشیو</h5></span>
        </div>

        <StyledDiv>
          <img src={user} className="user-img" />

          <form className="container-form" /*style={{ display: "flax", flexDirection:"column" }}*/>
            <label htmlFor="fname">ارسال پیام</label><br />
            <textarea
              className='inp-account'
              // rows={4}
              // cols={6}
              placeholder='متن مورد نظر را اینجا بنویسید.' /><br />
            <button className="inp-button">ثبت</button>
          </form>
        </StyledDiv>

        <div className='media'>

          <img src={contractor} title="logo" className='contract-img' />

          <div className='social-media'>
            <img src={phone} title='phone' />
            <img src={ensta} title='ensta' />
            <img src={tellgram} title='tellgram' />
            <img src={whatsapp} title='whatsapp' />
            <img src={mail} title='mail' />
          </div>

          <div className='social-media-text'>

            <div className="tooltip">
              <a>09210438723</a>
              <span className="tooltiptext">tel:09210438723 </span>
            </div>


            <div className="tooltip">
              <a href='https://www.instagram.com/eshel.app/'>eshel.app</a>
              <span className="tooltiptext">https://instagram.com/eshel.app</span>
            </div>


            <div className="tooltip">
              <a href='https://telegram.me/eshelapp'>eshelapp</a>
              <span className="tooltiptext">https://telegram.me/eshelapp</span>
            </div>

            <div className="tooltip">
              <a href='https://chst.ahatsapp.com/HZ6jYXrGUYCgs5aoVO'>Whatsapp</a>
              <span className="tooltiptext">https://chst.ahatsapp.com/HZ6jYXrGUYCgs5aoVO</span>
            </div>
            <div className="tooltip">
              <a href='eshel.app@gmail.com'>eshel.app@gmail.com</a>
              <span className="tooltiptext">milto:eshel.app@gmail.com</span>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}