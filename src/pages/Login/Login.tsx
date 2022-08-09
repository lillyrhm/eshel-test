import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import user from "./../../assets/image/user.png";
import './login.css';
import { StyledButton } from '../../constant/constant';
import { FaDivide } from 'react-icons/fa';
import styled from "styled-components";

const Login = (props: { history: string[]; }) => {
  const [authorized, setAuthorized] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const StyledDiv = styled.div`
  background-color: var(--white);
  padding:15px;
  width:300px;
  height:210px;
  align-items: center;
  flex-direction: column;
`;

  // const getLocalToken = ( '0123456789')
  const isLoggedIn = localStorage.setItem('phoneNumber', "0123456789");

  const handleRedirect = () => {
    return history.push('/user/policy')
  }

  const handleClick = () => {
    return (history.push('/number-submit')


      // if (authorized==getLocalToken('phoneNumber','0123456789')){
      // if (authorized == localStorage.getItem('phoneNumber')) {
      //   console.log('is authorized');
      //   props.history.push('/number-submit')
      //   setError(false)
      // }
      // else {

      //   console.log('not working')
      //   setError(true);
      // }

    )
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--app)',
        height: "100vh",
        width: " 100%",
        zIndex: 100,
      }}
    >
      {error ? "لطفا شماره تلفن خود را وارد کنید" : null}

      <div className='container-all-page'>
        <img src={user} alt="user image" className='user-image' />
        <StyledDiv >
          <form>
            <input
              className='input-login'
              value={authorized}
              onChange={e => setAuthorized(e.target.value)}
              type='text'
              placeholder='شماره تلفن' src='user'
              required />

            <button
              className='button-login'
              type="button"
              onClick={handleClick}
            >
              ارسال
            </button>
          </form>
          <h6 className='text-login'> ورود به منزله موافقت با قوانین است</h6>
          <button onClick={handleRedirect} className='a-tag'>مطالعه قوانین</button>
        </StyledDiv>
      </div>
    </div >

  )
}

export default Login;
