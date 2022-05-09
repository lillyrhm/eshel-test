import React from 'react';
import final from "../assets/image/archive-done-projects.svg";
import "./final.css";

const Final = () => {
  return (
    <>
      <div className='final-logo-box'>
        <img src={final} className='logo-img' />
        <span><h5> آرشیو</h5></span>
      </div>

      <div className='final-box'>
        <img src={final} className='box-img' />
        <h5>پروژه های پایان یافته</h5>
      </div>
    </>
  );

}

export default Final;