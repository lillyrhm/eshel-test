import { title } from 'process';
import * as React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SlideData } from '../../assets/image/image/image';
import { TELEGRAM_CHANNELS } from '../../constant/citys';
import { TEXTS } from '../../constant/texts';
import './about.css';
import SlideShow from './slideshow/SlideShow';

const StyledButton = styled.button`
display: flex;
font-size:1rem;
justify-content: space-between;
background-color:var(--app);
width:85%;
height:clamp(50px,20%,70px);
border:8px double var(--white);
border-radius:50px;
margin:0px auto;
padding:10px;
cursor: pointer;
`

export default function TelegramChannel(): JSX.Element {
  const telegramData = TELEGRAM_CHANNELS;
  console.log(telegramData);
  //if use fetch to get data from getTodos 
  // useEffect(() => {
  //   getTodos(setData)
  // }, [])
  // console.log(TELEGRAM_CHANNELS);
  return (
    <>
      <div className='container-all-page' >

        {/* < SlideShow slides={SlideData} /> */}
        <div className='cercle-div'>
          <br /><br />
          <h4>کانال های تلگرام استان ها </h4>
        </div>

        <div className='container-second-layer'>

          <h4 className='text-decoration'>{TEXTS.TELEGRAM_MSG}</h4>

          {telegramData.map((item) => {
        
            const clickHandeler = () => {
              return(
                `${item.link}`          
              )
            }
            // console.log(clickHandeler);

            return (
              <StyledButton onClick={clickHandeler}>
                {item.city}
                <IoIosArrowBack />
              </StyledButton>
            );
          })
          }
        </div>
      </div>
    </>
  )
}


