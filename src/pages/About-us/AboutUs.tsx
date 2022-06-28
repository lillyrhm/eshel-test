import React, { useEffect, useState } from 'react';
// import getTodos from '../api/get-todos';
import aboutData from './aboutData';
import ButtonList from '../../component/Button';
import './about.css';

export default function AboutUs() {
  const [buttonList, setButtonList] = useState([]);

  //if use fetch to get data from getTodos 
  // useEffect(() => {
  //   getTodos(setData)
  // }, [])

  return (
    <>
      <div className='about-container'>
        <ButtonList buttonList={aboutData} />
      </div>
    </>
  )
}
