import * as React from 'react';

import user from "./../../assets/image/user.png";
import mail from "./../../assets/image/mail.svg";

import './profile.css';

const Profile = () => {
  return (
    <>
      <div className='container-all-page account-container'>
        <ul className="social">
          <li>
            <a href="#" className="mail"> mail </a>
          </li>
        </ul>

        <img src={user} className="user-img" />

        <h4>
          اعتبار:  {0}  ریال
        </h4>

        <form className="container-form" /*style={{ display: "flax", flexDirection:"column" }}*/>
          <label htmlFor="fname">نام:</label><br />
          <input className='inp-account' type="text" id="fname" name="fname" /><br />
          <label htmlFor="lname">نام خانوادگی:</label><br />
          <input className='inp-account' type="text" id="lname" name="lname" /><br />
          <input className="inp-button" type="submit" value="ثبت تغییرات" />
        </form>
      </div>
    </>
  )
}

export default Profile;