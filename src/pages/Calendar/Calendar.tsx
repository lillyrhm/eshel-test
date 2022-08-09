import * as React from 'react';
import Calendar from 'react-calendar';
import './calendar.css';

export default function CalendarPage(): JSX.Element {

  return (
    <>
      <div className='container-all-page' >
        <div className='container-second-layer'>

          <h3>calendar data</h3>

          <Calendar />
        </div>

        <div className='data-box'>
          <h6>اینجا بنویسید</h6>
        </div>
      </div>
    </>
  )
}
