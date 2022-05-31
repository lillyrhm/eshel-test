import React, { useState } from 'react';
import mainTelegram from './../../assets/image/main-telegram.jpg';
import insta from './../../assets/image/insta.jpg';
import telegram from './../../assets/image/telegram.jpg';
import internalBanner from './../../assets/image/internal-banner.jpg';
import './commercial.css';
import ButtonList from './../../component/Button';
import { IoIosArrowBack } from "react-icons/io";

export default function Commercial() {
  const [buttonList, setButtonList] = useState([
    {
      id: 8,
      title: "تماس با پشتیبانی",
      address: "#",
      className: "button",
      arrow: <IoIosArrowBack />
    }
  ]);

  return (
    <>
      <div className='container-box'>
        <div className='head'>
          <h2>سفارش آگهی </h2>
        </div>

        <div className='boxes'>
          <p>
            مجموعه اشل با فعالیت تخصصی در حوزه ساخت و ساز شهری و روستایی مفتخر است با بهره گیری از کاربران واقعی شامل مهندسین ناظر و مجری، مالکان و سازندگان فعال در صنعت ساختمان ، خدمات محتوایی ارزنده ای به مشتریان عرضه کند. با اشل دقیقاً به جامعه هدف بزنید.
          </p>

          {/* <div className='button-box'> */}
            {buttonList && <ButtonList buttonList={buttonList} />}
          {/* </div> */}

          <img className='images' src={mainTelegram} />
          <hr />
          <img className='images' src={insta} />
          <hr />
          <img className='images' src={telegram} />
          <hr />
          <img className='images' src={internalBanner} />
          <hr />
        </div>
      </div>
    </>
  )

}