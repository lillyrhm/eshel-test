import * as React from 'react';
import { useState } from 'react';
import '../../assets/style/project.css';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import user from "./../../assets/image/user.png";
import users from './../../assets/image/img/user.png';
import { getToken } from './user/signin';

function NumberSubmit(user: { history: string[]; }) {

    const [subCode, setSubCode] = useState("");
    const isLoggedIn = localStorage.setItem('token', '1234');
    const [error, setError] = useState(false);

    const history = useHistory()

    const handleChange = () => {
        if (subCode == localStorage.getItem('token') && subCode.length <= 4) {
            console.log('is authorized');
            user.history.push('/home')
            setError(false)

        }
        else {
            console.log('not working')
            setError(true)

        }
    }
    const StyledDiv = styled.div`
    background-color: var(--white);
    padding:15px;
    width:350px;
    height:250px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

    // const [authorize, setAuthorize] = useState(true);
    // const handleChange:Type: = () => {
    //     return history.push('/home')
    // authorize ? (history.push('/home')) : (<Redirect to='/' />)
    // }

    // if (authorize) {
    //     return <Redirect to='/' />
    // };

    return (
        <div
            style={{
                backgroundColor: 'var(--app)',
                height: "100vh",
                width: " 100%",
                zIndex: 100,
            }}
        >
            {error ? "لطفا کد را وارد نمائید" : null}

            <div className=' container-all-page '>
                <img src={users} alt="user image" className='user-image' />
                <StyledDiv >
                    <form>
                        <input
                            className='input-login'
                            // value={getToken()}
                            type='text'
                            placeholder='شماره تلفن'
                            src='user'
                            required />

                            <br/>

                        <input
                         className='input-login'
                            type="text"
                            id='codeNumber'
                            placeholder="کد تایید"
                            value={subCode}
                            onChange={(e) => setSubCode(e.target.value)}
                            required
                        />

                        <h6 className='text-login'>1:59</h6>

                        <button
                            className='button-login'
                            type="button"
                            onClick={handleChange}
                        >
                            تآیید
                        </button>
                    </form>
                </StyledDiv>
            </div>
        </div >

    )

}

export default NumberSubmit;
function setAuthorized(value: string): void {
    throw new Error('Function not implemented.');
}

