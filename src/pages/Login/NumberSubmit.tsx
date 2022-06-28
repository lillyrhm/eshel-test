import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

function NumberSubmit(user: { history: string[]; }) {
    const [subCode, setSubCode] = useState("");
    const isLoggedIn = localStorage.setItem('token', '1234');
    const [error, setError] = useState(false);

    const history = useHistory()

    const handleChange = () => {
        if (subCode == localStorage.getItem('token')&&subCode.length<=4) {
            console.log('is authorized');
           user.history.push('/home')
           setError(false)

        }
        else {
            console.log('not working')
            setError(true)

        }
    }


    // const [authorize, setAuthorize] = useState(true);
    // const handleChange = () => {
    //     return history.push('/home')
    // authorized ? (history.push('/home')) : (<Redirect to='/' />)
    // }

    // if (authorized) {
    //     return <Redirect to='/' />
    // };

    return (
        <div>
        <br/>

            {error? <h5>please! Enter The Right code</h5>:null}

            <label htmlFor="codeNumber">کد تایید:</label><br />
            <input
                type="text"
                id='codeNumber'
                placeholder="کد تایید"
                value={subCode}
                onChange={(e) => setSubCode(e.target.value)} />
            <button onClick={handleChange}>submit</button>
        </div>
    )
}

export default NumberSubmit;
