import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from 'react-router-dom';
import paper from "./../../assets/image/new-projects (1).svg";
import onGo from "./../../assets/image/on-going-projects (1).svg";
import ruleBank from "./../../assets/image/rules-bank (2).svg";
import logo from "./../../assets/image/white-contractor.svg";
import "./../../assets/style/project.css";
import "./home-page.css";
import OnGoing from './project/OnGoing';


const HomePage = ({ user }) => {
  const history = useHistory();

  const handleNewProject = () => {
    return history.push('./project/new');
  };

  const handleCurrentProject = () => {
    return history.push('./project/on-going');
  };

  const handleBookBank = () => {
    return history.push('./project/roule-book-bank');
  };

  return (
    <div
      style={{
        backgroundColor: '#808285',
        width: '100%',
        height: '100vh',
        margin: '0px',
        padding: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        // position: 'fixed'
      }} >
      <div className='container-all-page '>
        <div className="homepage-container">
          <button className="home-button" onClick={handleNewProject}>
            <div className='home-button-div'>
              <img src={paper} className="img-home-button" />
              پروژه های جدید
            </div>
            <IoIosArrowBack />
          </button>

          <button className="home-button" onClick={handleCurrentProject}>
            <div className='home-button-div'>
              <img src={onGo} className="img-home-button" />
              پروژه های جاری
            </div>
            <IoIosArrowBack />
          </button>

          <button className="home-button" onClick={handleBookBank}>
            <div className='home-button-div'>
              <img src={ruleBank} className="img-home-button" />
              بانک قوانین و کتب
            </div>
            <IoIosArrowBack />
          </button>

          <img src={logo} title="logo" />

          <h4>جامع ترین مرجع اطلاعات و قوانین نظارت ساختمان</h4>
        </div>
      </div>
    </div>
  );
}

export default HomePage;