import React, { useState } from 'react';
import { FiBookOpen, FiFile, FiFileText } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import logo from "./../../assets/image/white-contractor.svg";
import "./../../assets/style/project.css";
import ButtonList from './../../component/Button';
import "./home-page.css";

const HomePage = () => {

  const [buttonList, setButtonList] = useState([
    {
      id: 1,
      title: "پروژه های جدید",
      address: "#",
      className: "home-button",
      icon: <FiFile />,
      arrow: <IoIosArrowBack />
    },
    {
      id: 2,
      title: "پروژه های جاری",
      address: "#",
      className: "home-button",
      icon: <FiFileText />,
      arrow: <IoIosArrowBack />
    },
    {
      id: 3,
      title: "بانک قوانین و کتب",
      address: "#",
      className: "home-button",
      icon: <FiBookOpen />,
      arrow: <IoIosArrowBack />
    }
  ]);

  return (
    <div
      style={{
        backgroundColor: '#808285',
        width: '100%',
        height: '100vh',
        margin:'0px',
        padding:'0px'
      }}
    >

      <div className="homepage-container">

        {buttonList && <ButtonList buttonList={buttonList} />}

        <img src={logo} title="logo" />

        <h4>جامع ترین مرجع اطلاعات و قوانین نظارت ساختمان</h4>
      </div>
    </div>
  );
}

export default HomePage;