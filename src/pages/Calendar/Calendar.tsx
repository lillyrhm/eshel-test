import React, { useState } from 'react';
import ButtonList from '../../component/Button';
import './calendar.css';
import { IoIosArrowBack } from "react-icons/io";
import Calendar from 'react-calendar';

export default function CalendarPage() {
  const [buttonList, setButtonList] = useState([
    {
      id: 11,
      title: "ثبت",
      address: "#",
      className: "calendar-button",
      arrow: <IoIosArrowBack />
    }
  ])

  return (
    <>
      <div className='contain'>
        <div className='contain-calendar'>
          <Calendar/* className='calendar calendar' */ />
        </div>
        {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTehran&src=bGlsbC5yaG1AZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaXIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%2333B679&color=%230B8043"></iframe> */}
        <div className='data-box'>
          <h6>اینجا بنویسید</h6>
        </div>
        {buttonList && <ButtonList buttonList={buttonList} />}
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