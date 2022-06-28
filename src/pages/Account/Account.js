import React from 'react';
import user from "./../../assets/image/user.png";
import mail from "./../../assets/image/mail.svg";
import './account.css';
import '../../assets/style/project.css'

const Account = () => {
  return (
    <>
      <div className='container-all-page '>
        <div className=" account-container">
          <ul className="social">
            <li>
              <button className="mail-button"><img className='mail' src={mail} /></button>
            </li>
          </ul>

          <img src={user} className="user-img" />

          <h4>
            اعتبار:  {0}  ریال
          </h4>

          <form className="container-form" /*style={{ display: "flax", flexDirection:"column" }}*/>
            <label for="fname">نام:</label><br />
            <input className='inp-account' type="text" id="fname" name="fname" /><br />
            <label for="lname">نام خانوادگی:</label><br />
            <input className='inp-account' type="text" id="lname" name="lname" /><br />
            <input className="inp-button" type="submit" value="ثبت تغییرات" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Account;