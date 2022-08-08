import * as React from 'react';
import { Calendar } from 'react-calendar';
import './event.css';

export default function Event() {
  return (
    <>
      <div className='container-all-page' >
        <div className='container-second-layer'>
          <h3>event</h3>
          <Calendar />
        </div>
        <div className='pic-box'>
          <h6>لطفا یک روز را انتخاب کنید</h6>
        </div>

      </div>
    </>
  );
}