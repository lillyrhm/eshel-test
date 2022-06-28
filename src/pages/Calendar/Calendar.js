import React, { useState } from 'react';
import ButtonList from './../../component/Button';
import './calendar.css';
import { IoIosArrowBack } from "react-icons/io";
import Calendar from 'react-calendar';

export default function CalendarPage() {
  const [buttonList, setButtonList] = useState([
    {
      id: 11,
      title: "ثبت",
      address: "onClickHandler",
      className: "calendar-button",
      arrow: <IoIosArrowBack />
    }
  ])

  return (
    <>
      <div className='container-all-page '>
        <div className='contain-calendar'>

          <div className='calendar'>
            <Calendar />
          </div>

          <textarea name="اینجا بنویسید" className='data-box' rows="4" cols="50" />

          {buttonList && <ButtonList buttonList={buttonList} />}
        </div>
      </div>


    </>
  )
}
