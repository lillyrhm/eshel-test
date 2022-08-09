import * as React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import styled from 'styled-components';
import "../../assets/style/project.css";
import insta from './../../assets/image/insta.jpg';
import internalBanner from './../../assets/image/internal-banner.jpg';
import mainTelegram from './../../assets/image/main-telegram.jpg';
import telegram from './../../assets/image/telegram.jpg';
import './order-ads.css';

export default function OrderAds() {
  const ButtonStyled = styled.button`
  width:95%;
  height:50px;
  border: 7px double var(--white);
  border-radius:50px;
  margin:10px;
  background-color:var(--app);
  `

  return (
    <>
      <div className='container-all-page '>
        <div className='cercle-div'>
          <br /><br />
          <h3>سفارش آگهی </h3>
        </div>

        <div className='boxes'>
          <p className='text-decoration '>
            مجموعه اشل با فعالیت تخصصی در حوزه ساخت و ساز شهری و روستایی مفتخر است با بهره گیری از کاربران واقعی شامل مهندسین ناظر و مجری، مالکان و سازندگان فعال در صنعت ساختمان ، خدمات محتوایی ارزنده ای به مشتریان عرضه کند. با اشل دقیقاً به جامعه هدف بزنید.
          </p>

          <ButtonStyled className="button-comercial">
            تماس با پشتیبانی
            <IoIosArrowBack />
          </ButtonStyled>

          <img className='images' src={mainTelegram} />
          <hr className='hr' /><br />
          <img className='images' src={insta} />
          <hr className='hr' /><br />
          <img className='images' src={telegram} />
          <hr className='hr'  /><br />
          <img className='images' src={internalBanner} />
          <hr className='hr' /><br />
        </div>
      </div>
    </>
  )
}