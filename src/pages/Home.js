import React, { Component, useState, useEffect } from 'react';
import "../assets/style/project.css";
import "../assets/style/button.css";
import ButtonList from '../component/Button';
import logo from "../assets/image/white-contractor.svg";
import { FiFile, FiFileText, FiBookOpen } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
// import { ICON_PATH } from 'constant';

const HomePage = () => {

  // this is a custom Hook.
  //  const [dataList, isPending, error]=useFetch('http://localhost:3000/data/bb.json');
  //   const [buttonList, setButtonList]=useState(dataList)
  // const [data:buttonList, isPending, error ] = useFetch('http://localhost:3000/data/bb.json');
  // const buttonList= data;

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