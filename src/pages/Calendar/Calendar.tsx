import * as React from 'react';
import { useState } from 'react';
import ButtonList from '../../component/Button';
import './calendar.css';
import { IoIosArrowBack } from "react-icons/io";
import Calendar from 'react-calendar';

// import Watch from '../../component/clock/Watch';

export default function CalendarPage(): JSX.Element {


  return (
    <>
       <div className='container-all-page' >
       <div className='container-second-layer'>
          <h3>calendar data</h3>
          <Calendar/>
        </div>
        <div className='data-box'>
          <h6>اینجا بنویسید</h6>
        </div>
       
      </div>
    </>
  )
}



// import React from 'react';
// // import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';

// interface CalenderPageProps {
//   selectedDate: any;
//   changeDate: Function;
//   className?: string;
// }

// export default function CalenderPageProps(props: CalenderPageProps): JSX.Element {
//   const { selectedDate = '', changeDate, className = '' } = props;
//   return (
//     <Calendar
//       calendarClassName={className}
//       shouldHighlightWeekends
//       locale="fa"
//       onChange={(date) => changeDate(date)}
//       value={selectedDate}
//       calendarTodayClassName="text-info"
//       calendarSelectedDayClassName="bg-warning"
//     />
//   );
// }