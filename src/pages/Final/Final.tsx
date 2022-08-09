import * as React from 'react';
import final from '../../assets/image/img/archive-done-projects.svg';
import "./final.css";

export default function Final() {
  
  return (
    <>
      <div className='container-all-page' >
        <div className='cercle-div'>
          <img src={final} className='logo-img' />
          <span><h5> آرشیو</h5></span>
        </div>

        <div className='container-second-layer'>
          <img src={final} className='box-img' />
          <h5>پروژه های پایان یافته</h5>
        </div>
      </div>
    </>
  );

}