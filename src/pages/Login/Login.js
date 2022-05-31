import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Login() {
const [userData,setUserData]=useState({phonNumber:""});
const [errorMessage,setErrorMessage]=useState({value:""})

const handelChange=(e)=>{
setUserData((prevState)=>{
    return{
        ...prevState,
        [e.target.name]:e.target.value,
    };
});
};

const handelSubmit=(e)=>{
    e.preventDefault();

    //if username or password field is empty, return error message
    if (userData.phonNumber === "" ) {
      setErrorMessage((prevState) => ({
        value: "Empty phonNumber",
      }));

    } else if (
      userData.phonNumber.toLowerCase() === "09369449195"
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "Invalid phonNumber" }));
      return;
    }

};

    localStorage.setItem('number','09369449195');
    let history = useHistory();
    return (
        <div className='container'>

            <label for='phoneNumber'>
                لطفاً شماره تماس خود را وارد کنید:
            </label>
            <input
                type='number'
                id='phoneNumber'
                onChange={(e)=>handelChange(e)}
                placeholder='شماره تلفن خود را وارد کنید '
                className='login-page'
                required
            />
            {/* <button onClick={() => { history.push('/number-submit') }}>دریافت کد تایید</button> */}
            <button onClick={handelSubmit}>دریافت کد تایید</button>
        </div>
    )
}

export default Login;
