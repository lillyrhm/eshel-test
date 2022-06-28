import React, {useState} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import ButtonList from '../../component/Button';
import './introduction.css';

export default function Introduction() {
  const [buttonList, setButtonList] = useState([
    {
      id: 9,
      title: "چرا اشل",
      address: "#",
      className: "present-button",
      arrow: <IoIosArrowBack />
    },
    {
      id: 10,
      title: "درباره اشل",
      address: "#",
      className: "present-button grad",
      arrow: <IoIosArrowBack />
    },
    {
      id: 11,
      title: "مجوزها",
      address: "#",
      className: "present-button grad",
      arrow: <IoIosArrowBack />
    }
  ]);

  return (
    <div className="present-container">
      {buttonList && <ButtonList buttonList={buttonList} />}

    </div>
  );
}
