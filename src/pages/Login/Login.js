import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import user from "./../../assets/image/user.png";
import './login.css';



const Login = (props) => {
  const [authorized, setAuthorized] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const getLocalToken = ('phoneNumber', '0123456789')
  // const isLoggedIn = !!localStorage.setItem('phoneNumber', "0123456789");

  const handleRedirect = () => {
    return history.push('./user/policy')
  }
  const handleClick = () => {

    // if (authorized==getLocalToken('phoneNumber','0123456789')){
    if (authorized == localStorage.getItem('phoneNumber')) {
      console.log('is authorized');
      props.history.push('/number-submit')
      setError(false)
    }
    else {

      console.log('not working')
      setError(true);
    }
  }

  return (
    <div style={{
      backgroundColor: 'var(--app)',
      height: '100vh',
      width: '100%',
      zIndex: '100'
    }}>
      {error ? <h7>لطفا شماره تلفن خود را وارد کنید</h7> : null}

      <div className='all-container'>
        <img src={user} className="user-img" />
        {/* <img src='' */}
        <div className='login-container' >

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
          <h7 className='text-login'> ورود به منزله موافقت با قوانین است</h7>
          <button onClick={handleRedirect} className='a-tag'>مطالعه قوانین</button>

        </div>
      </div>
    </div >

  )
}


export default Login;
